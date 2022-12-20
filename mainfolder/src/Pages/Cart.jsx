import React from 'react'
import { Divider } from '@chakra-ui/react'
import { CountContext } from '../Components/Context';
import Checkout from "./Checkout";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import {Link } from "react-router-dom";
export default function Cart() {
    const {count,setCount} = React.useContext(CountContext);
   const [ship,setShip] = React.useState(0);

   const { isOpen, onOpen, onClose } = useDisclosure();


const handle=()=>{
  setTimeout(()=>{ setCount(0)},3000)
 
}

    const handleChange=(e)=>{
      e.target.value=="Man"?setShip(14.95):setShip(0)
    }
  return (
    <>
    { count>0?
    <div style={{width:"70%",margin:"auto",marginTop:"40px"}} >
        <span style={{fontSize:"24px",fontWeight:"bold"}}>SHOPPING BAG</span>

        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
            <span style={
                {textDecoration:"underline",marginTop:"10px" }
            }> BACK TO SHOPPING</span>
            <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>{onOpen(); handle()}} style={{backgroundColor:"#FFC439",padding:"13px 20px 13px 20px"}}> <div style={{display:"flex",gap:"10px"}}> <img src="https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png" width="70px" alt="" /> <span>CHECK OUT</span></div> </button>
                <span style={{marginTop:"10px"}}>or</span>
                <button onClick={()=>{onOpen(); handle()}} style={{backgroundColor:"black",padding:"13px 20px 13px 20px",color:"white"}}>PROCEED WITH YOUR ORDER &gt;</button>
            </div>
        </div>
        <br /><br />
        <Divider />
        <Divider />
        <Divider />
        <br />
        <div style={{textAlign:"left"}}>
            <span style={{fontWeight:"bold",fontSize:"21px"}}>1 | ITEMS ADDED TO YOUR SHOPPING BAG ({count})</span>
            <br /><br />
            <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                <span style={{fontWeight:"bold",fontSize:"18px"}}>Image</span>
                <span></span>
                <span  style={{fontWeight:"bold",fontSize:"18px"}}>Title</span>
                <span style={{fontWeight:"bold",fontSize:"18px",paddingLeft:"70px"}}>Category</span>
                <span style={{fontWeight:"bold",fontSize:"18px",paddingLeft:"0px"}}>Color</span>
               <span style={{fontWeight:"bold",fontSize:"18px"}}>Quantity</span>
                <span  style={{fontWeight:"bold",fontSize:"18px"}}>Price</span>
            </div>
        </div>
        <br /><br />
        <div>
            {/* <span style={{fontWeight:"bold",fontSize:"19px"}}>1 | ITEMS ADDED TO YOUR SHOPPING BAG ({count})</span> */}
            <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                <img src="https://www.yoox.com/images/items/14/14295830ib_14_f.jpg?width=63&height=80&impolicy=crop&gravity=Center" alt="" />
                <span  style={{fontWeight:"bold"}}>
STELLA McCARTNEY</span>
                <span>Sweaters</span>
                <span>Pink</span>
                <div style={{display:"flex",gap:"5px"}}>
                    <button  style={{fontWeight:"bold",border:"1px solid black",padding:"1px 5px 1px 5px"}} onClick={()=>setCount(count-1)}>-</button>
                    <span  style={{fontWeight:"bold"}}>{count}</span>
                    <button  style={{fontWeight:"bold",border:"1px solid black",padding:"1px 5px 1px 5px"}} onClick={()=>setCount(count+1)}>+</button>
                </div>
                <span  style={{fontWeight:"bold"}}>$594</span>

                {/* <span  style={{fontWeight:"bold"}}>{(594*count)}</span> */}
            </div>
        </div>
        <br />
        <Divider />
        <Divider />
        <Divider />
        <br />
        <div style={{textAlign:"left"}}>
        <span style={{fontWeight:"bold",fontSize:"21px"}}>2 | SELECT SHIPPING METHOD</span>

   <br /><br />
    <input type="radio" id='free' style={{color:'black'}}  name='shipping' value='Woman' checked onClick={handleChange} />
      <label style={{fontWeight:"bold"}}>STANDARD - FREE</label>
    <br />
    <span>8-10 business days</span>
    <br /><br />
    <input type="radio" id='money' style={{color:'black'}} name='shipping' value='Man' onClick={handleChange} /> 
      <label style={{fontWeight:"bold"}}>EXPRESS - $ 14.95</label>
    <br />
<span>4-6 business days</span>
        </div>
        <br /> 
        <Divider />
        <Divider />
        <Divider />
        <br />
<div>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <span style={{fontWeight:"bold"}}>TOTAL FOR ITEMS</span>
        <span style={{fontWeight:"bold"}}>${(594*count)}</span>
       </div>
       <br /><br />
       <div style={{display:"flex",justifyContent:"space-between"}}>
    <span style={{fontWeight:"bold"}}>SHIPPING</span>
        <span style={{fontWeight:"bold"}}>${ship}</span>
       </div>
       <br />
       <Divider/>
       <Divider/>

       <br />
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <span style={{fontWeight:"bold",fontSize:"25px"}}>ORDER TOTAL</span>
        <span style={{fontWeight:"bold",fontSize:"25px"}}>${(594*count)+ship}</span>
       </div>
       <br /><br />
</div>
<Divider />
        <Divider />
        <Divider />
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
            <span style={
                {textDecoration:"underline" }
            }> BACK TO SHOPPING</span>
            <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>{onOpen(); handle()}} style={{backgroundColor:"#FFC439",padding:"13px 20px 13px 20px"}}> <div style={{display:"flex",gap:"10px"}}> <img src="https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png" width="70px" alt="" /> <span>CHECK OUT</span></div> </button>
                <span style={{marginTop:"10px"}}>or</span>
                <button onClick={()=>{onOpen(); handle()}} style={{backgroundColor:"black",padding:"13px 20px 13px 20px",color:"white"}}>PROCEED WITH YOUR ORDER &gt;</button>
            </div>
        </div>
        <br /><br />
        <div><Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody style={{fontWeight:"bold",fontSize:"28px"}}>
            Hurray! Your Order is on the Way.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal></div>
    </div>:<div></div>
    }
    </>
  )
}
