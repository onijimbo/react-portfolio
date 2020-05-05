import React from 'react';
import Spacer from '../components/Spacer'

function Contact (){
    return (
        <div>
        <div class="container bg-light">
            <div class="wrapper">
                    <h1>Contact</h1>
                                            
                

                    <div class="input">

                            

                            <label>Name :</label>
                    
                            <input type="text" name="" value="" placeholder="Akira Kurasawa" />
                    
                            <label>Email :</label>
                    
                            <input type="text" name="" value="" placeholder="rashomon@aol.com" />
                    
                            <label>Message :</label>

                            <textarea></textarea>

                            <button>Submit</button>

                    </div>       


        
         </div>          
        </div>
        <Spacer />
      </div>
    )
}

export default Contact;