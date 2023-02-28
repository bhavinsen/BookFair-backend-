const express = require("express");
const app = express();
const dotenv = require("dotenv");

const localtunnel = require("localtunnel");

const cors = require("cors");
const { route } = require("./routes/user.routes");

const PORT = 8000;
app.use(
  cors({
    origin: "*",
  })
);

(async () => {
  const tunnel = await localtunnel({ port: 8000 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  tunnel.on("close", () => {
    // tunnels are closed
  });
})();

dotenv.config();

app.use(express.json());
app.use(require("./routes/user.routes"));
app.use("/", route);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
