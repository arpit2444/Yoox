
import { useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { CountContext } from './Context';
import {Link} from "react-router-dom"
export default function Navbar2(){
const {count} = useContext(CountContext)
  return (
    <div style={{"display":"flex","justifyContent":"space-evenly",marginTop:"10px",marginBottom:"10px",alignItems:"center"}}>
    <div style={{"display":"flex","justifyContent":"space-evenly", "gap":"15px",alignItems:"center"}} >
      <span style={{fontSize:"12px",fontWeight:"bold" }} >WOMEN</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }} >MEN</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }}>KIDS</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }} >/</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }}>DESIGN+ART</span>
      </div>
      <Link to="/" >
      <div>
        <img src="logo1.png" alt="logo" width="120px"  />
      </div></Link>
      <div style={{"display":"flex","justifyContent":"space-evenly", "gap":"50px",alignItems:"center"}}>
             <GoSearch  size="22px"/>

             <AiOutlineHeart size="24px" />

             <Link to="/cart" >
             <div>
             {count===0?
             <HiOutlineShoppingBag  size="26px"/>: <div style={{display:"flex"}}>
              <HiOutlineShoppingBag  size="26px"/>
             <span style={{marginTop:"-10px",fontWeight:"bold",fontSize:"17px",color:"#CA336E"}} >{count}</span></div> }
</div></Link>
      </div>
      </div>
  )
  
}