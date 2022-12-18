import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Card,
    Divider
   
  } from '@chakra-ui/react'

import React from 'react'

export default function () {
    const arr = [{image:"https://www.yoox.com/images/items/14/14295830IB_14_f.jpg?impolicy=crop&width=306&height=390",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/50/50294257EM_14_f.jpg?impolicy=crop&width=306&height=390",name:"APM MONACO",category:"Earrings",price:"$ 116.00"},
  {image:"https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390",name:"MARNI",category:"Cross-body bags",price:"$ 1,903.00"},
  
  ]
  return (
    <div>
        <Popover>
  <PopoverTrigger>
    <span>NEWARRIVALS</span>
  </PopoverTrigger>
  <PopoverContent w={'100%'} style={{backgroundColor:"white"}}>
  <Card align='center'  w={'100%'} >
    <div style={{display:"flex",marginLeft:"250px",marginRight:"500px",fontSize:"12px"}}>
    <div style={{paddingLeft:'20px',paddingRight:"35px",backgroundColor:"#F3F3F3"}}>
    <br />
 <span  > CLOTHING</span><br /><br />
 <span>SHOES</span><br /><br />
 <span>ACCESSORIES & BAGS</span><br /><br />
 <span>VIEW ALL</span><br /><br />
 <Divider />
<br />
 <span>LATEST ARRIVALS</span><br /><br />
 <span>THIS PAST WEEK</span><br /><br />
 <span>TOP DESIGNERS</span><br /><br />
 <span>UNIQUE FINDS</span><br /><br />
 </div>

 <div style={{padding:"0 10px",display:"flex"}} className="container">
  {arr.map((el)=>(
    <div style={{minWidth:"200px",height:"auto",maxWidth:"200px",backgroundColor:"white"}} key={el.image}>
    <img src={el.image} alt="" />
    <br />
    <h2  style={{fontSize:"16px",fontWeight:"bold"}}>{el.name}</h2>
    <br />
    <h4>{el.category}</h4>
    <br />
    <h4  style={{fontSize:"14px",fontWeight:"bold"}}>{el.price}</h4>
    <br />
    <br />
  </div>
 ) )} 
</div>
</div>
</Card>
  </PopoverContent>
</Popover>
    </div>
  )
}


