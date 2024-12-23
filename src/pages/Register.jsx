import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [loading, setLoading] = useState(false)

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password, confirmPassword} = data

    if (!name || !email || !password || !confirmPassword) {
      return toast.error('Please fill in all fields');
    }

    try {
      setLoading(true)
      const {data} = await axios.post('/register', {
        name, email, password, confirmPassword
      })
      if(data.error){
        toast.error(data.error)
      } else{
        setData({})
        toast.success('Registered Successfully')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter a username' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} disabled={loading}/>
        <label>Email</label>
        <input type='text' placeholder='Enter your email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} disabled={loading}/>
        <label>Password</label>
        <input type='password' placeholder='**********' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} disabled={loading}/>
        <label>Confirm Password</label>
        <input type='text' placeholder='**********' value={data.confirmPassword} onChange={(e) => setData({...data, confirmPassword: e.target.value})} disabled={loading}/>
        <button type="submit" disabled={loading}>
           {loading ? 'Signing Up...' : 'Sign Up'}
         </button>
      </form>
    </div>
  )
}


