import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
// UserContext er vitorer value fetch korbo kivabe ? useContext help kore 

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // setUser method aslo useContext , data pathanu .. data nibo kivbo ?goto profile, user theke nibo
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
      {/* value {username} diye  govern  */}

        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login