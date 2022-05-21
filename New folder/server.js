import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import cors from "cors";
import * as usersCtl from "./controllers/users";
import * as switchboardsCtl from "./controllers/swithchboards";
import * as imageUploadCtl from "./controllers/imageUpload";
import * as imagesCtl from "./controllers/images";
import * as reportsCtl from "./controllers/reports";
import * as officesCtl from "./controllers/office";
import * as areaCtl from "./controllers/area";
import * as boxesCtl from "./controllers/boundingbox";
import * as statisticsCtl from "./controllers/statistics";

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

import personsRouter from "./routers/personsRouter";
import userRouter from "./routers/usersRouter";
app.use(cors());
app.use(express.json());
app.use("/api/persons", personsRouter);
app.use("/api/user", userRouter);

app.use(bodyParser.json());

app.set("port", port);
app.use(cors());
app.use(express.json());

/*** Office routes ***/
app.post("/offices/creatOffice", officesCtl.creatOffice); //creat office
app.post("/offices/createNewUser", officesCtl.createNewUser); //creat new user in the office
app.get("/offices/type/:id", officesCtl.typeOffice); //is office
app.get("/offices/:id", officesCtl.officeById); //office By Id

/*** User routes ***/
app.get("/users/getAllUsers", usersCtl.getAllUsers); //get all users in the system from office users

/*** Swithchboard routes ***/
app.get("/swithchboards/:id", switchboardsCtl.getSwitchboards);

/*** Swithchboard routes ***/
app.post(
  "/swithchboards/creatNewSwitchboard",
  switchboardsCtl.creatNewSwitchboard
); //add switchboard to the data without connected to area
app.put("/swithchboards/updateswitchboard", switchboardsCtl.updateswitchboard); //update the switchboard data
app.post(
  "/swithchboards/addSwitchboardArea",
  switchboardsCtl.addSwitchboardArea
); //connect switchboard to the area
app.post(
  "/swithchboards/addSwitchboardImage",
  switchboardsCtl.addSwitchboardImage
); //connect switchboard to the image

/*** Area routes ***/
app.post("/areas/creatArea", areaCtl.creatArea); //creat new area

/*** Image routes ***/
app.post("/images/uplaodImage", imagesCtl.uplaodImage); //uplad new image without saving it

/*** BoundingBoxes routes ***/
app.post("/addboundingBoxes/addboundingBox", boxesCtl.addboundingBox); //add new BoundingBoxes
app.post("/addboundingBoxes/addboundingBox", boxesCtl.addboundingBoximage); //add new BoundingBoxes

/*** image upload routes ***/

app.post(
  "/imgupload/upload",
  multer().single("file"),
  imageUploadCtl.uploadImage
); //get all users in the system : ;

/*** statistics ***/
app.get("/statistics/high_Switchboard", statisticsCtl.highestSwitchboard);
app.get("/statistics/lowest_switchboard", statisticsCtl.lowestSwitchboard);
app.get(
  "/statistics/top_five_switchboards",
  statisticsCtl.getTopFiveSwitchboards
);
app.get(
  "/statistics/top_last_switchboards",
  statisticsCtl.getLastFiveSwitchboards
);
app.get("/statistics/high_municipality", statisticsCtl.highestmunicipality);
app.get("/statistics/lowest_municipality", statisticsCtl.lowestmunicipality);
app.get(
  "/statistics/top_five_municipality",
  statisticsCtl.getTopFivemunicipality
);
app.get(
  "/statistics/last_five_municipality",
  statisticsCtl.getLastFivemunicipality
);

/*** db data routes ***/
app.get("/data/switchboards", reportsCtl.getswitchboards);
app.get("/data/municipalities", reportsCtl.getmunicipalities);

app.use(express.urlencoded({ extended: true }));
// router.use((req, res, next) => {
//   console.log("/", req.method);
//   next();
// });

// router.get("/", (req, res) => {
//   res.json({ message: "Please use /api" });
// });
app.all("*", (req, res) => {
  res.send("Wrong route, please try again.");
});

app.listen(port, () => console.log(`Listening on port ${port}`));