const express = require("express");
let router = express.Router();
const { got } = require("got-tls");

router.route("/").get(async (req, res) => {
  try {
    let response = await got.get("https://api.ipify.org/?format=json", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
      },
      proxy: "http://lum-auth-token:2umJ3aHpysLZSrraXVVi6QzQYvPdQPCe@pmgr-customer-c_77bc7e5d.zproxy.lum-superproxy.io:24003",
    });
    return res.json({
      success: true,
      response: JSON.parse(response.body),
    });
  } catch (err) {
    return res.json({
      success: false,
      response: err.message,
    });
  }
});

module.exports = router;
