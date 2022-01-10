const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router()

router.get('/', (req, res) => {
   res.render('index');
})

router.post('/register', (req, res) => {
   /*    req.session.user_data = req.body */
   req.flash('user', req.body)


   req.flash("success", "Ahora estás registrado"); //mensaje
   res.redirect('/profile')
})

router.get("/profile", (req, res) => {
/*    const user = req.session.user_data // trae un objeto
   delete req.session.user_data  */ 
   const user = req.flash('user')[0]  // trae un array
   const message = req.flash('success')[0] //mensaje
   res.render('profile', { user, message })
});

router.get('/products', (req, res) => {
   res.render('profile')
})

module.exports = router