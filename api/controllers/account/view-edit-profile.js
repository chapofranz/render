module.exports = {


  friendlyName: 'View edit profile',


  description: 'Display "Edit profile" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/edit-profile',
    },

    notFound: {
      description: 'No Studiengaenge found in the database', 
      responseType: 'notFound'
    }
  },


  fn: async function () {


    const studiengaenge = await Studiengang.find();
   
   
    if (!studiengaenge) {
      throw 'notFound';
    }

    return { studiengaenge: studiengaenge };

  }


};
