import styled from "styled-components";
import MyList from "./MyList";
import AddWord from "./AddWord";
import { Route } from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {createWord, loadDictionaryFB, addDictionaryFB} from "./redux/modules/dictionary"



function App() {
  const dispatch = useDispatch();
  React.useEffect( () => {
    dispatch(loadDictionaryFB())
  }, [] );

  return (
      <Container>
        <Route path="/" exact component={MyList}/>
        <Route path="/addword" component={AddWord}/>
      </Container>
  );
}

const Container = styled.div`
  background-color: #ccFFFF;
  width:300px;
  height:100%;
  margin:0 auto;
  padding: 30px;
  text-align: center;
  position: relative;
`

export default App;
