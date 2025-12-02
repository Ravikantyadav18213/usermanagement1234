import { useState } from "react"

export default function Register()
 {
    const [formData, setformData] = useState({
        uname: "", uemail: "", upass: "", ucpass: ""
    })

    const [errors, setError] = useState({});
    const [successMsg, setsuccessMsg] = useState("");

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    const validate = () =>{
        let newErrors = {};
    if (!formData.uname) newErrors.uname = "Name is required";
    if (!formData.uemail) newErrors.uemail = "Email is required";
    if (!formData.upass) newErrors.upass = "password is required";
    if (!formData.ucpass) newErrors.ucpass = "confirm password is required";
    if (formData.upass !== formData.ucpass) newErrors.ucpass = "password nd confirm password does not match";
    return newErrors;

}
const handleSubmit = (e) => {
    e.preventsDefault();
    const validateErrors = validate();
    setError(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
        setsuccessMsg("Registration done successfully");
    }
    else {
        setsuccessMsg("Registration failed")
    }
}

return (
    <>
        <h1>Register From</h1>
        <form onSubmit={handleSubmit}>

            {successMsg && <h2><mark>{successMsg}</mark></h2>}

            <label>Enter Name</label>
            <input type="text" name="uname" onChange={handleChange} />
            {errors.uname && <p><mark>{errors.uname}</mark></p>}
            <br /> <br />
            <label>Enter Email</label>
            <input type="text" name="uemail" onChange={handleChange} />
            {errors.uemail && <p><mark>{errors.uemail}</mark></p>}
            <br /> <br />
            <label>Enter password</label>
            <input type="text" name="upass" onChange={handleChange} />
            {errors.upass && <p><mark>{errors.upass}</mark></p>}
            <br /> <br />
            <label>Enter comfirm password</label>
            <input type="text" name="ucpass" onChange={handleChange} />
            {errors.ucpass && <p><mark>{errors.ucpass}</mark></p>}
            <br /> <br />

            <input type="submit" name={"Submit"} />
            <input type="reset" name={"Cancel"} />
            <br /> <br />
        </form>
    </>
)
 }