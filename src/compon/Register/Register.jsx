import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Regist from './Register.module.css'
import img from '../img/gaming.ebaf2ffc84f4451d.jpg'
import axios from 'axios'
import Joi from 'joi'


export default function Register() {
    let navigate =useNavigate ();
    const [isLoading, setisLoading] = useState(false);
    const [errorList, seterrorList] = useState([]);
    const [error, setError] = useState('');
    const [user, setuser] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        age:0
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
        let {data} =await axios.post(`https://route-movies-api.vercel.app/signup`, user);
        if(data.message == 'success')
        {
            setisLoading(false)
            navigate('/login') 
        }
        else
        {
            setisLoading(false)
            setError(data.message)
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
            first_name:Joi.string().min(3).max(10).required(),
            last_name:Joi.string().min(3).max(10).required(),
            email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','not','org']}}).required(),
            password:Joi.string().pattern(/^[a-z]|[1-9]/),
            age:Joi.number().min(16).max(80).required(),
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
                                    {/* {errorList.map((err,inder)=>{
                                        if(err.context.label==='password')
                                        {
                                            return <div key={inder} className='alert alert-danger my-2'>password invalid</div>
                                        }
                                        else
                                        {
                                            return <div className='alert alert-danger my-2'>{err.message}</div>
                                        }
                                    })}; */}
                                    {error.length>0 ?<div className='alert alert-danger my-2'>{error}</div>:''}
                                    <div>
                                        <h4 className='text-white-50 text-center'>Create My Account!</h4>
                                        <div className='text-center mt-4 d-flex mb-3'>
                                            <input onChange={getUserData} type="text" className={`${Regist.we} form-control me-4`} placeholder="First Name" name='first_name'/>
                                            <input onChange={getUserData} type="text" className={`${Regist.we} form-control`} placeholder="Last Name" name='last_name'/>
                                        </div>
                                        <p className='text-danger'>
                                                {errorList.filter((err)=> err.context.label =='first_name')[0]?.message}
                                            </p>
                                        <p className='text-danger'>
                                                {errorList.filter((err)=> err.context.label =='last_name')[0]?.message}
                                            </p>
                                        <input onChange={getUserData} type="email" className="form-control mb-3" placeholder="Email Address" name='email'/>
                                        <p className='text-danger'>
                                                {errorList.filter((err)=> err.context.label =='email')[0]?.message}
                                            </p>
                                        <input onChange={getUserData}  type="number" className="form-control mb-3" placeholder="Age" name='age'/>
                                        <p className='text-danger'>
                                                {errorList.filter((err)=> err.context.label =='age')[0]?.message}
                                            </p>
                                        <input onChange={getUserData}  type="password" className="form-control mb-4" placeholder="password" name='password'/>
                                        {errorList.map((err,inder)=>{
                                        if(err.context.label==='password')
                                        {
                                            return <p className='text-danger'>password invalid </p>
                                        }
                                        })};
                                        <button onClick={submit} type="submit" className="btn btn-outline-primary">
                                            {isLoading ==true?<i className='fas fa-spinner fa-spin'></i>:"Create Account"}
                                        </button>
                                        <p className='text-white-50 mt-2'>This site is protected by reCAPTCHA and the Google 
                                            <a className='text-white-50 mx-1' href='https://policies.google.com/privacy'>Privacy Policy</a>and
                                            <a className='text-white-50 mx-1' href='https://policies.google.com/terms'>Terms of Service</a>apply.
                                        </p>
                                        <hr className='text-white-50 mb-3'/>
                                        <p className='text-white-50 mt-2'>Already a member?
                                        <Link className='text-decoration-none'to='/login' >Log In{'>'}</Link>
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
