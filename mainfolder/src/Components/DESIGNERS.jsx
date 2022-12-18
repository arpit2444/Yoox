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
 
  return (
    <div>
        <Popover>
  <PopoverTrigger>
    <span>DESIGNERS</span>
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

 <div style={{display:"flex",padding:"10px",marginLeft:"25px"}}>
    <div >
        <img src="https://www.yoox.com/images/yoox80/banners/6825_5_SeeByChloe_W_Second.jpg?634485886869569819" alt="" />
    <span style={{fontWeight:"bold"}}>SEE BY CHLOE</span><br />
    <span>do eiusmod tempor</span>
    </div>
<div style={{padding:"10px",marginLeft:"25px",textAlign:"center"}}>
    <div  >
        <img src="https://www.yoox.com/images/yoox80/banners/6825_1_DROP_28Merch_W.png?634485886869569819" alt="" />
    <span style={{fontWeight:"bold"}}>OFF-WHITE</span><br />
    <span>laboris nisi ut aliquip ex ea </span>
    </div>

    <div>
        <img src="https://www.yoox.com/images/yoox80/banners/6825_1_Balenciaga_W_Small.jpg?634485886869569819" alt="" />
    <span style={{fontWeight:"bold"}}>BALENECIAGA</span><br />
    <span>eu fugiat nulla pariatur</span>
    </div>
    </div>
 </div>
</div>
</Card>
  </PopoverContent>
</Popover>
    </div>
  )
}


