import React,{useState} from "react";
import SignUp from "./SignUp.js";
import PersonalInfo from "./PersonalInfo.js";
import LocationInfo from "./LocationInfo.js";
import OtherInfo from "./OtherInfo.js";
import LastInfo from "./LastInfo.js";

const Main = () => {
    const [page,setPage] = useState(0);
    //Here we’ll be saving our values in our text field when switching pages to allow users to modify their previous data.
    // we created a formData hook and set its initial value to the object we want to update from our text field. Let’s update each component in the componentList.
    const [formData,setFormData] = useState({
    name: "",
    geschäftsform: "",
    familienUnternehmen: "",
    standOrte:"",
    zertifiezierung:"",
    beauftragte:"",
    umsatz: "",
    mitarbeiter:"",
    abfall: "",
    product:"",
    maßnahmen:"",
    entsorgung:"",
    highestQualification: "", 
    occupation: "",
    about: "",
  });


    const componentList = [
        <SignUp
        formData = {formData}
        setFormData = {setFormData}
        page = {page}
        setPage = {setPage}/>,
        // We are passing page ans setPage into the component as props enabling us to control the state of each components
        <LocationInfo
        formData = {formData}
        setFormData = {setFormData}
        page = {page}
        setPage = {setPage}/>,

        <PersonalInfo
        formData = {formData}
        setFormData = {setFormData}
        page = {page}
        setPage = {setPage}/>,

        <OtherInfo
        formData = {formData}
        setFormData = {setFormData}
        page = {page}
        setPage = {setPage}/>,

        <LastInfo
        formData = {formData}
        setFormData = {setFormData}
        page = {page}
        setPage = {setPage}/>,
    ];

    return(
        <div className = "main">
        <div className = "progress-bar">
        <div style = {{"width":page===0 ? "20%":page===1 ? "40%":page===2 ? "60%":page===3 ? "80%": "100%"}}></div>
        </div>
        <div>{componentList[page]}</div>
        </div>
    )
}

export default Main;