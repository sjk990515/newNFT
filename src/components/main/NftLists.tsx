import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NftListsBG from './../../images/nftListsBG.png';
import cardLogo from '../../images/cardLogo.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


function NftLists() {
    const [category, setCategory] = useState(true);

    const CategoryNewOnClick = () => {
        setCategory(true)
    }

    const CategoryPopularOnClick = () => {
        setCategory(false)
    }

    // 박스 더미 데이터
    const NftContentsBox = (                   
    <NftListsContentsBox>
        <NftListsContentsFlex>
            <NftListsContentsImg src={cardLogo} />
            
            <div>
                <NftListsContentsTextP>
                    Rank : 244
                </NftListsContentsTextP>

                <NftListsContentsTextH2>
                    NFT CARD NAME
                </NftListsContentsTextH2>

                <NftListsContentsTextH3>
                    20.12 ETH
                </NftListsContentsTextH3>
            </div>
        </NftListsContentsFlex>

        <NftListsContentsView>
                View Detail
                <MdKeyboardDoubleArrowRight />
        </NftListsContentsView>
    </NftListsContentsBox>)

    return (
        <NftListsWrap>
            <NftListsBgBox>
                <NftListsBg src={NftListsBG}/>
            </NftListsBgBox>

            <NftListsCategoryBox>
                <NftListsCategory
                onClick={CategoryNewOnClick}
                category={category ? 1 : 0}>
                    New
                </NftListsCategory>
                <NftListsCategory
                onClick={CategoryPopularOnClick}
                category={!category ? 1 : 0}>
                    Popular
                </NftListsCategory>
            </NftListsCategoryBox>

            {category ? 
            <NftListsContents>
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
            </NftListsContents>
                 : 
            <NftListsContents>
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
                    {NftContentsBox}
            </NftListsContents>}

        </NftListsWrap>
    )
}

export default NftLists

const NftListsWrap = styled.div`
    position:relative;
    width:100%;
    height:1425px;
    background-color:#000E41;
    overflow:hidden;
    padding:0 240px;
`
const NftListsBgAnimation = keyframes`
    0% {
        rotate:0deg;
    }
    100% {
        rotate:360deg;
    }
`

const NftListsBgBox = styled.div`
    height:1425px;
    position:absolute;
    z-index:1;
    transform:translate(-50%,-50%);
    top:50%;
    left:50%;
`

const NftListsBg = styled.img`
    height:1425px;
    margin:0 auto;
    object-fit:cover;
    animation: ${NftListsBgAnimation} 60s 0s infinite linear;
`

const NftListsCategoryBox = styled.div`
    width:100%;
    margin-top:100px;
    display:flex;
`

const NftListsCategory = styled.h2<{category : Number}>`
    z-index:999;
    width:120px;
    text-align:center;
    border-bottom:${(props => props.category ? "1px solid #fff" : "1px solid #727272")};
    font-size:24px;
    color:${(props => props.category ? "#fff" : "#727272")};
    line-height:40px;
    cursor: pointer;
    &:hover{
        color:#fff;
        border-bottom:1px solid #fff;
    }
`

const NftListsContents = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-content:space-between;
    width:100%;
    height:500px;
    margin-top:40px;
    z-index:99;
`

const NftListsContentsBox = styled.div`
    display:flex;
    align-items:center;
    background-color:#2A4090;
    border-radius:10px;
    width:calc(50% - 20px);
    height:80px;
    padding:10px;
    margin-bottom:20px;
`

const NftListsContentsFlex = styled.div`
    display:flex;
    align-items:center;`

const NftListsContentsImg = styled.img`
    width:60px;
    height:60px;
    padding:5px;
    background-color:#fff;
    margin-right:20px;
`

const NftListsContentsTextP = styled.div`
    font-size:14px;
    color:#ccc;
`

const NftListsContentsTextH2 = styled.div`
    font-size:18px;
    font-weight:500;
    margin:5px 0;
    color:#fff;
`

const NftListsContentsTextH3 = styled.div`
    font-size:14px;
    color:#fff;
`

const NftListsContentsView = styled.button`
    display:flex;
    align-items:center;
    font-size:16px;
    color:#fff;
    margin: auto 10px 0 auto;
    transition:0.3s ease;
    &:hover{
        margin-right:0px;
    }
`

const NftListsContentsNew = styled.div`
    
`

const NftListsContentsPopular = styled.div`
    
`