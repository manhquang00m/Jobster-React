import React, { useState } from 'react'
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from '../components';
import { toast } from 'react-toastify';
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
    const { name, email, password, isMember } = value;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
  }
  const handleChange = (event) => {
    const newValue = { ...value }
    newValue[event.target.name] = event.target.value
    setValue(newValue)
  }
  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{value.isMember ? 'Login' : 'Register'}</h3>

        {/* name field */}
        {!value.isMember && <FormRow type='text' name="name" value={value.name} handleChange={handleChange}></FormRow>}

        {/* name field */}
        <FormRow type='email' name="email" value={value.email} handleChange={handleChange}></FormRow>

        {/* password field */}
        <FormRow type='password' name="password" value={value.password} handleChange={handleChange}></FormRow>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {value.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type='button' onClick={toggleMember} className='member-btn'>
            {value.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register