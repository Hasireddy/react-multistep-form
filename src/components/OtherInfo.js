const OtherInfo = ({page,setPage,formData,setFormData}) => {

    return (
      <div className="card">
        <div className="step-title">Abfallentsorgung</div>

        <label htmlFor="sorg"></label>
        <input
          type="text"
          placeholder="Werden alle Abfallarten von einem Entsorger abgeholt?"
          value = {formData.highestQualification}
          onChange = {(e)=>setFormData({...formData,highestQualification:e.target.value})}
        />
        <input
          type="text"
          placeholder="Nenne Sie den Namen und die Addresse des Entsorgers?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />
        
        <input
          type="text"
          placeholder="Welche Abfallarten werden entsorgt?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

        <input
          type="text"
          placeholder="Welche Menge wird von der jeweiligen Abfallart entsorgt?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

        <input
          type="text"
          placeholder="Bei kommunaler Entsorgung:Wie oft werden Ihre Tonnen abgeholt und geleert?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

      <input
          type="text"
          placeholder="Welche Abfallarten werden kommunal entsorgt?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

        <input
          type="text"
          placeholder="Welche Abfall wird entsorgt?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

      <input
          type="text"
          placeholder="Wie ist der Abholzyklus?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

      <input
          type="text"
          placeholder="Welche Volumen haben die falltonnen?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

      <input
          type="text"
          placeholder="Wie hoch ist der Füllgrad der Tonnen im Durchschnitt bei Abholung in % ?"
          value = {formData.occupation}
          onChange = {(e)=>setFormData({...formData,occupation:e.target.value})}
        />

        <br />

        <button onClick = {()=>{setPage(page+1)}}>
          Next
        </button>
        <br />
        <button onClick = {()=>{setPage(page-1)}}>
          Previous
        </button>
      </div>
    );
  };
  
  export default OtherInfo;