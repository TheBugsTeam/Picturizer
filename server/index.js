const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv").config({ path: "./server/config/.env" });

const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extented: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

//app.use("/api/users", require("./routes/api/users"));
//app.use("/api/login", require("./routes/api/loginUser"));
app.use("/api/games", require("./routes/api/games"));
app.use("/api/steam", require("./routes/api/steam"));
app.use("/api/autocomplete", require("./routes/api/search/autocomplete"));
app.use("/api/samples", require("./routes/api/getRandomSamples"));
app.use("/api/lasts", require("./routes/api/getLastSamples"));
app.use("/update/newupdater", require("./routes/updater/updateGames"));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
