
// Handling the chord_api
var express = require('express');
var router = express.Router();

router.route('/chord')
    .get(function(req, res, next) {
      Tab.find(function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }).where('copyright').equals(true); // MAKE SURE TO CHANGE TO ONLY PUBLIC LATTER

})
.post(function(req, res) {
     var tab = new Tab();      // create a new instance of the Bear model
        tab.content = req.body.content;  // set the bears name (comes from the request)
        tab.userName = req.body.userName;
        tab.songName = req.body.songName;
        tab.version = req.body.version;
        tab.copyright = true;
        tab.type = req.body.type;
        tab.dateModified = new Date ();
      
        // save the bear and check for errors
        tab.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tab created!' });
        });
});



router.route('/chord/:userName')

   .get(function(req, res, next) {
      Tab.find(function(err, tabs) {
            
            if (err)
                res.send(err);
            
            res.json(tabs);
      }).where('userName').equals(req.params.userName).where('copyright').equals(true);

});





module.exports = router;




