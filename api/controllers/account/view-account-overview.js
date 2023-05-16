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
    }
  },

  fn: async function () {
    // Find the user associated with the request
    // (this assumes that you have a policy or some middleware in place that sets `req.session.userId`)
    let userRecord = await User.findOne({ id: this.req.session.userId }).populate('studiengang');

    if (!userRecord) {
      throw 'notFound';
    }

    // If billing features are enabled, include our configured Stripe.js
    // public key in the view locals.  Otherwise, leave it as undefined.
    return {
      stripePublishableKey: sails.config.custom.enableBillingFeatures? sails.config.custom.stripePublishableKey : undefined,
      user: userRecord,
    };
  }
};
