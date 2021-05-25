const path = require('path');
const jwt = require('jsonwebtoken');

exports.login_page = (req, res, next) => {
    const filePath = path.join(__dirname, '..', 'Pages' ,'login.html');
    res.sendFile(filePath);
};

exports.login_user = async (req, res, next) => {
    const mobilenumber = req.body.mobilenumber;
    const password = req.body.password;

    try {
        if ("hello25" != password) {
            return console.log("password is not equal")
        }
        const token = await jwt.sign(
            {
                mobilenumber: mobilenumber,
                name: "Rahul Rana"
            },
            "abcdefghijklmnopqrstuvwxyz1234567890Rana",
            {expiresIn: '1h'}
        );
        console.log("your Token \n");
        res.status(200).json({
            token: token
        });
    } catch (err) {
        res.status(500).json({
            error: "Somethong went wrong"
        });
    }
};