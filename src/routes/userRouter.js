const express=require('express');
const router=express.Router();
const userController=require('./../controllers/userController');



router.route('/save')
      .post(userController.postCredentials);
router.route('/login')
      .post(userController.userLogin); 
router.route('/token/validate')
      .get(userController.validateToken);            
module.exports=router;