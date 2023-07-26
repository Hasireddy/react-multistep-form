import React from 'react';

function LastInfo({page,setPage,formData,setFormData}) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("submitted successfully");
        console.log(formData);
      }
  return (
    <div className="card">
        <div className="step-title">Weitere Fragen</div>

        
        <input
          type="text"
          placeholder="welche Möglichkeiten sehen Sie in Ihrem Unternehmen Abfall zu vermeiden?"
          value = {formData.highestQualification}
          onChange = {(e)=>setFormData({...formData,highestQualification:e.target.value})}
        />
        <input
          type="text"
          placeholder="Nehmen Sie eine höhere Kundenanforderung hinsichtlich des Umganga mit Resourcen in Unternehmen wahr?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />
        
        <input
          type="text"
          placeholder="Wie wichtig ist Ihnen der Klimaschutz und welche Maßnahmen treffen Sie hierzu?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

        <input
          type="text"
          placeholder="beshäftigen Sie sich mit dem Thema Resilienz? Wenn ja inwiefern?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />   

    
    <button onClick = {handleSubmit}> 
          Submit
        </button>
    <br/>
        <button onClick = {()=>{setPage(page-1)}}>
          Previous
        </button>
    </div>


  )
}

export default LastInfo;