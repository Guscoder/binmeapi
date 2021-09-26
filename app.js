const express = require("express");
const app = express();
const database = require("./lib/dbAPI");
const cors = require("cors");
const port = 3010;

app.use(cors());
app.use(express.static(`${__dirname}/ui-react/build`));
// app.use(express.static("public"));

app.use(express.json());

const getRandomString = () => {
  return (
    Math.random().toString(36).substring(2, 8) +
    Math.random().toString(36).substring(2, 8)
  );
};

app.get("/create", async (req, res, next) => {
  console.log("creating");
  let newString = getRandomString();
  let currentDate = new Date();
  // await database.createBin(newString, currentDate, false).catch((error) => {
  //   console.log(error);
  // });
  let result = await database
    .createBin(newString, currentDate, false)
    .catch((error) => {
      console.log(error);
    });
  console.log(result);
  if (result) {
    res.send(newString);
  } else {
    res.sendStatus(404);
  }
});

app.get("/inspect/:binId", async (req, res, next) => {
  console.log("inspecting");
  let bin = req.params.binId;
  let requestList = await database.getBinRequests(bin);
  res.json(requestList);
});

app.all("/bins/:binID", async (req, res, next) => {
  // add request to proper bin in DB
  console.log("trying");
  let bin = req.params.binID;
  let date = new Date();
  await database.addRequest(bin, req.body, req.method, req.headers, date);
  // .catch((error) => res.send(error));
  res.sendStatus(200);
});

app.listen(port, () => console.log("Running your sweet app!"));
