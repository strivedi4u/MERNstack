const router = require("express").Router();
const multer = require("multer");
const userController = require('../controllers/userController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
      
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
    }
  })
  var upload = multer({storage: storage})


router.post("/", upload.single('profile'), userController.user_create);
router.get("/", userController.user_all);
router.get("/:userId", userController.user_details);
router.put("/:userId", userController.user_update);
router.delete("/:userId", userController.user_delete);






  



module.exports = router;