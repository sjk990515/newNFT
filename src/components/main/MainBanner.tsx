import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

function MainCreate() {
  const [clickCreate, setClickCreate] = useState(false);

  const CreateOnClick = () => {
    setClickCreate(!clickCreate);
  }

  return (
    <MainCreateWrap onClick={CreateOnClick} clickCreate={clickCreate ? 1 : 0}>
        Create
    </MainCreateWrap>
  )
}

export default MainCreate

const MainCreateWrap = styled.div<{clickCreate : Number}>`
    position: fixed;
    z-index: 99999;
    top:520px;
    left:${(props) => props.clickCreate ? '240px' : '-400px'};
    transition:0.3s ease;
    width: 500px;
    height: 300px;
    background-color:#ccc;
    border-radius:${(props) => props.clickCreate ? '10px' : '200px'};
    text-align:center;
    font-size:36px;
    line-height:300px;
    box-shadow:4px 4px 10px 0 #000;
    opacity:${(props) => props.clickCreate ? '1' : '1'};
    filter:${(props) => props.clickCreate ? 'blur(0)' : 'blur(4px)'};
`