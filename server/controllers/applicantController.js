import ApplicantModel from "../model/Applicant.model.js";
import child_process from 'child_process';
import run_script from "../openapi/resumeParser.js";

export async function uploadResume(req,res){
    const { file } = req.body;
    console.log("formData: ", file);

    // // const file = "./openapi/Resume.pdf";
    // run_script("python", ["./openapi/main.py","extract", file.name], function(output, exit_code) {
    //     console.log("Process Finished.");
    //     console.log('closing code: ' + exit_code);
    //     console.log('Full output of script: ',output);
    //     return res.status(200).send(output);
    // });
}

export async function createApplicant(req, res) {
  try {
    const { email, firstname, lastname, mobile, address, status } = req.body;
    const applicant = new ApplicantModel({
        email,
        firstname,
        lastname,
        mobile,
        address,
        status,
    });

    applicant
      .save()
      .then(() =>
        res.status(201).send({ msg: "Applicant Successfully Added" })
      )
      .catch((error) => res.status(500).send({ error }));
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getAllApplicant(req,res){
    
    try {
            ApplicantModel.find( function(err, applicants){
            if(err) return res.status(500).send({ err });
     
            return res.status(201).send(applicants);
        }).sort({_id:-1})

    } catch (error) {
        return res.status(404).send({ error : "Cannot Find User Data"});
    }

}

export async function getApplicantById(req,res){
    console.log("REEQ :", req.params);
    console.log("REEQ1 :", req);


    const { id } = req.params; 
    try {
            ApplicantModel.findOne( { _id : id }, function(err, applicant){
            if(err) return res.status(500).send({ err });
            console.log("RESULTTTT :", applicant);
     
            return res.status(201).send(applicant);
        })

    } catch (error) {
        return res.status(404).send({ error : "Cannot Find Applicant Data"});
    }

}

export async function updateApplicant(req,res){
    
    const { id } = req.body;
    console.log("APPLICANNNNNTTT IDDD :", id.id);
    const body = req.body;
    console.log("BUUURE :", body);

    if(id){
        ApplicantModel.updateOne({ _id : id.id }, body, function(err, data){
            if(err) throw err;

            return res.status(201).send({ msg : "Applicant details Updated...!"});
        })

    }else{
        return res.status(401).send({ error : "Applicant Not Found...!"});
    }

}


export async function deleteApplicant(req, res){
    const { id } = req.params;
    console.log("id to be deleted : ", req.params);
    if(id){
        ApplicantModel.deleteOne({ _id : id }, function(err, data){
            if(err) throw err;

            return res.status(201).send({ msg : "Applicant successfully deleted...!"});
        })

    }else{
        return res.status(401).send({ error : "Applicant Not Found...!"});
    }
}