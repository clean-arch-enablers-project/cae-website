import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.div`
  flex-grow: 1;
`

export const Title = styled.h1`
  color: #f5f5f5;
  font-size: 50px;
  text-align: center;
`

export const TopContent = styled.div`
  background-image: url('/background.jpeg');
  background-size: cover;
  padding: 100px 50px 50px 50px;
  text-align: center;
  height: 60vh;
`

export const Buttons = styled.div`
  display: inline-flex;
  margin-top: 50px;
  gap: 10px;
`

export const Button = styled.a`
  background-color: #f5f5f5;
  border: solid 1px black;
  color: #171717;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  &:hover {
    border: solid 1px white;
    background-color: #111;
    color: #f5f5f5;
  }
`
