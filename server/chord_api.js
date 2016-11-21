
// Handling the chord_api
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
      Tab.find(function(err, tabs) {
            if (err)
                res.send(err);

            res.json(tabs);
      });

});



router.put('/', function(req, res, next) {
    res.send('Got a PUT request for the api');
});


router.post('/', function(req, res, next) {
     var tab = new Tab();      // create a new instance of the Bear model
        tab.songName = req.body.songName;  // set the bears name (comes from the request)
        tab.content = req.body.content;  // set the bears name (comes from the request)


        // save the bear and check for errors
        tab.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tab created!' });
        });
});


router.delete('/', function(req, res, next) {
    res.send('Got a DELETE request for the api');
});


module.exports = router;




