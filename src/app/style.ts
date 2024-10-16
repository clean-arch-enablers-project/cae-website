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

export const MidContent = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`
