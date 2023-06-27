/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */


module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  '/': { view: 'pages/homepage' },

  'POST /check-email-exists': { action: 'check/email-exists' },
  'POST /check-username-exists': { action: 'check/user-name-exists' },

  'GET /signup': { action: 'entrance/view-signup' },
  'GET /login': { action: 'entrance/view-login' },


  'GET /account': { action: 'account/view-account-overview' },
  'GET /account/password': { action: 'account/view-edit-password' },
  'GET /account/profile': { action: 'account/view-edit-profile' },

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.

  'GET /logout': { action: 'account/logout' },
  'POST  /login': { action: 'entrance/login' },
  'POST  /signup': { action: 'entrance/signup' },
  'POST  /updateProfile': { action: 'account/update-profile' },
  'POST  /updatePassword': { action: 'account/update-password' },

  'GET /admin': { action: 'admin/view-edit-all' },

  'POST /user': 'user.create',
  'GET /user': 'user.find',
  'POST /user/:id/delete': 'user.destroy',
  'GET /user/:id/edit': 'user.edit',
  'POST /user/:id/update/': 'user.update',

  'GET /ressourcen/show': { action: 'ressources/show' },
  'GET /studiengang ': 'studiengang.show',

  'GET /studiengang/new ': { view: 'pages/studiengang/new' },

  'POST /studiengang/create': 'studiengang.create',
  'POST /studiengange/:id/delete': 'studiengang.destroy',
  'GET /studiengange/:id/edit': 'studiengang.edit',
  'POST /studiengang/:id/update/': 'studiengang.update',


  'GET /module/new': 'modul.new',
  'POST /module/create': 'modul.create',


  'POST /module/:id/delete': 'modul.destroy',
  'GET /module/:id/edit': 'modul.edit',
  'POST /modul/:id/update/': 'modul.update',


  'GET /skript/edit ': { controller: 'SkriptController', action: 'find' },
  'POST /skript/create': 'skript.create',

  'POST /skripte/:id/delete': 'skript.destroy',
  'GET /skripte/:id/edit': 'skript.edit',
  'POST /skript/:id/update/': 'skript.update',


  'GET /anleitung/edit ': { controller: 'AnleitungController', action: 'find' },


  'POST /anleitungen/:id/delete': 'anleitung.destroy',
  'GET /anleitungen/:id/edit': 'anleitung.edit',
  'POST /anleitung/:id/update/': 'anleitung.update',



  'GET /skript/:id/uploadDataForm': { controller: 'SkriptController', action: 'uploadDataForm' },
  'POST /skript/:id/uploadData': { controller: 'SkriptController', action: 'uploadData' },


  'GET /downloadFile': 'DateiController.downloadFile',


  // dynamische route zum laden der Studiengänge
  'GET /studiengang/:kuerzel': { action: 'ressources/show-all' },

  // für Upload ansicht -> Nur die Module sollen angezeigt werden die zum Studiengang gehören
  'GET /studiengang/:id/module': 'ModulController.getModulesForStudiengang',



  'GET /dozenten': 'DozentenController.list',


  'GET /upload': { controller: 'UploadController', action: 'new' },
  'GET /impressum': { view: 'pages/impressum' },
  'GET /datenschutz': { view: 'pages/datenschutz' },
  'GET /concept': { view: 'pages/concept' },
  'GET /ressources/upload': { controller: 'UploadController', action: 'new' },

  'GET /search': 'SearchController.search',
  'POST /upload/new': 'upload.save',
  'POST /bewertung/create': 'bewertung.create',

  'POST /contact/create': 'ContactController.create',
  'GET /contact': 'ContactController.index',

  'GET /api/topdownloads': { action: 'topDownloads/show' },
  'GET /api/newestresources': { action: 'newestRessources/show' }



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
