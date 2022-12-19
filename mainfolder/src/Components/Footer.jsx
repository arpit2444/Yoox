import React from 'react'
import {
  Flex,
  Box,
  useColorModeValue,
  Divider 
} from '@chakra-ui/react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import { AiOutlineTwitter } from 'react-icons/ai';
import { RiInstagramLine } from 'react-icons/ri';

import { AiFillYoutube } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
        <div style={{width:"70%",margin:"auto",display:"flex",justifyContent:"space-evenly",paddingTop:"60px"}}>
  <div style={{textAlign:"left"}}>
    <span style={{fontSize:"18px",fontWeight:"bold"}}>NEW TO YOOX
</span><br /><button style={{border:"1px solid black",padding:"0.2px 15px 0.2px 15px",textAlign:"center"}}></button> <br /><br /> <span style={{fontSize:"14px",color:"grey"}}>Shopping guide</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>iPhone/iPad/Android</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>
Browse all  Designers</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Browse all Categories</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Gift delivery</span>
  </div>
  <div style={{textAlign:"left"}}>
    <span style={{fontSize:"18px",fontWeight:"bold"}}>HELP
</span><br /><button style={{border:"1px solid black",padding:"0.2px 15px 0.2px 15px"}}></button><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Shipping times & costs</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Payments and web security</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Product quality</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Track your order</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Returns & refunds</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>FAQs</span><br /><br /><span style={{fontSize:"14px"}}>Size Guide</span>
  </div>
  <div style={{width:"32%",padding:"20px"}}>
  <Flex
      align={'center'}
    marginTop={'-30px'}
      >
       <Box
          bg={useColorModeValue('white')}
          p={4}
          boxShadow={'lg'}>
             <div>
              <AiOutlineMail size='25px' style={{margin:"auto",marginTop:"25px"}} />
      <span style={{fontSize:"24px",fontWeight:"bold"}}>YOOX NEWS</span>
      <br/>
      <span style={{fontSize:"14px",color:"gray",}} >Sign up for the newsletter
and discover the latest arrivals and promotions</span>
      <br/>
      <br />
    <input type="text" style={{backgroundColor:"#F8F8F8",padding:"10px",color:"grey",paddingLeft:"20px",paddingRight:"25px"}} placeholder='INSERT YOUR E-MAIL ID '/>
    <br />
    <br />
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <div>
    <input type="radio" id='woman' style={{color:'black'}}  name='gender' value='Woman' checked />
      <label >Woman</label>
    </div>
    <div>
    <input type="radio" id='man' style={{color:'black'}} name='gender' value='Man' /> 
      <label>Man</label>
    </div>
    </div>
<br /><br />
<div style={{display:'flex',justifyContent:"space-evenly"}}>
<input type="checkbox" style={{color:"black",width:'20px',height:"20px"}}  />
<span style={{color:"gray",fontSize:"13px",textAlign:"left",marginLeft:"10px"}}>I consent to receive YOOX newsletters via email. For further information, please consult the Privacy Policy.
</span>
</div>
<br />
<button style={{backgroundColor:"black",color:"white",padding:"13px 96px 13px 96px "}}>SIGN UP</button>
    </div>
        </Box>
    </Flex>
  </div>
  <div style={{textAlign:"left"}}>
    <span style={{fontSize:"18px",fontWeight:"bold"}}>MYOOX</span><br /><button style={{border:"1px solid black",padding:"0.2px 15px 0.2px 15px"}}></button><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Login</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>My Orders</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>My Details</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Dream Box</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Première</span>
  </div>
  <div style={{textAlign:"left"}}>
    <span style={{fontSize:"18px",fontWeight:"bold"}}>ABOUT US
</span><br /><button style={{border:"1px solid black",padding:"0.2px 15px 0.2px 15px"}}></button><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Company Info</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Press</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Affiliation</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Careers</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Student Discount</span>
  </div>
</div>
{/* First footer ends here */}
<Divider color={'white'} />
<Divider  color={'white'} />
<Divider   color={'white'}/>

<div style={{display:"flex",justifyContent:'space-between',width:"80%",margin:"auto",paddingTop:"15px",paddingBottom:"15px"}}>
  <div style={{display:"flex",justifyContent:"space-evenly",gap:"20px"}}>
    <span style={{fontSize:"11px"}}>CONNECT WITH US</span>
    <FaFacebookF size={'20px'}/>
    <AiOutlineTwitter size={'20px'}/>
    <RiInstagramLine size={'20px'}/>
    <AiFillYoutube size={'20px'}/>
    <FaPinterestP size={'20px'}/>
    <FaTiktok size={'20px'}/>
  </div>
  <div style={{display:"flex",justifyContent:"space-evenly",gap:"20px"}}>
    <FaMobileAlt size={'20px'}/>
    <span style={{fontSize:"11px"}}>DOWNLOAD THE APP FOR iOS / ANDROID</span>
  </div>
</div>
{/* 2nd footer ends here */}
<div style={{backgroundColor:"black",paddingTop:"50px",paddingBottom:"50px"}}>
  <div style={{width:"75%",margin:'auto'}}>
  <span style={{color:"white",fontSize:"12px"}}>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</span>
  <br /><span style={{color:"white",fontSize:"12px"}}>LEGAL AREA / PRIVACY POLICY</span>
  </div>
</div>
    </div>
  )
}
