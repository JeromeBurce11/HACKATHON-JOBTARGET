import mongoose from "mongoose";

export const JobPostingSchema = new mongoose.Schema({
        "requisitionName":{ type: String},
        "title":{ type: String},
        "description": { type: String},
        "companyName": { type: String},
        "applyUrl": { type: String},
        "experience": { type: String},
        "jobFunction": { type: String},
        "industry": { type: String},
        "jobType": { type: String},
        "requirements":{ type: String},
        "duration":{ type: String},
        "education": { type: String},
        "salaryLow": { type: String},
        "salaryHigh": { type: String},
        "salaryType": { type: String},
        "contactName": { type: String},
        "contactEmail": { type: String},
        "contactPhone":{ type: String},
        "entryLevel": { type: String},
        "city": { type: String},
        "state":{ type: String},
        "region":{ type: String},
        "country":{ type: String},
        "zip": { type: String},
        "postalCode": { type: String},
      
   
});
JobPostingSchema
export default mongoose.model.JobPosting || mongoose.model('JobPosting', JobPostingSchema);