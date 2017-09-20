/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful.
 *
 * For example:
 *   => `node app.js`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *   => `modulus deploy`
 *   => `heroku scale`
 *
 *
 * The same command-line arguments are supported, e.g.:
 * `node app.js --silent --port=80 --prod`
 */


// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
// > Note: This is not required in order to lift, but it is a convenient default.
process.chdir(__dirname);

// Attempt to import `sails`.
var Sails;
try {
  Sails = require('sails').Sails;
} catch (e) {
  console.error('To run an app using `node app.js`, you usually need to have a version of `sails` installed in the same directory as your app.');
  console.error('To do that, run `npm install sails`');
  console.error('');
  console.error('Alternatively, if you have sails installed globally (i.e. you did `npm install -g sails`), you can use `sails lift`.');
  console.error('When you run `sails lift`, your app will still use a local `./node_modules/sails` dependency if it exists,');
  console.error('but if it doesn\'t, the app will run with the global sails instead!');
  return;
}

// Load pokedex into database and start server
// Reference: https://gist.github.com/mikermcneil/bb09c39e19b50b9d0dd7
var Filesystem = require('machinepack-fs');
var app = new Sails();
app.lift({
  log: { level: 'warn' }
}, function(err) {
  if (err) {
    console.error('Error loading app:',err);
    return process.exit(1);
  }
  Filesystem.readJson({
    source: './api/services/pokedex.json',
    schema: [{
      pokemonId: 0,
      name: "Pokemon",
      type: "normal"
    }]
  }).exec({
    error: function(err) {
      console.error('Error occurred reading pokedex');
      return process.exit(1);
    },
    doesNotExist: function() {
      console.error('Could not locate file');
      return process.exit(1);
    },
    couldNotParse: function() {
      console.error('Error occurred trying to parse file');
      return process.exit(1);
    },
    success: function(data) {
      // triggers .createEach() behavior
      app.models.pokemon.create(data)
        .exec(function(err, created) {
          console.log('created',created);
          console.log('Sails app lifted at http://localhost:1337');
        });
    }
  });
});
