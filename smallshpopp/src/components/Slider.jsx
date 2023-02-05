import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutLined} from "@mui/material-ui/icons"
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
`


const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow>
        <ArrowRightOutLined />
      </Arrow>
    </Container>
  );
}

export default Slider
