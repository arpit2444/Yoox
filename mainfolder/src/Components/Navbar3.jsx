import React from 'react'

export default function Navbar3() {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly", backgroundColor:"black", color:"white",marginLeft:"-50px", alignItems:"center", fontSize:"11px",gap:"20px"}}>
       <div style={{display:"flex", justifyContent:"space-evenly", backgroundColor:"black", color:"white", alignItems:"center", fontSize:"11px",gap:"20px"}}>
        <span>NEW ARRIVALS</span>
        <span>DESIGNERS</span>
        <span>CLOTHING</span>
        <span>SHOES</span>
        <span>ACCESORIES & BAGS</span>
        <span>8 BY ROOX</span>
        <span>ROOXYGEN</span>
        <span>COLLABORATIONS</span>
        <span>BEST DEALS</span>
       <button style={{backgroundColor:"#CA336E",padding:"10px"}} >GIFT GUIDE</button>
        
       </div>
    </div>
  )
}
