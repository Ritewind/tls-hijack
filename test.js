const { Server } = require("got-tls");
import { got } from "got-tls";

Server.connect();


let response = await got.get("https://httpbin.org/anything", {
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
  },
});
