import React, { useState } from 'react'
import '../Styles/Task.css'
export default function Task(props) {


    const [isChecked, setisChecked] = useState(false);
     const checkHandler = ((event)=>{
       if(event.target.checked) {
        setisChecked(true);
       }
       else{
        setisChecked(false);
       }
     });

     const deleteHandle = ((event)=>{
         props.deleteHandler(event.currentTarget.value);
       // console.log(event.currentTarget.value);
    
     })

  return (
    <div className='d-flex flex-row justify-content-between w-50'>
      <input type="checkbox" onChange={checkHandler} className='form-check-input mt-2'/>

      <h5 className={isChecked? 'enableCheck':null+ ' pt-1 text-secondary'}>{props.value}</h5>

    <button onClick={deleteHandle} value={props.value} className='btn btn-sm btn-primary m-1'>
    <i className="fa fa-trash" aria-hidden="true"></i>
    </button>
    </div>
  )
}
