import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'

const Home = () => {
    return (
        <Container>
            <ImageSlider />
            <Viewers />

        </Container>
    )
}
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x: hidden;
    &:before{
        background:url('/images/home-background.png') center center /cover ;
        content:"";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
   
`

export default Home