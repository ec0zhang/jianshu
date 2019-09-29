import styled from "styled-components";
import Book from '../../common/static/BOOK.png';
import Save from '../../common/static/保存.png';
import Pic from '../../common/static/图片.png';
import Audio from '../../common/static/音频 (1).png';
import Take from '../../common/static/发表.png';


export const WriteWrap = styled('div')`
    width:80%;
    margin:0 auto;
    box-shadow: 2px 2px 1px #d8d8d8;
`;

export const Left = styled('div')`
    display:inline-block;
    width:50%;
    height:calc(93vh);
`;

export const WriteHelps = styled('div')`
    display:inline-block;
    width:100%;
    // height:5%;
    margin-top:20px;
    background:#d9d9d9;
    padding:9px 0;
    
    .picture1{
        cursor:pointer;
        margin-left:20px;
        display:inline-block;
        width:16px;
        height:16px;
        background-size:contain;
        background:url(${Pic})
    }
    .picture2{
        cursor:pointer;
        margin-left:20px;
        display:inline-block;
        width:16px;
        height:16px;
        background:url(${Audio})
    }
    .picture3{
        cursor:pointer;
        margin-left:20px;
        display:inline-block;
        width:16px;
        height:16px;
        background:url(${Book})
    }
    .picture4{
        cursor:pointer;
        margin-left:20px;
        display:inline-block;
        width:16px;
        height:16px;
        background:url(${Save})
    }
    .picture5{
        float:right;
        margin-right:10px;
        cursor:pointer;
        margin-left:20px;
        display:inline-block;
        width:16px;
        height:16px;
        background:url(${Take})
    }
`;
export const WriteLeft = styled('textarea')`
    width:100%;
    resize:none;
    outline:none;
    height:95%;
    padding:50px 40px;
    font-size: 18px;
    line-height:24px;
    display:inline-block;
    box-sizing:border-box;
    border:0;
`;
export const WriteRight = styled('div')`
    // border: 1px solid black;
    width:49%;
    height:calc(93vh);
    display:inline-block;
    background:#FCFCF2;
`;
