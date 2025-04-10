const indexController = {
   index: function (req, res) {
      return res.render('index', {
         usuarios: db.usuarios,
      })
   },
   register: function(req,res){
      return res.render('index')
   }, 
   login: function(req,res){
      return res.render('index')
   }, 
};
 
module.exports = indexController;