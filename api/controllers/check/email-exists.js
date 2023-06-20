module.exports = {
    friendlyName: 'Check Email Exists',
    description: 'Check if an email address is already in use.',
    inputs: {
      emailAddress: {
        required: true,
        type: 'string',
        isEmail: true,
        description: 'The email address to check.',
      },
    },
    exits: {
      emailExists: {
        responseType: 'conflict',
        description: 'The provided email address is already in use.',
      },
      emailDoesNotExist: {
        responseType: 'notFound',
        description: 'The provided email address does not exist.',
      },
    },

    fn: async function ({ emailAddress}) {
      var newEmailAddress = emailAddress.toLowerCase();
  
      var user = await User.findOne({
        emailAddress: newEmailAddress
      });
      

      if(user) {
        if(this.req.me && user.id === this.req.me.id) {
          throw 'emailDoesNotExist';
        } else {
          throw 'emailExists'; 
        }
      } else {
        throw 'emailDoesNotExist'; 
      }
    }
  };
  //  this.req.me