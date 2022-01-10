const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router()

router.get('/', (req, res) => {
   res.render('index');
})

router.post('/register', (req, res) => {
  /*    req.session.user_data = req.body */
  req.flash("user", req.body);

  req.flash("successGlobal", "Ahora estás registrado Global"); //mensaje
  req.flash("success", "Ahora estás registrado"); //mensaje

  res.redirect("/products");
})

router.get("/profile", (req, res) => {
/*    const user = req.session.user_data // trae un objeto
   delete req.session.user_data  */ 
   const user = req.flash('user')[0]  // trae un array
   const message = req.flash('success')[0] //mensaje
   res.render('profile', { user, message })
});

router.get('/products', (req, res) => {
   const user = req.flash('user')[0]; // trae un array
 const message = req.flash('success')[0] //mensaje
   res.render("products", {user,message});
})

module.exports = router