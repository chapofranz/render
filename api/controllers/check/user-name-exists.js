module.exports = {
  friendlyName: 'Check Username Exists',
  description: 'Check if a username is already in use.',
  inputs: {
    userName: {
      required: true,
      type: 'string',
      description: 'The username to check.',
    },
  },
  exits: {
    userNameExists: {
      responseType: 'conflict',
      description: 'The provided username is already in use.',
    },
    userNameDoesNotExist: {
      responseType: 'notFound',
      description: 'The provided username does not exist.',
    },
  },
  fn: async function ({ userName }) {

    
    
    var user = await User.findOne({
      userName: userName
    });



    if(user) {
      if(this.req.me && user.id === this.req.me.id) {
        throw 'userNameDoesNotExist'; 
      } else {
        throw 'userNameExists'; 
      }
    } else {
      throw 'userNameDoesNotExist'; 
    }
  }
};