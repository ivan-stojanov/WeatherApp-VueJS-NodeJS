const router = require("express").Router();

const locationController = require("../controllers/locationController");

router.get("/search", locationController.locationSearch);
router.get("/:woeid", locationController.locationInformation);
router.get("/:woeid/:year/:month/:date", locationController.locationDay);

module.exports = router;
