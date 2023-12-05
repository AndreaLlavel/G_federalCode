const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View from controller'),
    item_id: (req, res) => res.send('Route for find and retrieve a product from an ID from controller'),
    add_item_id: (req, res) => res.send('Route for add the current item to the shop cart from controller'),
    cart_get: (req, res) => res.send('Route for Cart View from controller'),
    cart_post: (req, res) => res.send('Route for go to checkout page from controller')
}

module.exports = shopControllers;
