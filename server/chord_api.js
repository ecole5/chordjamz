// Handling the chord_api
var express = require('express');
var router = express.Router();
var sanitizer = require ('sanitize-html');

//Fix the sanitizer to not allow any tags
function sanitize (text){
    return  sanitizer(text,{allowedTags: [],allowedAttributes: []});
}


//Return list of public chord names, where copywrite == true
router.route('/chord/names')
    .get(function(req, res) {
      Tab.find({songName: 1, _id: 0},function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }).where('copyright').equals(true); // MAKE SURE TO CHANGE TO ONLY PUBLIC LATTER
});


router.route('/chord')
    .get(function(req, res) {
      Tab.find(function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }).where('copyright').equals(true); // MAKE SURE TO CHANGE TO ONLY PUBLIC LATTER

})

   .delete(function(req, res) { //Wipe the server, be carefull
      Tab.remove(function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      });

});



//Return list of song names for a specific user
router.route('/chord/:userName')
   .get(function(req, res) {
      Tab.find({'userName':req.params.userName}, {songName: 1, _id: 0},function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }).where('copyright').equals(true);

})

.post(function(req, res) {
     var tab = new Tab();
       
        tab.content = sanitize(req.body.content); 
        tab.userName = sanitize(req.params.userName);
        tab.songName = sanitize(req.body.songName);
        tab.type = sanitize(req.body.type);
        tab.copyright = true;
 

      
        // save the Tab and check for errors
        tab.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tab created!' });
        });
});





module.exports = router;




