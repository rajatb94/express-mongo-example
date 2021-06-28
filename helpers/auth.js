const { default: axios } = require("axios");

function async verifyJWT(token){
  
    return new Promise(function (resolve, reject) {
      jwt.verify(token, 'shhhhh', function (err, decoded) {
        if (decoded.userId present in DB) {
          resolve()
        } else {
          reject("Auth Failed Puja")
        }
      });
    })
  }


  

  function  async createJWT(token){
    try{
        let response = await axios.post("/setPost", {dkjg:"dgjhh"})
    }catch(err){

    }
    
    
  }


  module.exports = {
      verifyJWT: verifyJWT,
      createJWT: createJWT
  }