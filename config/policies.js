/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,
  '*': 'is-logged-in',

  //  Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,

  'check/*': true,

  SearchController: {
    '*': 'is-logged-in',
  },

  StudiengangController: {
    'update': 'is-super-admin',
    'delete': 'is-super-admin',
    'findOne': 'is-super-admin',
    'findAll': 'is-super-admin',
    'create': 'is-super-admin',
    'editOne': 'is-super-admin',
  },


  ModulController: {
    'findOne': 'is-super-admin',
    'find': 'is-super-admin',
    'findOrCreate': 'is-super-admin',
  },

};
