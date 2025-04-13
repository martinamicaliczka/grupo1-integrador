const indexController = {
   index: function (req, res) {
      return res.render('index', {estalogeado: false})
   },
   register: function(req,res){
      return res.render('index')
   }, 
   login: function(req,res){
      return res.render('index');
   }, 
   logout: function(req, res){
      return res.render('index', {estalogeado: false});
   }
};
 
module.exports = indexController;