import styled from "styled-components";

export const LoginWrapper = styled('div')`
    z-index:0;
    position:absolute;
    width:100%;
    height:100%;
    min_height:750px;
    // margin-top:56px;
    background:#eee;
    text-align:center;
`;

export const LoginBox = styled('div')`
    padding-top:20px;
    width:400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    border-radius: 4px;
    display: inline-block;
`;

export const Input = styled('input')`
    display:block;
    width:240px;
    height:50px;
    line-height:50px;
    padding:0 10px;
    color:#777;
    margin:0 auto;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    border-radius: 0 0 4px 4px;
`;
export const Button = styled('div')`
    width:220px;
    height:50px;
    line-height:50px;
    background:#3194d0;
    border-radius:15px;
    color:#fff;
    margin:80px auto;
    margin-bottom:0;
    cursor:pointer;
`;