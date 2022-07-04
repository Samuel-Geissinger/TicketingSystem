import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface IuserObj {
  email: string,
  password: string
}

const userObj: IuserObj = {
  email: '',
  password: ''
}

type somehting = {
  setLogin: (value: boolean) => void;
  setUserId: (value: number) => void;
}

export const Login = (props: somehting) => {
  const [user, setUser] = useState<IuserObj>(userObj);
  const { setLogin, setUserId } = props;

  const navigate = useNavigate();
  const nav = useCallback(() => navigate('/', { replace: true }), [navigate]);


  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  }

  const navigateAndSetLogin = (userCreds: any) => {
    setLogin(true);
    nav();
    setUserId(userCreds);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(user.email && user.password) {
      fetch('http://192.168.1.239:5143/api/User/Login', { method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(user) })
      .then(data => data.json())
      .then(body => body.success ? navigateAndSetLogin(body) : alert('Input the right creds'))
    }
  }



  return (
    <form className='grid grid-rows-3 text-center place-content-center' onSubmit={handleSubmit}>
      <h2 className='row-start-1'><b>Login</b></h2>
      <div className='row-start-2'>
        <div className='grid grid-rows-2 text-left'>
          <label className='row-start-1'>Email: </label>
          <input className='row-start-2' type='email' placeholder='Enter Email' onChange={handleInputChange} value={user.email} name='email'/>
        </div>
        <div className='grid grid-rows-2 text-left'>
          <label className='row-start-1'>Password: </label>
          <input className='row-start-2' type='password' placeholder='Enter Password' onChange={handleInputChange} value={user.password} name='password'/>
        </div>
      </div>
      <button className='w-48 h-8 row-start-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Login</button>
    </form>
  )
}
