const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View from controller'),
    create_post: (req, res) => res.send('Route for Admin Create view - post from controller'),
    create_get: (req, res) => res.send('Route for Admin Create view - get from controller'),
    edit_id_get: (req, res) => res.send('Route for Admin Edit view  - get with id from controller'),
    edit_id_post: (req, res) => res.send('Route for Admin Edit view  - post with id from controller'),
    delete_id: (req, res) => res.send('Route for Admin Delete view  - delete with id from controller')
}

module.exports = adminControllers;

