import React,{useState} from 'react'
import './Reg.css'

const Register =()=> {
    const [data,setData] = useState({
        user:'',
        username:'',
        email:'',
        mobileNumber:'',
        password:'',
        confirmPassword:''

    }) 
    const {user, username, email, mobileNumber, password, confirmPassword} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const submitHandler = e=>{
        e.preventDefault();
        if(password === confirmPassword){
            console.log(data)
        }
        else{
            console.log("passwords are not matching")
        }
    }
  return (
    <div >
        <center>
            <div className = "container">
                <h1 className="heading">Register</h1>
              <form onSubmit={submitHandler}>
                <input type = "text"     placeholder='Enter Admin/user' onChange = {changeHandler}  name="user"            value={user}/> <br/>
                
                <input type = "email"    placeholder='Enter Email'         onChange = {changeHandler}  name="email"           value={email}/><br/>
                <input type = "text"     placeholder='Enter Username'      onChange = {changeHandler}  name="username"        value={username}/><br/>
                <input type = "number"   placeholder='Enter Mobile number' onChange = {changeHandler}  name="mobileNumber"    value={mobileNumber}/><br/>
                <input type = "password" placeholder='Password'            onChange = {changeHandler} name="password"        value={password}/><br/>
                <input type = "password" placeholder='Confirm Password'    onChange = {changeHandler} name="confirmPassword" value={confirmPassword}/><br/>
                <input type = "submit" name='submit'/>
            </form>
            </div> 
        </center>
    </div>
  )
  }

export default Register