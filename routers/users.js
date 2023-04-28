const express=require("express");

const isAuthenticatedUser=require("../middlewares/userAuth");
const {getAllUsers, getUserbyId, addUser, deleteUser, changeUser}=require("../controller/usersController");

const router=express.Router();


router.get("/:token", getAllUsers);
router.get("/:id/:token", getUserbyId);
router.post("/login", addUser);
router.delete("/:id/:token", deleteUser);
router.put("/:id/:token", changeUser);

module.exports=router;

