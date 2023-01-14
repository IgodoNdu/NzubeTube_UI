import React from 'react'
//import styled components for styling
import styled from 'styled-components'
import Card from '../components/Card'

//for styling
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Home
