import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUserAvatar,
  updateAccountDetails,
  getUsers,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { roleBasedAccess, verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1
    },
  ]),
  registerUser
)

router.route("/login").post(loginUser)
router.route('/all').get(getUsers)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)

// MR protected Routes
router.route("/verify-mr").post(verifyJWT, roleBasedAccess("MR"), (req, res) => {
  res.status(200).json({ msg: "You are authorized to access this route" });
});


router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)

export default router