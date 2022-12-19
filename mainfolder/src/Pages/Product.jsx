import React from 'react'
import { BsPaypal } from 'react-icons/bs';
import {BsTags} from 'react-icons/bs';
import {RiTShirt2Line} from 'react-icons/ri';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import  {CountContext} from "../Components/Context"
import { Divider } from '@chakra-ui/react'
import { useContext } from 'react';

export default function Product() {
const {count,setCount} = useContext(CountContext)


  return (
    <div style={{backgroundColor:"white",overflowX: "hidden", marginBottom:"50px"}}>
    <div style={{width:"70%",justifyContent:"space-between",margin:"auto",display:"flex",paddingTop:"70px",overflowX: "hidden"}}>
        <div>
            <img src="https://www.yoox.com/images/items/14/14295830IB_14_f.jpg?impolicy=crop&width=387&height=490" alt="" />
        </div>
        <div style={{marginTop:"25px",textAlign:"left"}}>
            <span  style={{fontWeight:"bold"}}>STELLA McCARTNEY
</span><br />
<span>Sweaters</span><br /><br />
<span style={{fontWeight:"bold"}}>$ 594.00</span><br /><br />
<span>Pink</span>
<br /><br />
<div style={{width:"50px",height:"50px", border:"3px solid black",borderRadius:"50%",padding:"2px"}}>
<div style={{width:"40px", height:"40px",border:"1px solid black",borderRadius:"50%",backgroundColor:"pink"}}>

</div>
</div>
<br />

<div style={{width:"50px",height:"50px", border:"2px solid black",padding:"2px"}}>
    <span style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}>2-4</span>
    <span style={{display:"flex",justifyContent:"center"}}>US</span>
</div>
<br />
<div style={{border:"1px solid grey",color:"grey",display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}}>
    <div style={{display:"flex",gap:"6px"}}>
    <BsTags  size="20px"/>
    <span style={{fontSize:"14px"}}>The size indicated on the label is  38 (IT).</span>
    </div> <div style={{display:"flex",gap:"6px"}}>
    <RiTShirt2Line  size="20px"/>
    <span style={{fontSize:"14px"}}>Large fit - We recommend choosing a smaller size</span> </div> 
    <div style={{display:"flex",gap:"6px"}}>
    <AiOutlineQuestionCircle  size="20px"/>
    <span style={{fontSize:"14px"}}>Need more help? View the Size Guide</span> </div> 
</div> <br /> 
<button style={{backgroundColor:"black",color:"white",padding:"15px 100px 15px 100px"}} onClick={()=>setCount(count+1)}>ADD TO SHOPPING BAG</button>
<br />
<br />
<div style={{display:"flex",gap:"6px"}}>
<BsPaypal size="20px" />
<span style={{fontSize:"14px"}}>$29.16/mo for 24 months.
As low as 0% APR for up to 12 months</span>
</div>
<br /><br />
</div>

    </div>
    <div style={{width:"70%",margin:"auto"}}>
    <Divider />
<Divider />
<br /><br />
<div style={{display:"flex",justifyContent:"space-between",gap:"100px",textAlign:"left"}}>
    <div  style={{display:"flex",flexDirection:'column'}}>
        <span style={{fontWeight:"bold"}}>MADE IN ITALY</span>
        <span>Item made in Italy, synonymous with quality and design creativity.
</span><br />
<span style={{fontWeight:"bold"}}>COMPOSITION</span>
<span>100% Polyamide
</span><br />
<span style={{fontWeight:"bold"}}>MEASUREMENTS
</span>
<span >Length 25.35 inches
</span><br />
    </div>
    <div style={{display:"flex",flexDirection:'column'}}>
    <span style={{fontWeight:"bold"}}>DETAILS
</span>
<span >knitted, medium-weight knit, no appliqués, two-tone, round collar, long sleeves, no pockets, large sized
</span><br />
<span >Product code: 14295830IB</span>
    </div>
</div>
    </div>

    </div>
  )
}
