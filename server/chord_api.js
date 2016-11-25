
// Handling the chord_api
var express = require('express');
var router = express.Router();

router.route('/chord')
    .get(function(req, res, next) {
      Tab.find(function(err, tabs) {
            if (err)
                res.send(err);
            
            res.json(tabs);
      });

})



.put(function(req, res) {
    res.send('Got a PUT request for the api');
})


.post(function(req, res) {
     var tab = new Tab();      // create a new instance of the Bear model
        tab.content = req.body.content;  // set the bears name (comes from the request)
        tab.userName = req.body.userName;
        tab.songName = req.body.songName;
        tab.version = req.body.save;
        tab.copyright = true;
        tab.type = req.body.type;
      
        tab.dateModified = new Date ();
      
    


        // save the bear and check for errors
        tab.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tab created!' });
        });
})


.delete( function(req, res) {
    res.send('Got a DELETE request for the api');
});


module.exports = router;




