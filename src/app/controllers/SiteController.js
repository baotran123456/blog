const Course = require('../models/Course')

class SiteController {
    async index(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
            console.log(data);
        }  catch (err) {
            res.status(400).json({error: err});

        }
        
        // res.render('home');
    }

    search(req, res) {
        console.log(req.query);
        res.render('search');
    }
}

module.exports = new SiteController();
