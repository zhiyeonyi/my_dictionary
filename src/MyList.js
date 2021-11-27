import React from "react";
import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";




const MyList = () => {

    const my_list = useSelector((state)=> state.dictionary.list);
    // console.log(my_list)
    return (
        <div>  
            <Title> MY DICTIONARY </Title>
            
            {my_list.map((list,i)=>{
                return (
                    <Box>
                            <Name>단어</Name>
                            {list.word}
                            <Name>설명</Name>
                            {list.explain}
                            <Name>예시</Name>
                            <Example>{list.example}</Example>                
                    </Box>
                );
            })}
            <Plus>
                <Link to ="/addword">
                    <IoAddCircle size="70" color="DarkViolet" style={{position:"absolute", bottom:"10px", right:"10px"}}/>     
                </Link>
            </Plus>
        
        </div>

    )
};

const Plus = styled.div`

`

const Title = styled.h3`
    color: black ;
    text-align: center;
    text-align: left;
    padding:15px;
    margin: 0px 15px 0px 15px;
`
const Box = styled.div`
    background-color: white;
    width: 270px;
    height: 200px;
    margin: 12px 25px 12px 25px;
    text-align: left;
    input {
        border: none;
        margin: auto;
    }
`
const Name = styled.h6`
    text-decoration: underline;
    padding: 15px 15px 0px 15px;
    margin: 0px 0px 5px 0px;
`
// const Word = styled.div``
// const Explain = styled.div``
const Example = styled.div`
    color: blue;
`


export default MyList;