// Handling the user_api
var express = require('express');
var router = express.Router();


//Determain if use exists and return ok if they do
router.route('/user/login/:userName')
    .get(function (req, res) {
        User.find({ 'userName': req.params.userName }, function (err, user) {

            if (err)
                res.send(err);

            if (user.length == 1) {
                res.json({ message: "ok" });
            }
            else {
                res.json({ message: "Not Found" });
            }

        });
    });

//create user based on username
router.route('/user/create/:userName')

    .get(function (req, res) {


        User.find(function (err, user) {
            if (user.length == 0) { //will get empty array if no results (that means no user with the same name exsists)


                var user = new User();
                user.userName = req.params.userName;

                // save the new user
                user.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json({ message: "ok" });
                });
            }
            else { //username already exsists

                res.json({ message: "fail" });
            }

        }).where('userName').equals(req.params.userName);


    });


module.exports = router;




