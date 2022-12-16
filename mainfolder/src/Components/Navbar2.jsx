
import { AiOutlineHeart } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export default function Navbar2(){

  return (
    <div style={{"display":"flex","justifyContent":"space-evenly",marginTop:"10px",marginBottom:"10px",alignItems:"center"}}>
    <div style={{"display":"flex","justifyContent":"space-evenly", "gap":"15px",alignItems:"center"}} >
      <span style={{fontSize:"12px",fontWeight:"bold" }} >WOMEN</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }} >MEN</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }}>KIDS</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }} >/</span>
      <span style={{fontSize:"12px",fontWeight:"bold" }}>DESIGN+ART</span>
      </div>
      <div>
        <img src="logo.png" alt="logo" width="150px"  />
      </div>
      <div style={{"display":"flex","justifyContent":"space-evenly", "gap":"50px",alignItems:"center"}}>
             <GoSearch  size="22px"/>

             <AiOutlineHeart size="24px" />
             <HiOutlineShoppingBag  size="26px"/>
      </div>
      </div>
  )
  
}