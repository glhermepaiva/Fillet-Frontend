import React, {useState} from 'react'
import {Body, Sidebar, Main, SignUpText, InputContainer, MainLoading} from './Styles'
import {TextField, Button, createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core'
import axios from 'axios'
import {LoopCircleLoading} from 'react-loadingg';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main:"#4C54FF"
    },
    secondary: {
      main:"#C7C7C7"
    } 
  }
})

const CustomButton = withStyles(() => ({
  root: {
    borderRadius: '0',
    textTransform: 'none',
    boxShadow: 'none',
    alignSelf: 'flex-start',
    width: '165px'
  },
}))(Button)

const CustomTextField = withStyles(() => ({
  root: {
    margin: '20px',
    fontWeight: 'bold',
    userSelect: "none"
  }
}))(TextField)

const Container = () => <LoopCircleLoading />;

const App = () => {

  const baseUrl = "https://fillet-teste-fullstack.herokuapp.com"

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const signup = () => {
    setLoading(true)
    const body = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password
    }
    axios.post(`${baseUrl}/user/signup`, body)
    .then((response) => {
      alert(response.data.message)
      setLoading(false)
      setFirstName("")
      setLastName("")
      setPhone("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    }).catch((error) => {
      alert(error.response.data.error)
      setLoading(false)
      setPassword("")
      setConfirmPassword("")
    })
  }

  const onChangeFirstName = event => {
    setFirstName(event.target.value)
  }

  const onChangeLastName = event => {
    setLastName(event.target.value)
  }

  const onChangePhone = event => {
    setPhone(event.target.value)
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onChangeConfirmPassword = event => {
    setConfirmPassword(event.target.value)
  }

  return (
    <MuiThemeProvider theme={myTheme}>
      <Body>
        <Sidebar />
        {loading ? <MainLoading>{Container()}</MainLoading> :
        <Main>
          <SignUpText>Sign up</SignUpText>
          <InputContainer>
            <CustomTextField label="First name" color="secondary" inputProps={{style: {fontWeight: 'bold'}}} value={firstName} onChange={onChangeFirstName}/>
            <CustomTextField label="Last name" color="secondary" inputProps={{style: {fontWeight: 'bold'}}} value={lastName} onChange={onChangeLastName}/>
            <CustomTextField label="Phone" color="secondary" inputProps={{style: {fontWeight: 'bold'}}} value={phone} onChange={onChangePhone}/>
            <CustomTextField label="E-mail" color="secondary" inputProps={{style: {fontWeight: 'bold'}}} value={email} onChange={onChangeEmail}/>
            <CustomTextField label="Password" color="secondary" type="password" inputProps={{style: {fontWeight: 'bold'}}} value={password} onChange={onChangePassword}/>
            <CustomTextField label="Confirm Password" color="secondary" type="password" inputProps={{style: {fontWeight: 'bold'}}} value={confirmPassword} onChange={onChangeConfirmPassword}/>
          </InputContainer>
          <CustomButton variant="contained" color="primary" onClick={signup}>Create account</CustomButton>
        </Main>}
      </Body>
    </MuiThemeProvider>
  );
}

export default App;
