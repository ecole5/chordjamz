// Handling the chord_api
var express = require('express');
var router = express.Router();

//return all public tabs
router.route('/chord/public')
    .get(function (req, res) {
        Tab.find({ 'copyright': true, 'type': true }, function (err, tabs) {

            if (err)
                res.send(err);

            res.json(tabs);
        });
    });


//Return all tabs with that username
router.route('/chord/private/:userName')
    .get(function (req, res) {
        Tab.find({ 'userName': req.params.userName }, function (err, tabs) {

            if (err)
                res.send(err);

            res.json(tabs);
        });
    });


router.route('/chord/:songName')

    //Return the chord with songname
    .get(function (req, res) {
        Tab.find({ 'songName': req.params.songName }, function (err, tabs) {

            if (err)
                res.send(err);

            res.json(tabs);
        });
    })


    //Create a new tab based on songname
    .post(function (req, res) {
        var tab = new Tab();

        tab.content = req.body.content;
        tab.userName = req.body.userName;
        tab.songName = req.params.songName;
        tab.type = req.body.type;
        tab.valid = req.body.valid;
        tab.copyright = true;
        tab.version = 1;

        // save the tab and check for errors
        tab.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Tab created!' });
        });

    })

    .put(function (req, res) {
        //Update the information of one of the tabs
        Tab.findOne({ 'songName': req.params.songName }, function (err, tab) { //need to use find one or deal with the array of json objects

            if (err)
                res.send(err);

            tab.content = req.body.content;
            tab.type = req.body.type;
            tab.songName = req.body.songName;
            tab.valid = req.body.valid;
            tab.version = tab.version + 1;

            tab.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Tab Updated' });

            });


        });

    })

    .delete(function (req, res) { //Remove single tab
        Tab.remove(function (err, tabs) {

            if (err)
                res.send(err);

            res.json(tabs);
        }).where('songName').equals(req.params.songName);

    });

    router.route('/chord/dmca/:songName')
      .put(function (req, res) {
        //Update the information of one of the tabs
        Tab.findOne({ 'songName': req.params.songName }, function (err, tab) { //need to use find one or deal with the array of json objects

            if (err)
                res.send(err);

            if (tab.copyright){
               tab.copyright = false;
            }
            else{
                tab.copyright = true;
            }

            tab.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Tab Updated' });

            });


        });

    });







///---------------------------Devlopment
//Only for devlopment
router.route('/chord')
    .get(function (req, res) {
        Tab.find(function (err, tabs) {

            if (err)
                res.send(err);

            res.json(tabs);
        });

    })

    .delete(function (req, res) { //Wipe the server, be carefull, remove after devlopment
        Tab.remove(function (err, tabs) {

            if (err)
                res.send(err);

            res.json(tabs);
        });

    });





module.exports = router;




