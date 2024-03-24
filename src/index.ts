import "dotenv/config";
import express from "express";
import jobsRouter from "./api/jobs";
import { connectDB } from "./persistance/db";
import cors from "cors";
import jobApplicationsRouter from "./api/jobApplications";


const app = express();
app.use(express.json());
app.use(cors()); // allow any url to call this API
connectDB();

app.use("/jobs", jobsRouter);
app.use("/jobApplications", jobApplicationsRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
