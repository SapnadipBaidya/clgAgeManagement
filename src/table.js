import React from 'react'
import './App.css';
const data = require('./data.json');

function Table() {


  return (
    <div>
    <h1>collages chart</h1>
    <table>
                
     <div className='scrollit'>
     <tr> <th>name</th> <th>college</th> <th>age</th></tr>    
    {
        data.map((e)=>{
            console.log(e);
            return (
                <tr>
                 <td>{e.name}</td>
                 <td>{e.college}</td> 
                 <td>{e.age}</td>
                </tr>
              
               )
        })
    }
    
    </div>
    </table>
    </div>
  )
}

export default Table