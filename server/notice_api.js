// Handling the notice_api
var express = require('express');
var router = express.Router();


//Return list of all notices (no checking for adminstrator (api must be updated for public use)
router.route('/notice')
    .get(function (req, res) {
        Notice.find({}, function (err, notices) {

            if (err)
                res.send(err);

            res.json(notices);
        });
    });

//Create new notice
router.route('/notice/:songName')

    //Create a new notice based on songname
    .post(function (req, res) {
        var notice = new Notice();

        notice.content = req.body.content;
        notice.songName = req.params.songName;
        notice.copyright = "Visable";

        // save the tab and check for errors
        notice.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Notice created!' });
        });

    })

     .put(function (req, res) {
        //Update the information of one of the tabs
        Notice.findOne({ 'songName': req.params.songName }, function (err, notice) { //need to use find one or deal with the array of json objects

            if (err)
                res.send(err);

            if (notice.copyright == "Visable"){
                notice.copyright = "Hidden";
            }
            else{
                notice.copyright = "Visable";
            }

            notice.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Notice Updated' });

            });


        });

    });


module.exports = router;




