import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    answerLang: 'en',
    questionLang: 'de',
    isCorrect: false,
    isIncorrect: false,
    answer: '',
    data: {
        word: '',
        translation: '',
    },
};

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLangs: (state, action) => {
            const { name, value } = action.payload
            console.log(name, value)
            console.log(state.answerLang)
            if (name === 'answer_language' && value === state.questionLang) {
                // swap if they are the same
                state.questionLang = state.answerLang
                state.answerLang = value
            }
            else if (name === 'question_language' && value === state.answerLang) {
                state.answerLang = state.question
                state.questionLang = value
            }
            else if (name === 'answer_language') {
                console.log('3')
                state.answerLang = value
            }
            else if (name === 'question_language') {
                console.log('4')
                state.questionLang = value
            }
        }
    }
});

export const { setLangs } = langSlice.actions;

export default langSlice.reducer;
