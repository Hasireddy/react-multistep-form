const LocationInfo = ({page,setPage,formData,setFormData}) => {
    return (
      <div className="card">
        <div className="step-title">Mitarbeiter Info</div>

        <label htmlFor="umsatz">Umsatz</label><br/>
        <input
          type="text"
          placeholder="Wie gliedert sich der Umsatz des zu untersuchenden Geshäftsjahres? Nach Abteilungen und wirtschaftszweigen?"
          value = {formData.umsatz}
          onChange = {(e)=>setFormData({...formData,umsatz:e.target.value})}
        />

      <label htmlFor="marbeit">Mitarbeiter</label><br/>
        <input
          type="text"
          placeholder="Wie viele sozialverschunspflichtige Mitarbeiter arbeiten bei Ihnen? Bitte geben Sie hier den Jahresdurchschnitt an!"
          value = {formData.mitarbeiter}
          onChange = {(e)=>setFormData({...formData,mitarbeiter:e.target.value})}
        />

      <label htmlFor="abfall">AbfallManagement</label><br/>
        <input
          type="text"
          placeholder="Werden Ihre Mitarbeiter im Kontext des Abfallmanagements regelmäßig geschult?"
          value = {formData.abfall}
          onChange = {(e)=>setFormData({...formData,abfall:e.target.value})}
        />

        <label htmlFor="prod">Produkte</label><br/>
        <input
          type="text"
          placeholder="Wählen Sie die Rohstoffklassen aus,die in Ihrem Unternehmen vorkommen!"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

        <input
          type="text"
          placeholder="Wählen Sie die Rohstoffklassen aus,die in Ihrem Unternehmen vorkommen!"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

        <input
          type="text"
          placeholder="Nennen Sie die für Ihr Unternehmen relevanten Rohstoffe die Sie einkaufen und verarbeiten!"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

        <input
          type="text"
          placeholder="Falls Sie keine Rohstoffe verarbeiten,Welches Halbzeug verarbeiten/veredeln Sie?"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

        <input
          type="text"
          placeholder="Wie werden die Rohstoffmengen bei Ihnen erfasst? (gewicht,Stückzahl,Volumengewicht m3/t,Massenfluss Kg/Tag)"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

      <input
          type="text"
          placeholder="
          Geben Sie hier die Rohstoffmenge an!"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

      <input
          type="text"
          placeholder="Haben Sie Schwierigkeiten bei der Beschaffung?"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

      <input
          type="text"
          placeholder="Wie kommen die Rohstoffe etc. bei Ihnen an? Mehrweg,Einwegverpackungen?"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />

      <input
          type="text"
          placeholder="Wie werden die Rohstoffe bei Ihnen gelagert? Mehrweg-/Einwegsystem?"
          value = {formData.product}
          onChange = {(e)=>setFormData({...formData,product:e.target.value})}
        />
  
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
    
  export default LocationInfo;