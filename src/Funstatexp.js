import { useState } from 'react';
import './App.css';

function App()
{       
        const[Data,setData]=useState('vaibhav')
        function updateData()
        {
            setData("savani")
        }
        return(

            <div className='App'>
                
             <button onClick={updateData}>updateData</button>
            
            </div>
           



        )


}
export default App;