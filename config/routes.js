/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const StudiengangController = require("../api/controllers/StudiengangController");
const UploadController = require("../api/controllers/UploadController");

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


  'GET /benutzer/all': 'benutzer.findAll',
  'GET /role/all': 'role.findAll',
  // justForTesting

  'GET /benutzer/new': 'benutzer.register',
  'GET /benutzer/existing': { view: 'pages/benutzer/existing' },
  'GET /benutzer/dashboard/:id': 'benutzer.findOneDashboard',
  'GET /benutzer': 'benutzer.find',
  // 'GET /benutzer/show': 'benutzer.findOne',

  'POST /benutzer/destroy/:id': 'benutzer.destroyOne',
  'POST /benutzer/edit/:id': 'benutzer.editOne',
  'POST /benutzer/update/:id': { controller: 'BenutzerController', action: 'updateOne' },

  'POST /register': { controller: 'BenutzerController', action: 'create' },
  'POST /login': { controller: 'BenutzerController', action: 'login' },

  'GET /ressourcen/show ': 'ressourcen.show',
  'GET /loginRequest ': { view: 'pages/loginRequest' },
  'GET /studiengang ': 'studiengang.show',
  'GET /studiengang/show ': { controller: 'StudiengangController', action: 'show' },
  'GET /studiengang/new': { view: 'pages/studiengang/new' },
  'GET /studiengang/edit ': { controller: 'StudiengangController', action: 'find' },

  'POST /studiengang/create': 'studiengang.create',
  'POST /studiengang/destroy/:id': 'studiengang.destroyOne',
  'POST /studiengang/edit/:id': 'studiengang.editOne',
  // 'POST /studiengang/update/:id': { controller: 'StudiengangController', action: 'updateOne' },

  // '/ressourcen': {view: 'pages/ressourcen'},
  'GET /wirtschaftsinformatik': { controller: 'WinController', action: 'show' },
  'GET /download/skript/:id': 'skript.download',
  'GET /download/anleitung/:id': 'anleitung.download',


  'GET /skript/edit ': { controller: 'SkriptController', action: 'find' },
  'POST /skript/destroy/:id': 'skript.destroyOne',
  'POST /skript/edit/:id': 'skript.editOne',
  'POST /skript/create': 'skript.create',
  'POST /skript/update/:id': 'skript.updateOne',
  'GET /skript/new': { view: 'pages/skript/new' },



  'GET /anleitung/edit ': { controller: 'AnleitungController', action: 'find' },
  'POST /anleitung/destroy/:id': 'anleitung.destroyOne',
  'POST /anleitung/edit/:id': 'anleitung.editOne',
  'POST /anleitung/create': 'anleitung.create',
  'POST /anleitung/update/:id': 'anleitung.updateOne',
  'GET /anleitung/new': { view: 'pages/anleitung/new' },

  // 'GET /dozenten/edit ': { controller: 'DozentenController', action: 'find' },
  // 'POST /dozenten/destroy/:id': 'dozent.destroyOne',
  // 'POST /dozenten/edit/:id': 'dozent.editOne',
  // 'POST /dozenten/create': 'dozenten.create',
  // 'POST /dozenten/update/:id': 'dozent.updateOne',
  // 'GET /dozenten/new': { view: 'pages/dozenten/new' },
  // 'GET /dozenten': { view: 'pages/dozenten/show' },
  'GET /dozenten': 'DozentenController.list',

  'GET /marketplace': { view: 'pages/marketplace/show' },
  'GET /chat': { view: 'pages/chat/show' },
  'GET /upload': { controller: 'UploadController', action: 'new' },


  'GET /search': 'SearchController.search',
  'POST /upload/new':  'upload.save'


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
