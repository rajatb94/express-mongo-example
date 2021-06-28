
const auth = require("../helpers/auth");

function verifyJWT(req, res, next){
    let token = req.headers.token
    return auth.verifyJWT(token)
    .then(function(msg){
      next()
    })
    .catch(function(err){
      res.send("Auth Failed")
    })
  }
  


module.exports = {
    verifyJWT: verifyJWT
}