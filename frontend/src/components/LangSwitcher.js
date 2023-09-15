import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function LangSwitcher({ styles }) {

    const langs = useSelector(state => state.lang)
    const dispatch = useDispatch()

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        dispatch({ type: 'lang/setLangs', payload: { name, value } })
    }



    return (
        <div className={styles.langSelect}>
            <form className={styles.langForm}>
                <select name="answer_language" id="answer_language" value={langs.answerLang} onChange={handleChange} className={`${styles.selectItem} ${styles.light}`}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
                <select name="question_language" id="answer_language" value={langs.questionLang} onChange={handleChange} className={`${styles.selectItem} ${styles.dark}`}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
            </form>
        </div>
    )
}
