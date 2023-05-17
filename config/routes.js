/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

// const StudiengangController = require("../api/controllers/StudiengangController");
// const UploadController = require("../api/controllers/UploadController");

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

  'GET /admin': {action: 'admin/view-edit-all'},
  'GET /admin/profiles': {action: 'admin/view-edit-profiles'},



  'POST /user': 'user.create',
  'GET /user': 'user.find',
  // 'GET /user/show/:id': 'user.findOne',
  'GET /user/delete/:id': 'user.destroy',
  'GET /user/edit/:id': 'user.edit',
  'POST /user/update/:id': 'user.update',
  'GET /user/dashboard': { view: 'pages/user/dashboard' },


  'GET /ressourcen/show': { view: 'pages/ressources/show' },
  'GET /studiengang ': 'studiengang.show',
  'GET /studiengang/show ': { controller: 'StudiengangController', action: 'show' },
  'GET /studiengang/new': { view: 'pages/studiengang/new' },
  'GET /studiengang/edit ': { controller: 'StudiengangController', action: 'find' },

  'POST /studiengang/create': 'studiengang.create',
  'POST /studiengang/destroy/:id': 'studiengang.destroyOne',
  'POST /studiengang/edit/:id': 'studiengang.editOne',
  // 'POST /studiengang/update/:id': { controller: 'StudiengangController', action: 'updateOne' },


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

  'GET /dozenten': 'DozentenController.list',

  'GET /marketplace': { view: 'pages/marketplace/show' },
  'GET /chat': { view: 'pages/chat/show' },
  'GET /upload': { controller: 'UploadController', action: 'new' },
  'GET /impressum': { view: 'pages/impressum'},
  'GET /datenschutz': { view: 'pages/datenschutz'},
  'GET /concept': { view: 'pages/concept'},

  'GET /search': 'SearchController.search',
  'POST /upload/new': 'upload.save'


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
