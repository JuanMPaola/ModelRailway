const { Router } = require('express');

// Here import the controllers
// e.g : const { getVdById } = require('../controllers/getVdById');
const { getAllPosts } = require('../handlers/Posts/GetAllPosts');
const { getPostById } = require ('../handlers/Posts/GetPostById');
const { postPost } = require('../handlers/Posts/PostPost');


const { getAllCategoris } = require('../handlers/Categoris/GetAllCategoris');
const { postCategori } = require('../handlers/Categoris/PostCategori');
const { deletePost } = require('../handlers/Posts/DeletePost');


const router = Router();


// Here config the routers using the controllers
// e.g : router.get("/posts/:id", getVdById);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", postPost);

//router.put("/posts/:id", getPostById)

router.delete("/posts/:id", deletePost);

router.get("/categoris", getAllCategoris);
router.post("/categoris", postCategori);


module.exports = router;