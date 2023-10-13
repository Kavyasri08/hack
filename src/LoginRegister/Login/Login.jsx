import React,{useEffect,useState} from 'react'
import './Login.css'
import '../App.scss'
import Axios from 'axios'

import {Link, NavLink} from 'react-router-dom'
import video from './LoginAssets/video.mp4'
import logo from './LoginAssets/logo.png'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {

    const [loginUserName, setLoginUserName]=useState('')
    const[loginPassword,setLoginPassword]=useState('')

    const[loginStatus, setLoginStatus]= useState()
    const[statusHolder,setStatusHolder]=useState('message')

    const loginUser=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:4001/login',{
            
      
        LoginUserName:loginUserName,
        LoginPassword: loginPassword
    }).then((response)=>{
       if(response){
        console.log()

        // if(response.data.message){
        //     navigateTo('/')
        //     setLoginStatus('Credentials Dont Exist!')
        // }
        // else{
        //     navigateTo('/dashboard');
        // }
       }
    })
    }

    useEffect(()=>{
if(loginStatus!=="   ")
{
    setStatusHolder('showMessage')
    setTimeout(()=>{
setStatusHolder('message')
    }, 4000);
}
    },[])

  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className='title'>Unlock Your Minds</h2>
                    <p>Adopt the peace of Mind</p>
                </div>
                <div className="footerDiv flex">
                    <span className="text"> Don't have an account?</span>
                    <Link to={'/register'}>
                        <button className='btn'>Sign Up</button>
                    </Link>
                </div>
            </div>
            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Welcome Back!</h3>
                </div>
                <form action="" className='form grid'>
                    <span className={statusHolder}>{loginStatus}</span>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                         <FaUserShield className='icon'/>
                         <input type="text" id='username' placeholder='Enter Username'
                         onChange={(event)=>{
                            setLoginUserName(event.target.value)
                         }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                         <BsFillShieldLockFill className='icon'/>
                         <input type="password" id='password' placeholder='Enter Password'
                         onChange={(event)=>{
                            setLoginPassword(event.target.value)
                         }}/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={loginUser}>
                        <span>Login</span>
                        { <AiOutlineSwapRight className='icon'/> }
                    </button>

                    <span className='forgotPassword'>
                        Forgot your password?<a href="">Click Here</a>
                    </span>
                </form>
            </div>
        </div>
         
        </div>
  )
}

export default Login