const express = require("express");
const { getAllEvents, getEventbyId, addEvent, deleteEvent, changeEvent } = require("../controller/eventsController");

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getEventbyId);
router.post("/", addEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", changeEvent);

module.exports = router
