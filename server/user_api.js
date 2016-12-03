// Handling the chord_api
var express = require('express');
var router = express.Router();
var sanitizer = require ('sanitize-html');

//Fix the sanitizer to not allow any tags
function sanitize (text){
    return  sanitizer(text,{allowedTags: [],allowedAttributes: []});
}


//Return list of public chord names, where copywrite == true
router.route('/user/:userName')
    .get(function(req, res) {
      User.find( {'userName':req.params.userName},function(err, user) {
            
            if (err)
                res.send(err);
            
            res.json();
      });
})
  
    .post(function(req, res) {
     

       User.find(function(err, user) {
            if (user.length == 0){ //will get empty array if no results
                

                var user = new User();
                user.userName = req.params.userName;

                // save the Tab and check for errors
                user.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'User Created' });
        });
            }
            else{
        
                res.json({messege: 'Invalid Name'});
            }
        


        }).where('userName').equals(req.params.userName);


        
        
});


module.exports = router;




