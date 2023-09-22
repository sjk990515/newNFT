import React from 'react'
import styled from 'styled-components'
import headerLogo from '../images/headerLogo.png'
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const HeaderLogoNavigate = () => {
        navigate('/');
    };

  return (
    <HeaderWrap>
        {/* <HeaderLogo src={headerLogo} onClick={HeaderLogoNavigate}/> */}
        <HeaderLogo onClick={HeaderLogoNavigate}/>

        <SearchBox>
            <SearchItems placeholder='Search items' />
            <button>
                <SearchIcon />
            </button>
        </SearchBox>

        <MenuBox>
            <MenuIcon />
        </MenuBox>

    </HeaderWrap>
  )
}

export default Header;

const HeaderWrap = styled.div`
    /* width:100%; */
    height:70px;
    margin:0 240px;
    display:flex;
    justify-items:center;
    align-items:center;
`

// const HeaderLogo = styled.img`
//     height:33px;
//     cursor: pointer;
// `

const HeaderLogo = styled.div`
    width:170px;
    height:33px;
    background-color:blue;
    cursor: pointer;
`


const SearchItems = styled.input`
    width:200px;
    height:30px;
    border:1px solid #727272;
    border-radius:5px;
    text-indent:10px;
`
const SearchBox = styled.form`
    position:relative;
    margin:0 10px 0 auto;
`
const SearchIcon = styled(BsSearch)`
    position:absolute;
    font-size:20px;
    height:30px;
    top:0;
    right:10px;
    cursor: pointer;
`

const MenuBox = styled.div`
    width:30px;
    height:30px;
    border: 1px solid #727272;
    border-radius: 5px;
    text-align:center;
    cursor:pointer;
    transition:0.3s ease;

    &:hover{
        background-color:#727272;
        color:#fff;
    }
`

const MenuIcon = styled(RxHamburgerMenu)`
    font-size:24px;
    height:30px;
`