var mongoose = require('mongoose'),
User = mongoose.model('User'),
Cart = mongoose.model('Cart'),
Product = mongoose.model('Product');

exports.retrieve_cart = function(req, res) {
  User.find({uid:req.params.uid}, function(err, user) {
    if (err)
      res.send(err);
    Cart.find({uid:req.params.uid}, function(err, entry){
      if (err)
        res.send(err);
      res.json(entry);
    });
  });
};

exports.retrieve_user = function(req, res) {
  User.find({uid:req.params.uid}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
    }
  );
};


exports.list_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send("Could not find products !");
    res.json(product);
  });
};

