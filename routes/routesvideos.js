const express = require('express');
const ControllerVideo = require("../controllers/controllerVideo");
const router = express.Router();

router.get('/cadastrar', ControllerVideo.cadastrarVideo);
router.post('/cadastrar', ControllerVideo.VideoCreate);
router.get('/', ControllerVideo.listarVideo);
router.get("/update/:id/video", ControllerVideo.UpdateVideo);
router.post("/update", ControllerVideo.UpdateVideo);
router.post("/remover", ControllerVideo.removerVideo);



module.exports = router;
