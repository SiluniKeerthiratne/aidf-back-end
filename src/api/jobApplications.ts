import { create } from "domain";
import express from "express";
import { createJobApplication, getJobApplications } from "../application/features/jobApplications";

const jobApplicationRouter = express.Router();

jobApplicationRouter.route("/").post(createJobApplication).get(getJobApplications);

export default jobApplicationRouter