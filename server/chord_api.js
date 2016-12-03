// Handling the chord_api
var express = require('express');
var router = express.Router();
var sanitizer = require ('sanitize-html');

//Fix the sanitizer to not allow any tags
function sanitize (text){
    return  sanitizer(text,{allowedTags: [],allowedAttributes: []});
}


router.route('/chord/public')
    .get(function(req, res) {
      Tab.find({'copyright':true,'type': true},function(err, tabs) {
            
            if (err)
                res.send(err);
                
            res.json(tabs);
      });
});



router.route('/chord/private/:userName')
    .get(function(req, res) {
      Tab.find.distinct({songName: 1, _id: 0},function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }).where('copyright').equals(true).where('type');
});




//Return list of song names for a specific user
router.route('/chord/:songName')

    //Return the song
   .get(function(req, res) {
      Tab.find({'songName':req.params.songName}, function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      });
})


//Create a new song update
.post(function(req, res) {
     var tab = new Tab();
       
        tab.content = sanitize(req.body.content); 
        tab.userName = sanitize(req.body.userName);
        tab.songName = sanitize(req.params.songName);
        tab.type = sanitize(req.body.type);
        tab.valid = sanitize(req.body.valid);       
        tab.copyright = true;
        tab.version = 1;

        // save the Tab and check for errors
        tab.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tab created!' });
        });

})

 .put(function(req, res) {
      //Update the information of one student using student number in URL
      Tab.findOne({'songName':req.params.songName},function(err, tab) { //need to use find one or deal with the array of json objects
            
            if (err)
                res.send(err);
            
        tab.content = sanitize(req.body.content); 
        tab.type = sanitize(req.body.type);
        tab.valid = sanitize(req.body.valid);  
        tab.version = tab.version +1;

            tab.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tab Updated' });
        
        });
        

      }); 

  })

     .delete(function(req, res) { //Wipe the server, be carefull, remove after devlopment
      Tab.remove(function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }).where('userName').equals(req.params.userName);

});







  ///---------------------------Devlopment
  //Only for devlopment
router.route('/chord')
    .get(function(req, res) {
      Tab.find(function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }); 

})

   .delete(function(req, res) { //Wipe the server, be carefull, remove after devlopment
      Tab.remove(function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      });

});





module.exports = router;




