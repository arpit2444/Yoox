import React, { useEffect, useState } from 'react'
import { GoPencil} from 'react-icons/go';
import { AiTwotoneUnlock } from 'react-icons/ai';
import { Divider } from '@chakra-ui/react'



export default function Navbar1() {
//     const arr =["WANT TO RECEIVE YOUR GIFTS IN TIME? | DISCOVER MORE",
        
// "FREE STANDARD SHIPPING ON ORDERS OVER $100"]
      
        const [slide, setSlide] = useState(0);
         
        useEffect(() => {
            const interval = setInterval(() => {

          if(slide==0){
            setSlide(slide=>1)
            
          }
          else{
            setSlide(slide=>0)
          }
            }, 3000);
            return () => clearInterval(interval);
          }, [slide]);
  return (
    <div style={{fontSize:"10px"}}>
    <div style={{"display":"flex","justifyContent":"space-evenly",marginTop:"10px",marginBottom:"10px"}}>
        <div style={{"display":"flex","justifyContent":"space-evenly", "gap":"30px",alignItems:"center"}}>
            <span style={{textDecoration:"underline",fontSize:"10px",fontWeight:"bold"}}>UNITED STATE</span>
            <span style={{textDecoration:"underline",fontSize:"10px",fontWeight:"bold"}}>CUSTOMER CARE</span>
        </div>

<div>
    {/* { slide===0?<span>{arr[0]}</span>:<span>{arr[1]}</span>} */}
    <span>FREE STANDARD SHIPPING ON ORDERS OVER $100</span>
</div>

        <div style={{"display":"flex","justifyContent":"space-evenly", "gap":"30px",alignItems:"center"}}>
            <div  style={{"display":"flex","justifyContent":"space-evenly",alignItems:"center"}}>
            <GoPencil/>
            <span style={{textDecoration:"underline",fontSize:"10px",fontWeight:"bold"}} >REGISTER</span>
            </div>
            <div style={{"display":"flex","justifyContent":"space-evenly",alignItems:"center"}}>
            <AiTwotoneUnlock/>
            <span style={{textDecoration:"underline",fontSize:"10px",fontWeight:"bold"}}>LOGIN</span>
            </div>
        </div>
        
    </div>
    <Divider />
    </div>
  )
}
