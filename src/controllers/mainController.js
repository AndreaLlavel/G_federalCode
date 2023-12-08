const mainControllers = {
    index: (req, res) => res.render('index'),
    home: (req, res) => res.send('Route for Home View from controller'),
    contact: (req, res) => res.send('Route for Contact View'),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;

