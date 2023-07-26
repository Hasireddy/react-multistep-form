const PersonalInfo = ({page,setPage,formData,setFormData}) => {
    return (
      <div className="card">
        <div className="step-title">Maßnahmen zur Resourceneffizienz</div>

        <label htmlFor="mass">Maßnahmen</label>
        <input
          type="text"
          placeholder="welche wurden bereits bei Ihnen durchgeführt um Rohstoffe einzusparen oder Abfälle zu vermeiden?"
          value = {formData.maßnahmen}
          onChange = {(e)=>setFormData({...formData,maßnahmen:e.target.value})}
        />

     <label htmlFor="ent">Abfallentsorgung</label>
        <input
          type="text"
          placeholder="Handelt es sich bei Ihrem Entsorger um ein Kommunales oder gewerbliches Unternehmen?"
          value = {formData.entsorgung}
          onChange = {(e)=>setFormData({...formData,entsorgung:e.target.value})}
        />
       
        
        <button onClick = {()=>{setPage(page+1)}}>
          Next
        </button>
        <br/>
        <button onClick = {()=>{setPage(page-1)}}>
          Previous
        </button>
      </div>
    );
  };
  
  export default PersonalInfo