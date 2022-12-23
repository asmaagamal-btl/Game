import React,{useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import Regist from '../Register/Register.module.css'
import img from '../img/gaming.ebaf2ffc84f4451d.jpg'
import log from '../img/logo.png'
import axios from 'axios'
import Joi from 'joi'

export default function Login({seveUserData}) {
  let navigate =useNavigate ();
  const [isLoading, setisLoading] = useState(false);
  const [errorList, seterrorList] = useState([]);
  const [error, setError] = useState('');
  const [user, setuser] = useState({
      email:'',
      password:''
  });
  function getUserData(e)
  {
      let myUser={...user};
      myUser[e.target.name]= e.target.value
      setuser(myUser)
      console.log(myUser)
  };
  async function sendDataToApi()
  {
      let {data} =await axios.post(`https://route-movies-api.vercel.app/signin`, user);
      if(data.message == 'success')
      {
          setisLoading(false);
          localStorage.setItem('userToken',data.token);
          seveUserData();
          navigate('/home') ;
      }
      else
      {
          setisLoading(false);
          setError(data.message);
      }
  };
  function submit()
  {
      setisLoading(true);
      let validate =validateRegister();
      if(validate.error)
      {
          setisLoading(false);
          seterrorList(validate.error.details);
      }
      else
      {
          sendDataToApi();
      }
  };
  function validateRegister()
  {
      let scheme= Joi.object({
          email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','not','org']}}).required(),
          password:Joi.string().pattern(/^[a-z]|[1-9]/),
      });
      return scheme.validate(user,{abortEarly:false});
  }
  return (
    <>
      <section className='bg-dark vh-100 d-flex align-items-center'>
        <div className="container">
                <div className="row shadow-lg bg-dark">
                    <div>
                        <div>
                            <div className="row"> 
                                <div className="col-md-6">
                                    <img src={img} className={`${Regist.size}`}/>
                                </div>
                                <div className="col-md-6 text-center pe-4">
                                    <div>
                                      <img src={log} className={`${Regist.sis}`}/>
                                        <h4 className='text-white-50 text-center mb-4'>Log in to GameOver</h4>
                                        <input onChange={getUserData} type="email" className="form-control mb-3" placeholder="Email Address" name='email'/>
                                        <p className='text-danger'>
                                                {errorList.filter((err)=> err.context.label =='email')[0]?.message}
                                            </p>
                                        <input onChange={getUserData} type="password" className="form-control mb-4" placeholder="password" name='password'/>
                                        {errorList.map((err,inder)=>{
                                        if(err.context.label==='password')
                                        {
                                            return <p className='text-danger'>password invalid </p>
                                        }
                                        })}
                                        <p className='text-danger'></p>
                                        <button onClick={submit} type="submit" className="btn btn-outline-primary">
                                        {isLoading ==true?<i className='fas fa-spinner fa-spin'></i>:"Login"}</button>
                                        <hr className='text-white-50 mb-3'/>
                                        <a className='text-decoration-none'>Forgot Password?</a>
                                        <p className='text-white-50 mt-2'>Not a member yet?
                                        <Link className='text-decoration-none' to='/'> Create Account{'>'}</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </section>
    </>
  )
}
