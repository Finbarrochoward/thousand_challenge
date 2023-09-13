import { React, useState, useEffect } from 'react'

export default function LangSwitcher({ styles }) {

    const [langs, setLangs] = useState({ answerLang: 'en', questionLang: 'de' });

    useEffect(() => {
        // if url data already exists, do nothing
        const url = new URL(window.location.href);
        const answerLang = url.searchParams.get('answerLang');
        const questionLang = url.searchParams.get('questionLang');
        // check if undefined
        if (answerLang === undefined && questionLang === undefined) {
            setLangs({ answerLang: answerLang, questionLang: questionLang })
        }
        else {
            // set default url data
            setLangs({ answerLang: 'en', questionLang: 'de' })
            url.searchParams.set('answerLang', langs.answerLang);
            url.searchParams.set('questionLang', langs.questionLang);
            window.history.pushState({}, '', url);
        }
    }, []);

    useEffect(() => {
        // set data in URL
        const url = new URL(window.location.href);
        url.searchParams.set('answerLang', langs.answerLang);
        url.searchParams.set('questionLang', langs.questionLang);
        window.history.pushState({}, '', url);

    }, [langs]);

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value)

        if (name === 'answer_language' && value === langs.questionLang) {
            // swap if they are the same
            setLangs({ answerLang: value, questionLang: langs.answerLang })
        }
        else if (name === 'question_language' && value === langs.answerLang) {
            // swap if they are the same
            setLangs({ answerLang: langs.questionLang, questionLang: value })
        }
        else if (name === 'answer_language') {
            setLangs({ answerLang: value, ...langs })
        }
        else if (name === 'question_language') {
            setLangs({ questionLang: value, ...langs })
        }
    }



    return (
        <div className={styles.langSelect}>
            <form className={styles.langForm}>
                <select name="answer_language" id="answer_language" value={langs.questionLang} onChange={handleChange} className={`${styles.selectItem} ${styles.light}`}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
                <select name="question_language" id="answer_language" value={langs.answerLang} onChange={handleChange} className={`${styles.selectItem} ${styles.dark}`}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
            </form>
        </div>
    )
}
