import { useState } from "react"

export default  function App () {
  const [tab, setTab] = useState("select topic")
  
  const text = ["Html is the page of the internet",
     "CSS is the stile of the page",
     "JS is the main logic of the page"]

     

     function showHtml () {
      setTab(text[0])
     }
     
       function showCSS () {
      setTab(text[1])
     }

       function showJS () {
      setTab(text[2])
     }

     
     
  
  return(
    <div className = "box">
   <button style={tab === text[0] ? {background: "aqua" } : null } onClick={showHtml}>HTML</button>
   <button style={tab === text[1] ? {background: "aqua" } : null }  onClick={showCSS}>CSS</button>
   <button style={tab === text[2] ? {background: "aqua" } : null } onClick={showJS}>JavaScript</button>
   <p>{tab}</p>
   </div>
  )
}

