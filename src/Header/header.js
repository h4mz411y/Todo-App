import React, { useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style/style.scss"
import {clearAllData} from "../Template/addItem"
import Button from '@mui/material/Button';







function Header() {
    const buttonClick=useRef()
    const select=useSelector((state)=>state.AddItemReducer);
    const dispatch=useDispatch();
   

    useEffect(()=>{
        document.addEventListener('mousedown',(event)=>{
            if(!buttonClick.current.contains(event.target))setchange_color_show(false)
        })
    })


    const clearAll=()=>{
        dispatch(clearAllData());
    }
    


  return (
        <>
           
  

            <div className="header-outpot" style={{backgroundColor:"black"}} >
                <p>
                    To Do  ({select.NumberItem})
                </p>

                <div onClick={clearAll}>
                    <Button variant="outlined" style={{backgroundColor:"red",color:"white"}} >
                        Clear Data
                    </Button>
                </div>

            </div>



        
        </>
        
        )

}

export default Header
