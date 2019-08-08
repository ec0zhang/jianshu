import styled from "styled-components";

export const HomeWrapper = styled('div')`
    // overflow:hidden;
    width:900px;
    height:300px;
    margin:0 auto;
`;

export const HomeLeft = styled('div')`
    width:625px;
    height:300px;
    // padding-top:30px;
    margin-top:30px;
    float:left;
    .banner{
        width:625px;
        height:270px;
        border-radius:5px;

    }
`;
export const HomeRight = styled('div')`
    width:240px;
    height:300px;        
    float:right;
`;

// =============== topic ===================
export const TopicWrapper = styled('div')`
    overflow:hidden;
    padding:20px 0 10px 0; 
    margin-left:-18px;
    // border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled('div')`
    float:left;
    background:#f7f7f7;
    line-height:30px;
    color:#000;
    border:#dcdcdc 1px solid;
    border-radius:4px;
    padding:0 10px 0 0;
    margin-left:18px;
    // margin-right:18px;
    margin-bottom:18px;
    cursor:pointer;
    .topic-pic{
        display:block;
        float:left;
        width:30px;
        height:30px;
        margin-right:10px;
    }
`;
//================ List ======================
export const ListInfo = styled('div')`
    width:500px;
    float:left:
    h3{
        line-height:1.5;
        font-size:18px;
        font-weight:bolder;
        color:#333;        
    }
    p{
        line-height:24px;
        font-size:13px;
        color:#999;
        margin-top:10px;
    }
    h3:hover{
        cursor:pointer;
        text-decoration:underline;
    }
    
`;

export const ListItem = styled('div')`
    overflow:hidden;
    padding:20px 0;
    border-bottom: 1px solid #dcdcdc;
    img{
        display:block;
        width:150px;
        height:100px;
        float:right;
        border-radius:10px;
        
        :hover{
            cursor:pointer;
        }
    }
`;

// ============== Recommend ================

export const RecommendItem = styled('a')`
    display:inline-block;
    
    margin-top:3px;
    img{
        width:280px;
        height:50px;
    }
`;

export const RecommendList = styled('div')`
    margin-top:25px;
`;

// =============== Writer ====================

export const WriterList = styled('div')`
    margin-top:100px;
    width:280px;
    font-size:14px;
    color:#969696;
    .iconfont{
        float:right;
        transform-origin:center center;
        transition:all .4s ease-in;
    }
    .right{
        float:right;
    }
`;

export const WriterTop = styled('div')`
    width:280px;
`;

export const WriterItem = styled('div')`
    margin-top:20px;
    margin-bottom:15px;
    width:280px
    img{
        width:50px;
        border:1px #ddd solid;
        border-radius:50%;
        // vertical-align: middle;
        float:left;
        margin-right:10px;
        cursor:pointer;
    }
    .user-name{
        padding-top:10px;
        display:inline-block;
        font-size:14px;
        margin-right:60px;
        color:#333;
    }
    .desc{
        display:inline-block;
        margin-top:5px;
        font-size:12px;
    }
    .follow{
        color:#42c02e;
        font-size:13px;
        float:right
        margin-top:-5px;
        cursor:pointer;
    }
`;