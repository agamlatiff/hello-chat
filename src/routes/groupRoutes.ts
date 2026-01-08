import exporess from "express"
import multer from "multer";
import { storageGroupPhoto } from "../utils/multer";
import verifyToken from "../middlewares/verifyToken";
import * as groupController from "../controllers/groupController"

const groupRoutes = exporess.Router();

const uploadPhoto = multer({
  storage: storageGroupPhoto,
  fileFilter: (req, file, callback) => {
    if (file.mimetype.startsWith("image/")) {
      callback(null, false)
    }

    callback(null, true)
  }
})

groupRoutes.post(
  "/groups/free",
  verifyToken,
  uploadPhoto.single("photo"),
  groupController.createFreeGroup
)

export default groupRoutes