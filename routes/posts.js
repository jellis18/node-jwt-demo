const router = require("express").Router();
const verify = require("../validation/verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "My first post",
      description: "shouldn't access",
    },
  });
});

module.exports = router;
