// Dependencies

const path = require("path");


// Routes
module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.


    // project route loads project.html
    app.get('/exercise', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    );

};
