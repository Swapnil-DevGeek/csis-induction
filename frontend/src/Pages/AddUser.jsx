import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
      fetchUsers();
  }, [])

  const fetchUsers = () => {
      axios
      .get('https://csis-induction.vercel.app/register')
      .then((res) => {
          console.log(res.data)
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      axios
      .post('http://localhost:3001/register', { email, username, password })
      .then(() => {
          alert('Registration Successful')
          setEmail('')
          setUsername('')
          setPassword('')
          fetchUsers();
          navigate('/login')
      })
      .catch((error) => {
          console.log('Unable to register user')
      })

  }

  return (
    <div className='w-full h-screen flex'>
      <div className='w-[100%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center' >
        <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
        onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
             type="email" 
             placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
             <br />
             <br />
             <label>Username</label>
             <br />
             <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
             type="text" 
             placeholder='Username'
             value={username}
             onChange={(e) => setUsername(e.target.value)}/>
             <br />
             <br />
             <label>Password</label>
             <br />
             <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
             type="password"
             placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
             <br />
             <br />

             <button className='w-[200px] h-[50px] border hover:bg-teal-900'
                type='submit'>Add User</button>

        </form>
      </div>
     
    </div>
  )
}

export default AddUser
