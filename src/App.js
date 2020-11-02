import React, {useState} from 'react'
import {Body, Sidebar, Main, SignUpText, InputContainer} from './Styles'
import {TextField, Button, createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core'

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
    fontWeight: 'bold'
  }
}))(TextField)

const App = () => {
  return (
    <MuiThemeProvider theme={myTheme}>
      <Body>
        <Sidebar />
        <Main>
          <SignUpText>Sign up</SignUpText>
          <InputContainer>
            <CustomTextField label="First name" color="secondary" inputProps={{style: {fontWeight: 'bold'}}}/>
            <CustomTextField label="Last name" color="secondary" inputProps={{style: {fontWeight: 'bold'}}}/>
            <CustomTextField label="Phone" color="secondary" inputProps={{style: {fontWeight: 'bold'}}}/>
            <CustomTextField label="E-mail" color="secondary" inputProps={{style: {fontWeight: 'bold'}}}/>
            <CustomTextField label="Password" color="secondary" type="password" inputProps={{style: {fontWeight: 'bold'}}}/>
            <CustomTextField label="Confirm Password" color="secondary" type="password" inputProps={{style: {fontWeight: 'bold'}}}/>
          </InputContainer>
          <CustomButton variant="contained" color="primary">Create account</CustomButton>
        </Main>
      </Body>
    </MuiThemeProvider>
  );
}

export default App;
