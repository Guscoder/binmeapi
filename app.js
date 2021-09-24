const express = require("express");
const app = express();
const database = require("./lib/dbAPI");
const cors = require("cors");
const port = 3010;
const binURL = "http://97dc-2600-1702-3740-4b60-2411-e825-f0d6-576f.ngrok.io";

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const getRandomString = () => {
  return (
    Math.random().toString(36).substring(2, 8) +
    Math.random().toString(36).substring(2, 8)
  );
};

app.get("/create", async (req, res, next) => {
  let newString = getRandomString();
  try {
    let newBinUrl = `${binURL}/${newString}`;
    let currentDate = new Date();
    await database.createBin(newString, currentDate, false);
    res.status(200).send(newString);
  } catch {
    res.status(304).send(error);
  }
});

app.get("/inspect/:binId", async (req, res, next) => {
  let bin = req.params.binId;

  let requestList = await database.getBinRequests(bin);
  res.json(requestList);
});

app.all("/:binID", async (req, res, next) => {
  // add request to proper bin in DB
  let bin = req.params.binID;
  let date = new Date();
  await database
    .addRequest(bin, req.body, req.method, req.headers, date)
    .catch((error) => res.send(error));
  res.sendStatus(200);
});

app.listen(port, () => console.log("Running your sweet app!"));