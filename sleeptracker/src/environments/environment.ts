// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  fire:  {
    apiKey: 'AIzaSyATlfOeUvC409gFSrKjwmDIRps4Rdypayc',
    authDomain: 'sleeptracker-2fe95.firebaseapp.com',
    databaseURL: 'https://sleeptracker-2fe95.firebaseio.com',
    projectId: 'sleeptracker-2fe95',
    storageBucket: 'sleeptracker-2fe95.appspot.com',
    messagingSenderId: '669919412671'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
