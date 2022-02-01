const express = require("express");
let router = express.Router();
const initCycleTLS = require("cycletls");

router.route("/").get(async (req, res) => {
  try {
    const cycleTLS = await initCycleTLS();

    const response = await cycleTLS(
      "https://api.ipify.org/?format=json",
      {
        ja3: "771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-21,29-23-24,0",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        proxy: "http://lum-auth-token:2umJ3aHpysLZSrraXVVi6QzQYvPdQPCe@pmgr-customer-c_77bc7e5d.zproxy.lum-superproxy.io:24003",
      },
      "get"
    );

    console.log(response);
    cycleTLS.exit();

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
