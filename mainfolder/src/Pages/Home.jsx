import React from 'react'
import {
  Flex,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Home() {

  const arr = [{image:"https://www.yoox.com/images/items/14/14295830IB_14_f.jpg?impolicy=crop&width=306&height=390",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/50/50294257EM_14_f.jpg?impolicy=crop&width=306&height=390",name:"APM Monaco WONDERLAND",category:"Earrings",price:"$ 116.00"},
  {image:"https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390",name:"MARNI",category:"Cross-body bags",price:"$ 1,903.00"},
  {image:"https://www.yoox.com/images/items/16/16199356WX_14_f.jpg?impolicy=crop&width=306&height=390",name:"MINIMUM",category:"Coats",price:"$ 253.00"},
  {image:"https://www.yoox.com/images/items/17/17451966FK_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  {image:"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/13/13964054RW_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/45/45721715SC_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},{image:"https://www.yoox.com/images/items/14/14293562JI_14_f.jpg?impolicy=crop&width=387&height=490",name:"STELLA McCARTNEY",category:"Sweaters",price:"$ 594.00"},
  ]


  let box = document.querySelector(".container");
  const pre =()=>{
  let wid = box.clientWidth;
  box.scrollLeft= box.scrollLeft - wid
  }
  
  const post =()=>{
    let wid = box.clientWidth;
  box.scrollLeft= box.scrollLeft + wid
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

<div style={{width:"90%",display:"flex",justifyContent:"space-between",margin:"auto",marginTop:"300px"}}>
<div style={{width:"25%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <span style={{fontSize:"32px",fontWeight:"100"}}>NEW ARRIVALS</span>
  <span  style={{fontSize:"14px",fontWeight:"100"}}>VIEW ALL</span>
</div>
<div style={{width:"70%"}}>
<button style={{height:"22%",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={pre} ><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&lt;</p></button>

<button style={{height:"22%",right:"50px",width:"30px",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}} onClick={post}><p style={{fontSize:"30px",backgroundColor:"black",color:"white",borderRadius:"50%",padding:"0 15px",width:"50px",height:"50px",cursor:"pointer"}}>&gt;</p></button>
<div style={{padding:"0 10px",display:"flex",overflowX:"hidden",scrollBehavior:"smooth"}} className="container">
  {arr.map((el)=>(
    <div style={{minWidth:"300px",height:"auto",maxWidth:"300px",margin:"5px", overflow:"hidden",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} key={el.image}>
    <img src={el.image} alt="" />
    <h2>{el.name}</h2>
    <h4>{el.category}</h4>
    <h4>{el.price}</h4>
  </div>
 ) )} 
</div>
</div>
</div>

    </div>

  )
}



