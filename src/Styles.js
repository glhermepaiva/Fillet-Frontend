import styled from 'styled-components'

export const Body = styled.div`
  background-color: rgb(231, 232, 246);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Sidebar = styled.div`
  width: 19vw;
  height: 70vh;
  background-color: rgb(76, 84, 255);
`

export const Main = styled.div`
  width: 35vw;
  height: 70vh;
  background-color: rgb(249, 249, 249);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 3vw;
`

export const SignUpText = styled.h1`
  color: rgb(255, 85, 218);
  font-size: 3vw;
  align-self: flex-start;
  margin: 0;
`

export const InputContainer = styled.div`
  margin: 1vw -1vw 2vw -1vw;
`

export const Input = styled.input`
  width: 15vw;
`

export const Button = styled.button`
  width: 15vw;
`