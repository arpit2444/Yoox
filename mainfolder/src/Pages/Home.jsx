import React from 'react'
import {
  Flex,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
export default function Home() {
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
          p={4}>
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
    <div style={{display:"flex",width:"75%",margin:'auto',justifyContent:"space-between"}}>
<div>
  <img width="100%" src="https://www.yoox.com/images/yoox80/banners/6971_2_HL_DM_US.png?634485886869569819#width=430&height=600" alt="" />
  <div></div>
</div>



<div>
  <img src="https://www.yoox.com/images/yoox80/banners/6824_1_TrendSpace_HL_W.jpg?634485886869569819#width=430&height=600" alt="" />
  <div></div>
</div>

</div>
<div>
<Flex
      minH={'100vh'}
      align={'center'}
      marginTop={'-230px'}
      w={'40%'}
      justify={'center'}
      
      >
       <Box
          bg={useColorModeValue('white')}
          p={4}>
             <div>
<span>DESIGNERS</span>  
<br/>
<span>DOLCE & GABBANA</span>  
<br/>
<span>ROBERTO CAVALLI</span>  
<br/>
<span>MARNI</span>
<br/>
<span>STELLA MCCARTNEY</span>  <br/>
<span>MAISON MARGIELA</span>  <br/>
<span>CHLOÉ</span>  <br/>
<span>BALENCIAGA</span>  <br/>
<span>VERSACE</span>  <br/>
<span>JIL SANDER</span>  <br/>
<span>PRADA</span>  <br/>
<span>VIEW ALL</span>      
    </div>
        </Box>
    </Flex>
</div>

    </div>

  )
}



