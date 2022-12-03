import { useState } from 'react';
import {Formik, Form} from 'formik'
import './contact.css'

const Contact = () => {

  const [sendForm, setSendForm] = useState(false);

  return (
    <>
    <Formik
    initialValues={{
      name: "",
      email: "",
      phone: "",
      message: ""
    }}
    onSubmit={(valores, {resetForm})=>{
      resetForm();
      console.log("Formulario enviado");
      setSendForm(true);
      setInterval(()=>{
        setSendForm(false)
      }, 2500)
    }}
    validate={(valores)=>{
      let errores = {};

      if(!valores.name){
        errores.name = "Please enter your name"
      }
      if (!valores.email) {
        errores.email = "Please enter your email"
      } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(valores.email)){
        errores.email = "Solo puede tener letras, numeros, puntos y guiones bajos "
      }
      if (!valores.phone) {
        errores.phone = "Please enter your phone "
      }
      return errores;
    }}
    >
      {({handleSubmit, values, handleChange,handleBlur,errors, touched})=>(
        <Form onSubmit={handleSubmit}>
          <div className='form'>
            <div className='box-name'>
              <label htmlFor="name">Name: </label>
              <input 
              type="text" 
              name='name'
              placeholder='Write your name please'
              id='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {touched.name && errors.name && <p className='error'>{errors.name}</p>}
            </div>
            <div className='box-email'>
              <label htmlFor="email">Email: </label>
              <input 
              type="email" 
              name='email'
              placeholder='Write your email please'
              id='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {touched.email && errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='box-phone'>
              <label htmlFor="phone">Phone: </label>
              <input 
              type="tel" 
              name='phone'
              placeholder='Write your phone please'
              id='phone'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {touched.phone && errors.phone && <p className='error'>{errors.phone}</p>}
            </div>
            <div className='box-message'>
              <label htmlFor="message">Message: </label>
              <textarea 
              name="message" 
              id="message" 
              cols="30" 
              rows="10"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              ></textarea>
            </div>
            <button type='submit' className='btn'>Send</button>
            {
              sendForm && (<p className='confirm'>Message sent succesfully</p>)
            }
          </div>
        </Form>
      )}
    </Formik>
    </>
  )
}

export default Contact