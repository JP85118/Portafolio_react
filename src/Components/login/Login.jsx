import axios from 'axios'
import { useState } from 'react'

const Login = () => {

  const url = "https://ms-discord-upy5mhs63a-rj.a.run.app";

  const [values, setValues] = useState({
    //email: "jhoswe.castro@gmail.com",
    //discordId: "948254878596202517"
    email: "sam.alejo98@gmail.com",
    discordId: "913533882815643739"
  })

  const [token, setToken] = useState(null);

  const [logged, setLogged] = useState(false);

  const handleChange = (e) => {
    console.log(e);

    setValues((nueValor) => ({
      ...nueValor,
      [e.target.name]: e.target.value 
    }));
  };

  const loginApp = () => {
    axios.post(`${url}/auth/login`, values).then((res) => {
        console.log(res);
        console.log(res.data.token);
        return res.data.token
      })
        .then((token) => {
          setToken(token)
        })

  };

  const submit = (e) => {
    e.preventDefault();
    loginApp();
  };


  return (
    <>
    <h1>Login</h1>
      <form className='form' onSubmit={submit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" 
          name='email'
          id='email'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
          required
          />
        </div>

        <div>
          <label htmlFor="discordId">DiscordId: </label>
          <input type="text" 
          name='discordId'
          id='discordId'
          placeholder='discordId'
          value={values.discordId}
          onChange={handleChange}
          required
          />
        </div>

        <button type='submit'>Login</button>
      </form>
  
    </>
  )
}

export default Login