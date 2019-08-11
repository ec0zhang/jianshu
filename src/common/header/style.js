import styled from "styled-components";
import LogoPic from '../static/logo.png'

export const HeaderWrapper = styled('div')`
    z-index:999;
    position: relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled('div')`
    position: absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    background:url(${LogoPic});
    background-size:contain;
`;

export const Nav = styled('div')`
    width:960px;
    height:56px;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`;


export const NavItem = styled('div')`
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    height:56px;
    padding:0 15px;
    line-height:56px;
    color:#333;
    box-sizing:border-box;
    cursor:pointer;
`;

export const SearchWrapper = styled('div')`
    position:relative;
    float:left;
    // background:red;
    
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        // background:green;
        &.focused{
            background:#777;
            color:white;
        }
    }

`;

export const NavSearch = styled('input').attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    // border:none;
    outline:none;
    margin-top:9px;
    margin-left:20px;
    padding:0 40px 0 20px;
    border:1px solid #eee;
    border-radius:40px;
    background:#eee;
    box-sizing:border-box;
    font-size:13px;
    color:#444;
    
    
    &::placeholder:#999;
    // 该组件下的placeholder
    
    &.focused{
        width:240px;
    }
    
        
        
    &.slide-enter{
        transition:all .2s ease-in-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    
    &.slide-exit{
        transition:all .2s ease-in-out;
    }
    &.slide-exit-active{
        width:160px;
    }

`;

export const SearchInfo = styled('div')`
    position:absolute;
    color:#969696;
    padding:20px 20px 10px; 
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
    top:100%;
    // left:27%;
    margin-left:170px;
    width:250px;
`;
export const SearchInfoTitle = styled('div')`
    font-size:14px;
    margin-bottom:15px
`;
export const SearchInfoSwitch = styled('span')`
    float:right;
    font-size:14px;
    cursor:pointer;
    .iconfont{
        font-size:12px;
        margin-right:3px;
        display:inline-block;
        float:left;
        // transform:rotate(10deg);
        transform-origin:center center;
        transition:all .4s ease-in;
    }
    
    :hover{
        color:#444;
    }
`;
export const SearchInfoList = styled('div')`
    
`;
export const SearchInfoItem = styled('a')`
    padding:2px 6px;
    font-size:12px;
    color:#787878;
    border:1px solid #ddd;
    border-radius:3px;
    cursor:pointer;
    margin:0 10px 10px 0;
    // line-height:30px;
    display:inline-block;  
    
    :hover{
        color:#333;
        border:#999 1px solid;
    }
`;


export const Addition = styled('div')`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled('div')`
    float:right;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    cursor:pointer;
    
    &.reg{
        color:#ec6149;
    }
    &.write{
        color:#fff;
        background:#ec6149;
        .iconfont{
            margin-right:3px;
        }
    }
`;