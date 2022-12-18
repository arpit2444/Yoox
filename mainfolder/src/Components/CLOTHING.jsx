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
    <span>CLOTHING</span>
  </PopoverTrigger>
  <PopoverContent w={'100%'} style={{backgroundColor:"white"}}>
  <Card align='center'  w={'100%'} >
    <div style={{display:"flex",marginLeft:"250px",marginRight:"1000px",fontSize:"12px"}}>
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
        <img src="https://www.yoox.com/images/yoox80/banners/6824_1_trendspaceclothing_w_dd.jpg?634485886869569819" alt="" />
    <span style={{fontWeight:"bold"}}>SEE BY CHLOE</span><br />
    <span>do eiusmod tempor</span>
    </div>

    </div>
 
</div>
</Card>
  </PopoverContent>
</Popover>
    </div>
  )
}


