const express = require('express');
const blogcontrollers=require('../controllers/blogcontrollers');
const router=express.Router();


router.get('/', blogcontrollers.blog_index);
router.post('/',blogcontrollers.blog_create_post);
router.get('/create', blogcontrollers.blog_create_get);
router.get('/:id', blogcontrollers.blog_details);
router.delete('/:id',blogcontrollers.blog_delete);


module.exports=router;