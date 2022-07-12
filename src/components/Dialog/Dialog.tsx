import "./Dialog.css"

const RealNotReal = () => {
  const features = ["Background", "Eyes", "Nose", "Hair", "Skin", "Accessories"]
  return (
      <div style={{margin:"0 330px", border:"black solid "}}>
        <h3 style={{display:"flex", justifyContent:"center", marginBottom:"68px"}}>Why</h3>
        <label>Choose features
          <ul className="featuresContainer">
            {
              features.map((feature) => <li style={{listStyleType:"none"}}><label style={{display:"flex", alignItems:"center"}}><input type="checkbox" style={{height:"25px", width:"25px"}}/>{feature}</label></li>)
            }
          </ul>
        </label>
        <p style={{margin:"0 20px"}}>Other</p>
        <div style={{display:"flex",  justifyContent:"center"}}><input type="text" className="input" placeholder="Enter your own feature"/>
        </div>
        <div style={{marginTop:"190px", display:"flex", justifyContent:"space-evenly"}}>
          <button className="buttonStyle">
            Cancel
          </button>
          <button className="buttonStyle">
            Ok
          </button>
        </div>
      </div>
  )
}
export default RealNotReal
