import { React, useEffect, useState } from 'react'
import TestComponent from '../components/TestComponent'
import WordDisplay from '../components/WordDisplay'
import WordForm from '../components/WordForm'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { UseSelector, useDispatch, useSelector } from 'react-redux'

export default function Home() {

    const [data, setData] = useState({})
    const [answer, setAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [isIncorrect, setIsIncorrect] = useState(false)
    const langs = useSelector(state => state.lang)
    const dispatch = useDispatch()

    // Gets a word
    const getNewWord = (answerLang, questionLang) => {
        const params = { 'answer_language': langs.answerLang, 'question_language': langs.questionLang }
        axios.get('http://127.0.0.1:5000/getWord', { params })
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        getNewWord(langs.answerLang, langs.questionLang)
    }, [langs.answerLang, langs.questionLang]);


    // Sends post request to check answer
    // Response format is 
    // {
    //     "correct": true,
    //     "correctAnswer": "hello"/null (if correct is true/false)
    // }
    const checkAnswer = async (answer) => {
        const answerObj = { givenAnswer: answer, correctAnswer: data.word };
        try {
            const response = await axios.post('http://127.0.0.1:5000/checkAnswer', answerObj);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Handles form submit for checking answer
    const handleSubmit = (event) => {
        event.preventDefault();
        checkAnswer(answer).then((response) => {
            // set outcome
            setIsCorrect(response.isCorrect)
            setIsIncorrect(!response.isCorrect)
            // Handle correct case
            if (response.isCorrect) {
                setTimeout(() => {
                    setIsCorrect(false);
                    setIsIncorrect(false);
                    getNewWord(langs.answerLang, langs.questionLang);
                }, 500);
            }
            setAnswer('');
        });
    };

    // Handles input change
    const handleChange = (event) => {
        setAnswer(event.target.value)
    };

    return (
        <>
            <div className={styles.homePage}>
                <WordForm setAnswer={setAnswer} handleSubmit={handleSubmit} handleChange={handleChange} answer={answer} isIncorrect={isIncorrect} />
                <WordDisplay translation={data.translation} isCorrect={isCorrect} isIncorrect={isIncorrect} word={isIncorrect ? data.word : null} />
            </div>
        </>
    )
}
