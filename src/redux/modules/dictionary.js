// dictionary.js
import{db}from "../../firebase"
import { collection,doc, getDoc, getDocs, addDoc, updateDoc,deleteDoc} from "firebase/firestore";

// Actions
const LOAD = 'dictionary/LOAD';
const CREATE = 'dictionary/CREATE';

const initialState = {
    list: [
        // {word : "ㅎ1ㅎ1ㅎ1",
        // explain : "히히를 변형한 단어. 숫자 1을 '1'로 쓴다.",
        // example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",},

        // {word : "ㅎ1ㅎ1ㅎ1",
        // explain : "히히를 변형한 단어. 숫자 1을 '1'로 쓴다.",
        // example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",},

        // {word : "ㅎ1ㅎ1ㅎ1",
        // explain : "히히를 변형한 단어. 숫자 1을 '1'로 쓴다.",
        // example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",},
    ],
}


// Action Creators
export function loadWord(dictionary_list){
    return {type:LOAD, dictionary_list};

}

export function createWord(word){
    return {type: CREATE, word };
}

//middlewares
export const loadDictionaryFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db, "dictionary"));
        console.log(dictionary_data);

        let dictionary_list = [];

        dictionary_data.forEach((d) => {
            console.log(d.data());
            // dictionary_list = [...dictionary_list, {...d.data()}];
            dictionary_list.push({id:d.id, ...d.data()});

        });

        console.log(dictionary_list);

        dispatch(loadWord(dictionary_list));
    };
};

export const addDictionaryFB = (dictionary) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db,"dictionary"), dictionary);
        const _dictionary = await getDoc(docRef);
        const dictionary_data = {id:_dictionary.id,..._dictionary.data()};

        // console.log(dictionary_data);

        dispatch(createWord(dictionary_data));
        // console.log((await getDoc(docRef)).data());
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case "dictionary/LOAD" : {
            return {list: action.dictionary_list};
        }


        case "dictionary/CREATE" : {
            const new_dictionary_list = [...state.list, action.word];
            return {list: new_dictionary_list};
        }

        default: 
            return state;
    }
} 