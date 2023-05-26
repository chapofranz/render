module.exports = {
  friendlyName: 'View account overview',
  description: 'Display "Account Overview" page.',

  exits: {
    success: {
      viewTemplatePath: 'pages/account/account-overview',
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    },

    notLoggedIn: {
      description: 'The user is not logged in.',
      responseType: 'redirect'
    }
  },

  fn: async function () {
    //logincheck
    if (!this.req.session.userId) {
      throw {notLoggedIn: '/login'};
    }
    
    let userRecord = await User.findOne({ id: this.req.session.userId }).populate('studiengang');
    
    

    if (!userRecord) {
      throw 'notFound';
    }

    return {
      stripePublishableKey: sails.config.custom.enableBillingFeatures? sails.config.custom.stripePublishableKey : undefined,
      user: userRecord,
    };
  }
};
