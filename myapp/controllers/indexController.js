const indexController = {
   index: function (req, res) {
      const estalogeado = false; 
      return res.render('index', {estalogeado})
   },
   register: function(req,res){
      return res.render('index')
   }, 
   login: function(req,res){
      const estalogeado = true;
      return res.render('index', {estalogeado});
   }, 
   logout: function(req, res){
      const estalogeado = false;
      return res.render('index', {estalogeado});
   }
};
 
module.exports = indexController;