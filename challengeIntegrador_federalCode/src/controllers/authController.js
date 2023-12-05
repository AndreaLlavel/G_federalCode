const authController = {
    login: (req, res) => res.send('Route for Auth Login view - get from controller'),
    login_post: (req, res) => res.send('Route for Auth Login view - post from controller'),
    register_get: (req, res) => res.send('Route for Auth Register view - get from controller'),
    register_post: (req, res) => res.send('Route for Admin Register view  - post from controller'),
    logout: (req, res) => res.send('Route for Auth Logout view - get')
}

module.exports = authController;

