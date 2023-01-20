// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url :"http://localhost:8000/api/",
  firebase:{
    apiKey: "AIzaSyA_yqjgC77AdPMz5gsq83B6XLxE3VnwFwM",
    authDomain: "repcex-app.firebaseapp.com",
    projectId: "repcex-app",
    storageBucket: "repcex-app.appspot.com",
    messagingSenderId: "818124149339",
    appId: "1:818124149339:web:e9cef1858efb98d00be57e"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
