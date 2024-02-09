const { Router } = require('express');

// Here import the controllers
// e.g : const { getVdById } = require('../controllers/getVdById');
const {getPostById} = require ('../handlers/GetPostById');
const {getPosts} = require('../handlers/GetPosts');


const router = Router();


// Here config the routers using the controllers
// e.g : router.get("/posts/:id", getVdById);
router.get("/posts", getPosts)
router.get("/posts/:id", getPostById)
/*
router.post("/posts", postPosts)
router.put("/posts/:id", getPostById)
router.delete("/posts/:id", getPostById)
*/
module.exports = router;