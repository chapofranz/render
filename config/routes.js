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

  'POST /register': { controller: 'BenutzerController', action: 'create'},
  'POST /login': { controller: 'BenutzerController', action: 'login'},

  'GET /ressourcen/show ': 'ressourcen.show',



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
