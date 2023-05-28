import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import User from './User';


function UserDetail() {
 let [userDetail, setuserDetail] = useState();
 let { id } = useParams();
 const API = `http://localhost:3002/api/user/${id}`;
 
 useEffect(()=>{
    asnwer(API)
 },[]);
 
 const asnwer = async(API)=>{
    let res= await fetch(API);
    let data= await res.json();
    setuserDetail(data.data);
 }
 
 return (
    <>
        < User {...userDetail} />
    </>
  )
}

export default UserDetail
