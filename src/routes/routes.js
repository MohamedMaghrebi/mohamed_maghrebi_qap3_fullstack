// routes.js

const express = require('express');
const pool = require('../services/SQL/auth_db');
const dal = require('../dal/dal')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let theLogins = await dal.getLogins()
    if(DEBUG) console.table(theLogins)
    
    
    res.render('logins', {theLogins}); // Render the view using res.render()
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  if(DEBUG) console.log("logins.POST");
  try {
      await dal.addLogin(req.body.first_name,req.body.password, req.body.number, req.body.email);
      res.redirect('/logins/');
      console.log("Redirect Happend")
  } catch {
      // log this error to an error log file.
      //res.render('503');
      console.log("Error 503 ")
  }
});
router.get('/:id/delete', async (req, res) => {
  if(DEBUG) console.log('login.Delete : ' + req.params.id);
  res.render('logins_delete.ejs', {first_name: req.query.first_name, theId: req.params.id});
});


router.delete('/:id', async (req, res) => {
  if(DEBUG) console.log('logins.DELETE: ' + req.params.id);
  try {
      await dal.deleteLogin(req.params.id);
      res.redirect('/logins');
  } catch {
      // log this error to an error log file.
      res.render('503');
  }
});

router.get('/:id/edit', async (req, res) => {
  if(DEBUG) console.log('login.Edit : ' + req.params.id);
  res.render('logins_patch.ejs', {first_name: req.query.first_name, theId: req.params.id});
});

router.patch('/:id', async (req, res) => {
  if(DEBUG) console.log('logins.PATCH: ' + req.params.id);
  try {
      await dal.patchLogin(req.params.id, req.body.first_name, req.body.password);
      res.redirect('/logins/');
  } catch {
      // log this error to an error log file.
      res.render('503');
  }
});


module.exports = router;






