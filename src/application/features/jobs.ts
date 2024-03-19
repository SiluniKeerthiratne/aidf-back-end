import { NextFunction, Request, Response } from "express";
import Job from "../../persistance/entities/jobs";


const jobs = [
  {
    _id: "xyz",
    title: "Intern - Software Engineer",
    type: "Full-time", 
    location: "Remote",
  },
  {
    _id: "abc",
    title: "Software Engineer",
    type: "Full-time",
    location: "Remote",
  },
];


export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
      
  } catch (error) {
    return res.status(500).send();
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    const job = req.body;
    await Job.create(job);
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send();
  }
};

export const getJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const job = await Job.findById(req.params.id);
    
    return res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};
