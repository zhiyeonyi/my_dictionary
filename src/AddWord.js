import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {createWord, loadDictionaryFB, addDictionaryFB} from "./redux/modules/dictionary"

const AddWord = (props) => {
    const dispatch = useDispatch();
    const my_word = React.useRef(null);
    const my_explain = React.useRef(null);
    const my_example = React.useRef(null);
    const history = useHistory();

    

    const addWordList = () => {
        // dispatch(createWord({
        //     word: my_word.current.value,
        //     explain: my_explain.current.value,
        //     example: my_example.current.value,
        // }));
        dispatch(addDictionaryFB({
                word: my_word.current.value,
                explain: my_explain.current.value,
                example: my_example.current.value,
            }));
        history.push("/");
    };

    return (
        <div>
            <Subtitle>단어 추가하기</Subtitle>
            <SmallBox>
                <Word>
                    <Name>단어</Name>
                    <input type="text" ref={my_word}
                    //값을 치면 콘솔에 나옴
                    // onChange={()=> {
                    //     console.log(my_word.current.value)}}
                        /> 
                </Word>
            </SmallBox>
            <SmallBox>
                <Explain>
                    <Name>설명</Name>
                    <input type="text" ref={my_explain}/>
                </Explain>
            </SmallBox>
            <SmallBox>
                <Example>
                    <Name>예시</Name>
                    <input type="text" ref={my_example}/>
                </Example>
            </SmallBox>
            <Button onClick ={addWordList}
            >추가하기</Button>
        </div>
    );
};



const Subtitle = styled.h3`
    color: black ;
    text-align: center;
    text-align: left;
    padding:15px;
    margin: 0px 15px 0px 15px;
`

const SmallBox = styled.div`
    background-color: white;
    width: 250px;
    height: 100px;
    margin: auto;
    text-align: left;
    input {
        padding: auto;
        margin: auto;
        width : 200px;
        height : 20px;
        margin-left: 15px;
    }
`
const Name = styled.h6`
    text-decoration: underline;
    padding: 15px;
    margin: 10px 0px 5px 0px;
`
const Word = styled.div``
const Explain = styled.div``
const Example = styled.div``
                
const Button =styled.button`
    color: white;
    font-size: 300;
    font-weight:bold;
    background-color: darkviolet;
    width: 250px;
    height: 50px;
    margin: 25px;

`


export default AddWord;