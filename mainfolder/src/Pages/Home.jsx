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




export default function Home() {

  const arr = [{image:"https://www.yoox.com/images/items/14/14295830IB_14_f.jpg?impolicy=crop&width=306&height=390",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/50/50294257EM_14_f.jpg?impolicy=crop&width=306&height=390",name:"APM Monaco WONDERLAND",category:"Earrings",price:"$ 116.00"},
  {image:"https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390",name:"MARNI",category:"Cross-body bags",price:"$ 1,903.00"},
  {image:"https://www.yoox.com/images/items/16/16199356WX_14_f.jpg?impolicy=crop&width=306&height=390",name:"MINIMUM",category:"Coats",price:"$ 253.00"},
  {image:"https://www.yoox.com/images/items/17/17451966FK_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/13/13964054RW_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/45/45721715SC_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/14/14293562JI_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  ]

  const arr1 = [{image:"https://www.yoox.com/images/items/15/15257841AU_14_f.jpg?impolicy=crop&width=306&height=390",name:"SOLACE LONDON",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/17/17449510RK_14_f.jpg?impolicy=crop&width=306&height=390",name:"SAINT LAURENT",category:"Earrings",price:"$ 116.00"},
  {image:"https://www.yoox.com/images/items/16/16178443DB_14_f.jpg?impolicy=crop&width=306&height=390",name:"MSGM",category:"Cross-body bags",price:"$ 1,903.00"},
  {image:"https://www.yoox.com/images/items/15/15246919HD_14_f.jpg?impolicy=crop&width=306&height=390",name:"MINIMUM",category:"Coats",price:"$ 253.00"},
  {image:"https://www.yoox.com/images/items/13/13911106JD_14_f.jpg?impolicy=crop&width=306&height=390",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/13/13964054RW_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/45/45721715SC_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/14/14293562JI_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  ]
  const arr3 = [{image:"https://www.yoox.com/images/items/50/50287417AM_14_f.jpg?impolicy=crop&width=306&height=390",name:"SOLACE LONDON",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/15/15245940KN_14_f.jpg?impolicy=crop&width=306&height=390",name:"SAINT LAURENT",category:"Earrings",price:"$ 116.00"},
  {image:"https://www.yoox.com/images/items/17/17365751RC_14_f.jpg?impolicy=crop&width=306&height=390",name:"MSGM",category:"Cross-body bags",price:"$ 1,903.00"},
  {image:"https://www.yoox.com/images/items/12/12887851CO_14_f.jpg?impolicy=crop&width=306&height=390",name:"MINIMUM",category:"Coats",price:"$ 253.00"},
  {image:"https://www.yoox.com/images/items/13/13911106JD_14_f.jpg?impolicy=crop&width=306&height=390",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/13/13964054RW_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/45/45721715SC_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/14/14293562JI_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  ]

    const pre =()=>{

      let box = document.querySelector(".container");

      let wid = box.clientWidth;
      box.scrollLeft= box.scrollLeft - wid;
      console.log(wid)
      }
      
      const post =()=>{
        let box = document.querySelector(".container");

        let wid = box.clientWidth;
      box.scrollLeft= box.scrollLeft + wid
      console.log(wid)
        }

        const pre2 =()=>{

          let box = document.querySelector(".container2");
    
          let wid = box.clientWidth;
          box.scrollLeft= box.scrollLeft - wid;
          console.log(wid)
          }
          
          const post2 =()=>{
            let box = document.querySelector(".container2");
    
            let wid = box.clientWidth;
          box.scrollLeft= box.scrollLeft + wid
          console.log(wid)
            }

            
        const pre3 =()=>{

          let box = document.querySelector(".container3");
    
          let wid = box.clientWidth;
          box.scrollLeft= box.scrollLeft - wid;
          console.log(wid)
          }
          
          const post3 =()=>{
            let box = document.querySelector(".container3");
    
            let wid = box.clientWidth;
          box.scrollLeft= box.scrollLeft + wid
          console.log(wid)
            }
            
  return (
    <div>
    <div style={{width:"90%", margin:"auto"}}>
        <img style={{width:"100%",height:"auto", display:"block",boxSizing:"border-box",zIndex:-1}} src="https://www.yoox.com/images/yoox80/banners/6895_1_Genz_WM_Main.png?634485886869569819#width=1380&height=637" alt="" />
   <Flex
      minH={'100vh'}
      align={'center'}
      marginTop={'-430px'}
      marginLeft={'20px'}
      >
       <Box
          bg={useColorModeValue('white')}
          p={4}
          boxShadow={'lg'}>
             <div>
      <span style={{fontSize:"24px",fontWeight:"bold"}}>HERE COMES THE NIGHT</span>
      <br/>
      <span style={{fontSize:"14px",color:"gray",}} >Rock-inspired leather looks and daring details</span>
      <br/>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
      <span style={{fontSize:"13px",fontWeight:"600",textDecoration:"underline"}}>GET THE LOOK</span>
      <span style={{fontSize:"13px",fontWeight:"600",textDecoration:"underline"}}>DISCOVER MORE</span>
      </div>
    </div>
        </Box>
    </Flex>
    </div>
    {/* hero secion ends here */}
    <div style={{width:"75%",margin:'auto',marginTop:"-150px"}}>
    <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
<div>
  <img width="100%" src="https://www.yoox.com/images/yoox80/banners/6971_2_HL_DM_US.png?634485886869569819#width=430&height=600" alt="" />
  <div style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"15px"}}>
    <span style={{fontSize:"24px",fontWeight:"bold"}} >20% & 30% OFF</span>
    <span style={{fontSize:"14px",fontWeight:"100"}}>Only until 12/18</span>
    <span style={{fontSize:"14px",fontWeight:"500",textDecoration:"underline"}}>SHOP NOW</span>
  </div>
</div>



<div>
  <img src="https://www.yoox.com/images/yoox80/banners/6824_1_TrendSpace_HL_W.jpg?634485886869569819#width=430&height=600" alt="" />
  <div style={{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center",marginTop:"15px"}}>
    <span style={{fontSize:"24px",fontWeight:"bold"}} >THE SPACE AGE</span>
    <span style={{fontSize:"14px",fontWeight:"100"}}>Futuristic fashion: the beginning of a new era!</span>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <span style={{fontSize:"14px",fontWeight:"500",textDecoration:"underline"}}>DISCOVER MORE</span>
      <span style={{fontSize:"14px",fontWeight:"500",textDecoration:"underline"}}>SHOP NOW</span>
    </div>
  </div>
</div>

</div>
<div style={{marginTop:"-770px"}}>
<Flex
      align={'center'}
      justifyContent={'center'}
      >
       <Box
          bg={useColorModeValue('white')}
          p={20}
          pt={10}
          boxShadow={'lg'}
          >
            
             <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontSize:"14px"}}>DESIGNERS</span>  
<br/>
<span style={{fontSize:"16px",fontWeight:"bold",marginBottom:"5px"}} >DOLCE & GABBANA</span>  
<span style={{fontSize:"16px",fontWeight:"bold"}}>ROBERTO CAVALLI</span>  
<span style={{fontSize:"16px",fontWeight:"bold"}}>MARNI</span>
<span style={{fontSize:"16px",fontWeight:"bold"}}>STELLA MCCARTNEY</span>  
<span style={{fontSize:"16px",fontWeight:"bold"}}>MAISON MARGIELA</span> 
<span  style={{fontSize:"16px",fontWeight:"bold"}}>CHLOÉ</span>  
<span  style={{fontSize:"16px",fontWeight:"bold"}}>VERSACE</span>  
<span  style={{fontSize:"16px",fontWeight:"bold"}}>JIL SANDER</span>  
<span  style={{fontSize:"16px",fontWeight:"bold"}}>PRADA</span>  
<br/><br/>
<span style={{fontSize:"14px",textDecoration:"underline"}}>VIEW ALL</span>      
    </div>
        </Box>
    </Flex>
</div>
</div>
{/* Second section ends here */}

<div style={{width:"85%",display:"flex",justifyContent:"space-between",margin:"auto",marginTop:"300px",paddingBottom:"70px"}}>
<div style={{width:"25%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <span style={{fontSize:"32px",fontWeight:"10"}}>NEW ARRIVALS</span>
  <span  style={{fontSize:"14px",fontWeight:"100"}}>VIEW ALL</span>
</div>
<div style={{width:"70%"}}>
<button style={{height:"10%",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={pre} ><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&lt;</p></button>

<button style={{height:"10%",right:"90px",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={post}><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&gt;</p></button>
<div style={{padding:"0 10px",display:"flex",overflowX:"hidden",scrollBehavior:"smooth"}} className="container">
  {arr.map((el)=>(
    <div style={{minWidth:"300px",height:"auto",maxWidth:"300px",margin:"5px", overflow:"hidden",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} key={el.image}>
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


</div>
{/* third section or first carousal ends here */}

<div style={{width:"100%",height:"auto",backgroundColor:"white",paddingTop:"70px",paddingBottom:"150px"}}>
<div style={{width:"90%",display:"flex",justifyContent:"space-around",margin:"auto",height:"auto"}}>
  <div style={{marginTop:"50px",marginBottom:"50px",paddingRight:"30px"}}>
    <img style={{ height:"100%"}} src="https://www.yoox.com/images/yoox80/banners/6825_5_BaumeMercier_Tris_W.png?634485886869569819#width=473&height=660" alt="" />
    <br/>
    <span style={{fontSize:"24px",fontWeight:"bold"}}>BAUME & MERCIER</span>    <br/>

    <span style={{fontSize:"14px",color:"gray"}}>The New Riviera Collection</span>
  </div>
  <div style={{width:"45%"}}>
    <img style={{width:"150%",  height:"100%"}} src="https://www.yoox.com/images/yoox80/banners/6825_1_COS_Tris_W.png?634485886869569819#width=473&height=660" alt="" />
    <br/>
<span style={{fontSize:"24px",fontWeight:"bold"}}>COS</span>    <br/>

    <span style={{fontSize:"14px",color:"gray"}}>Bring style to the coldest season</span>    

  </div>
  <div style={{marginTop:"50px",marginBottom:"50px",paddingLeft:"30px"}}>
    <img style={{ height:"100%"}} src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886869569819#width=473&height=660" alt="" />
    <br/>
    <span style={{fontSize:"24px",fontWeight:"bold",}}>MONTBLANC</span>
    <br/>
    <span  style={{fontSize:"14px",color:"gray"}}>Father's Day: find the perfect present</span>
  </div>




</div>
</div>
{/* Forth section ends here */}

<div style={{width:"85%",display:"flex",justifyContent:"space-between",margin:"auto",marginTop:"100px",paddingBottom:"70px"}}>
<div style={{width:"25%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <span style={{fontSize:"32px",fontWeight:"100"}}>ONE OF A KIND</span>
  <span  style={{fontSize:"14px",fontWeight:"100"}}>VIEW ALL</span>
</div>
<div style={{width:"70%"}}>
<button style={{height:"10%",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={pre2} ><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&lt;</p></button>

<button style={{height:"10%",right:"90px",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={post2}><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&gt;</p></button>
<div style={{padding:"0 10px",display:"flex",overflowX:"hidden",scrollBehavior:"smooth"}} className="container2">
  {arr1.map((el)=>(
    <div style={{minWidth:"300px",height:"auto",maxWidth:"300px",margin:"5px", overflow:"hidden",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} key={el.image}>
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


</div>
{/* 5th section or 2nd carousal ends here */}


<div style={{width:"80%",margin:"auto",justifyContent:"space-between",display:"flex"}}>
  <div >
  <img style={{width:"200%",height:"auto"}} src="https://www.yoox.com/images/yoox80/banners/6833_3_8byYoox_Special_WM.png?634485886869569819#width=930&height=660" alt="" />
  <Flex
      minH={'100vh'}
      align={'center'}
      marginTop={'-430px'}
      marginLeft={'20px'}
      >
       <Box
          bg={useColorModeValue('white')}
          p={4}
          boxShadow={'lg'}>
             <div>
      <span style={{fontSize:"24px",fontWeight:"bold"}}>IT'S PARTY TIME!</span>
      <br/>
      <span style={{fontSize:"14px",color:"gray",}} >8 by YOOX: Select this season's perfect party looks.</span>
      <br/>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
      <span style={{fontSize:"13px",fontWeight:"600",textDecoration:"underline"}}>SHOP NOW</span>
      <span style={{fontSize:"13px",fontWeight:"600",textDecoration:"underline"}}>GET INSPIRED</span>
      </div>
    </div>
        </Box>
    </Flex>
    </div>
 
    <div style={{width:"300px"}}>

 <Flex
      minH={'100vh'}
      align={'center'}
      marginLeft={'-50px'}
      width={'300px'}
      marginTop={'-50px'}
      padding={"0 10px"} display={"flex"} overflowX={"hidden"} scrollBehavior={"smooth"}
      className={"container3"}
      >
       <Box >
<div style={{padding:"0 10px",display:"flex",overflowX:"hidden",scrollBehavior:"smooth"}} className="container3">
  {arr3.map((el)=>(
    <div style={{minWidth:"300px",height:"auto",maxWidth:"300px",margin:"1px", overflow:"hidden",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} key={el.image}>
    <img src={el.image} alt="" />
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
</Box>
    </Flex>
    <button style={{marginTop:"-50px",marginLeft:"20px",height:"0",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={pre3} ><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&lt;</p></button>

<button style={{marginTop:"-50px",height:"0",right:"250px",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={post3}><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&gt;</p></button>
</div>
</div>

{/* 6th section or single product carousal ends here */}


<div style={{width:"70%",margin:"auto",display:"flex",justifyContent:"space-evenly",marginTop:"-200px"}}>
  <div>
    <span style={{fontSize:"18px",fontWeight:"bold"}}>NEW TO YOOX
</span><br /><button style={{border:"1px solid black",padding:"0.2px 15px 0.2px 15px"}}></button> <br /><br /> <span style={{fontSize:"14px",color:"grey"}}>Shopping guide</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>iPhone/iPad/Android</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>
Browse all  Designers</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Browse all Categories</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Gift delivery</span>
  </div>
  <div>
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
      <label for="woman">Woman</label>
    </div>
    <div>
    <input type="radio" id='man' style={{color:'black'}} name='gender' value='Man' /> 
      <label for="man">Man</label>
    </div>
    </div>
<br /><br />
<div style={{display:'flex',justifyContent:"space-evenly"}}>
<input type="checkbox" style={{color:"black",width:'20px',height:"20px"}}  />
<span style={{color:"gray",fontSize:"13px"}}>I consent to receive YOOX newsletters via email. For further information, please consult the Privacy Policy.
</span>
</div>
<br />
<button style={{backgroundColor:"black",color:"white",padding:"13px 96px 13px 96px "}}>SIGN UP</button>
    </div>
        </Box>
    </Flex>
  </div>
  <div>
    <span style={{fontSize:"18px",fontWeight:"bold"}}>MYOOX</span><br /><button style={{border:"1px solid black",padding:"0.2px 15px 0.2px 15px"}}></button><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Login</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>My Orders</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>My Details</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Dream Box</span><br /><br /><span style={{fontSize:"14px",color:"grey"}}>Première</span>
  </div>
  <div>
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



