import express, { Request, Response, Router } from "express";
import multer from "multer";
import path from "path";
import {
  NewCategory,
  GetCategorys,
  Del_Cat,
} from "../controllers/Remote/Hcloud/Catagory";
import {
  NewUser,
  CheckUser,
  LoginUser,
  UpdatePrimary,
  GetUserById,
  SentCode,
  VerifyCode,
  Del_hv_ac,
} from "../controllers/Remote/Hcloud/User";
import VerifyUser from "./middleware/UserMiddleware";
import {
  DraftListing,
  NewListing,
  GetListing,
  DelListing,
  GetPublish,
  GetOneListing,
  GetLUuser,
} from "../controllers/Remote/Hcloud/Listing";
import {
  GetDistrict,
  GetDivision,
  GetUpazila,
  NewCountry,
  NewDivision,
  NewDistrict,
  NewUpozila,
  GetCountry,
} from "../controllers/Remote/Hcloud/GeoInfo";

class HcloudRoutes {
  public router: Router;
  private upload: multer.Multer;

  constructor() {
    this.router = Router();
    this.upload = this.configureMulter();
    this.initializeRoutes();
  }

  private configureMulter(): multer.Multer {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "Uploads");
      },
      filename: (req: Request, file, cb) => {
        const dataname = Math.floor(200000000 + Math.random() * 900000);
        const actual = `${dataname}file${path.extname(file.originalname)}`;
        cb(null, actual);
        req.body.blogfilename = actual;
        req.body.image = actual;
      },
    });
    return multer({ storage });
  }

  private initializeRoutes(): void {
    // User Routes
    this.router.post("/new-user", NewUser);
    this.router.get("/check-user", VerifyUser, CheckUser);
    this.router.post("/login-user", LoginUser);
    this.router.put("/update-primary", this.upload.single("avatar"), VerifyUser, UpdatePrimary);

    // Category Routes
    this.router.post("/category", this.upload.array("image"), NewCategory);
    this.router.get("/get-categorys", GetCategorys);
    this.router.delete("/del-category/:id", Del_Cat);

    // Listing Routes
    this.router.post("/new-listing/:id", VerifyUser, this.upload.array("images"), NewListing);
    this.router.post("/draft-listing", VerifyUser, DraftListing);
    this.router.get("/get-listing", VerifyUser, GetListing);
    this.router.delete("/del-listing/:id", VerifyUser, DelListing);

    // Geo Info Routes
    this.router.get("/get-country", GetCountry);
    this.router.get("/get-district/:division", GetDistrict);
    this.router.get("/get-division/:country", GetDivision);
    this.router.get("/get-upazila/:district", GetUpazila);
    this.router.post("/new-country", NewCountry);
    this.router.post("/new-division", NewDivision);
    this.router.post("/new-district", NewDistrict);
    this.router.post("/new-upozila", NewUpozila);

    // Public Routes
    this.router.get("/get-publish", GetPublish);
    this.router.get("/get-onelisting/:id", GetOneListing);
    this.router.get("/user-list/:id/:product", GetLUuser);

    // User Info Routes
    this.router.get("/get-user/:id", GetUserById);

    // Email Verification Routes
    this.router.get("/hv-email", VerifyUser, SentCode);
    this.router.post("/hv-verify-email", VerifyUser, VerifyCode);
    this.router.delete("/del-hv-ac", VerifyUser, Del_hv_ac);
  }
}

export default new HcloudRoutes().router;