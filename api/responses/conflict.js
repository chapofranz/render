module.exports = function conflict(message) {
    var req = this.req;
    var res = this.res;
  
    var viewFilePath = '409';
    var statusCode = 409;
  
    var result = {
      status: statusCode
    };
  
    
    if (message) {
      result.message = message;
    }
  
    res.status(result.status);
    res.json(result);
  };
  