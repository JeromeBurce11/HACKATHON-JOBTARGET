import JobPostingModel from "../model/JobPosting.model.js";

export async function createJobPosting(req, res) {
  try {
    const { 
        requisitionName,
        title,
        description,
        companyName,
        applyUrl,
        experience,
        jobFunction,
        industry,
        jobType,
        requirements,
        duration,
        travel,
        education,
        salaryLow,
        salaryHigh,
        salaryType,
        contactName,
        contactEmail,
        contactPhone,
        entryLevel,
        city,
        state,
        region,
        country,
        zip,
        postalCode} = req.body;
    const jobPost = new JobPostingModel({
        requisitionName,
        title,
        description,
        companyName,
        applyUrl,
        experience,
        jobFunction,
        industry,
        jobType,
        requirements,
        duration,
        travel,
        education,
        salaryLow,
        salaryHigh,
        salaryType,
        contactName,
        contactEmail,
        contactPhone,
        entryLevel,
        city,
        state,
        region,
        country,
        zip,
        postalCode
    });

    jobPost
      .save()
      .then(() =>
        res.status(201).send({ msg: "Job is successfully added" })
      )
      .catch((error) => res.status(500).send({ error }));
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getJobs(req,res){
    
    try {
        JobPostingModel.find( function(err, jobs){
            if(err) return res.status(500).send({ err });
            return res.status(201).send(jobs);
        }).sort({_id:-1})

    } catch (error) {
        return res.status(404).send({ error : "Cannot Find Jobs Data"});
    }

}

export async function getJobById(req,res){
    console.log("REEQ :", req.params);
    console.log("REEQ1 :", req);


    const { id } = req.params; 
    try {
        JobPostingModel.findOne( { _id : id }, function(err, applicant){
            if(err) return res.status(500).send({ err });
            console.log("RESULTTTT :", applicant);
     
            return res.status(201).send(applicant);
        })

    } catch (error) {
        return res.status(404).send({ error : "Cannot Find Applicant Data"});
    }

}

export async function updateJob(req,res){
    
    const { id } = req.body;
    console.log("job IDDD :", id);
    const body = req.body;
    console.log("BUUURE id :", body);

    if(id.id){
        JobPostingModel.updateOne({ _id : id.id }, body, function(err, data){
            if(err) throw err;

            return res.status(201).send({ msg : "Job details Updated...!"});
        })

    }else{
        return res.status(401).send({ error : "Job posting is not found...!"});
    }

}


export async function deleteJob(req, res){
    const { id } = req.params;
    console.log("id to be deleted : ", req.params);
    if(id){
        JobPostingModel.deleteOne({ _id : id }, function(err, data){
            if(err) throw err;

            return res.status(201).send({ msg : "Job posting is successfully deleted...!"});
        })
    }else{
        return res.status(401).send({ error : "Job posting is not found...!"});
    }
}