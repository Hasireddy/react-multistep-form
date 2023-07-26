const SignUp = ({page,setPage,formData,setFormData}) => {
    //We are accepting the props passed to the component in Main.js to manipulate the state in each component.
    return(
        <div className = "card">
            <div className = "step-title">
                Geschäfts Info
            </div>
            <label htmlFor="fname">Name</label><br/>
         <input type = "text"
                placeholder = "Bitte schreiben Sie Ihren Unternehmensnamen in das Feld!"
                className = "form-group"
                value = {formData.name}
                // setting the value of the form to the props value     
                onChange = {(e)=>setFormData({...formData,name:e.target.value})}/>   
         {/* setting the formData to the value input of the textfield */}
         <label htmlFor="gform">Geschäftsform</label><br/>
         <input type = "text"
                label = "Geschäftsform"
                placeholder = "Wählen sie die passende Geshäftsform aus!"
                className = "form-group"
                value = {formData.geschäftsForm}
                onChange = {(e)=>setFormData({...formData,geschäftsForm:e.target.value})}/>  
{/* 
        <label htmlFor = "geschaft">Geschäftsform</label>
        <select id="cars" name="cars" size="3">
        <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option> 
        </select> */}
        <label htmlFor="familie">Familienunternehmen</label><br/>
        <input type = "text"
               label = "Familienunternehmen"
                placeholder = "Ist das Unternehmen Familiengeführt?"
                className = "form-group"
                value = {formData.familienUnternehmen}
                onChange = {(e)=>setFormData({...formData,familienUnternehmen:e.target.value})}/> 

        <label htmlFor="ort">Standort</label><br/>
        <input
          type="text"
          label = "Standorte"
          placeholder = "Geben Sie hier die Anzahl und Addressen der Standorte ein!"
          value = {formData.standOrte}
          onChange = {(e)=>setFormData({...formData,standOrte:e.target.value})}
        />

    <label htmlFor="zerti">Zertifizierung</label><br/>
      <input
          type="text"
          label = "Zertifizierung"
          placeholder="Welche Zertifizierungen hat Ihr Unternehmen"
          value = {formData.zertifizierung}
          onChange = {(e)=>setFormData({...formData,zertifizierung:e.target.value})}
        />

    <label htmlFor="beauf">Beauftragte</label><br/>
    <input
          type="text"
          label = "Beauftragte"
          placeholder = "Gibt es einen abfallbeauftragten? Wer ist für die Entsorgung zuständig?"
          value = {formData.beauftragte}
          onChange = {(e)=>setFormData({...formData,beauftragte:e.target.value})}
        />


        <button onClick = {()=>{setPage(page+1)}}>
            Next
        </button>
        
        </div>

    )
}

export default SignUp;