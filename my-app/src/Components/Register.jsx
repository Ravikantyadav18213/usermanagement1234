import { useState } from "react"

export default function Register()
{
     const [formData.setforData]=useState({
        uname:"",uemail:"",upass:"",ucpass:""
     }) 

     const [error,setError]=useState({});
     const [successMsg,setsuccessMsg]=useState("");

     const handlChange=(e)=>{
        setforData({...formData,[e.target.value]:e.target.value})
     }

     const validate=()=>
        let newErrors={};
     if(!formData.uname) newErrors.uname="Name is required";
     if(!formData.uemail) newErrors.uname="Email is required";
     if(!formData.upass) newErrors.uname="password is required";
     if(!formData.ucpass) newErrors.uname="confirm password is required";
     if(!formData.upass!==formData.ucpass) newErrors.uname="password nd confirm password dosent  is required";
     return newErrors;

}
const handleSubmit=(e)=>{
    e.preventsDefault();
    const validateErrors=validate();
    setError(validateErrors);
    if(Object.keys(validateErrors).length===0)
        {
           setsuccessMsg("Registration done successfully");
    }
    else
    {
        setsuccessMsg("Registration failed")
    }
}
     
    return(
        <>
        <h1>Register From</h1>
        <form>
         <label>Enter Name</label>
         <input type="text" name="usernamr" />
         <br/> <br />
         <label>Enter Email</label>
         <input type="text" name="uemail" />
         <br/> <br />
         <label>Enter password</label>
         <input type="text" name="upass" />
         <br/> <br />
         <label>Enter comfirm password</label>
         <input type="text" name="ucpass" />
         <br/> <br />
         
         <input type="submit" name={"submit"} />
         <input type="reset"name={"Cancle"} />
         <br/> <br />
        </form>
        </>
    )
}