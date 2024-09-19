import { useState } from 'react'
import './inputfields.css'

export default function Textfield () {

    const [inputContent, setInputContent] = useState('');

    function handleChange (e) {
        console.log(e.target.value);
        setInputContent(e.target.value);
    }

    return (
        <>

     <div className="container">
        <div className="section">
             <div className="question">
                 <h1> Hva er adressen til drømtorp VGs?</h1>
             </div>
       
         <div className="answer">
             <label>
             <input 
             onChange={handleChange}
             className="myInput" />
             </label>
            </div>
           
         </div>
    </div>
      
        </>
    )
}