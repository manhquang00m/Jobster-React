import React, { useState } from 'react'
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from '../components';

function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true
  }
  const [value, setValue] = useState(initialState);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
  const handleChange = (event) => {
    const newValue = { ...value }
    newValue[event.target.name] = event.target.value
    setValue(newValue)
  }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <FormRow type='text' name="name" value={value.name} handleChange={handleChange}></FormRow>

        {/* name field */}
        <FormRow type='email' name="email" value={value.email} handleChange={handleChange}></FormRow>

        {/* password field */}
        <FormRow type='password' name="password" value={value.password} handleChange={handleChange}></FormRow>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register