import React from 'react'
import styles from '../styles/Home.module.css'

export default function WordDisplay({ translation, isCorrect, isIncorrect, word }) {
    const handleColorLogic = () => {
        if (isCorrect) {
            return styles.correct
        } else if (isIncorrect) {
            return styles.incorrect
        } else {
            return ''
        }
    }


    return (
        <>
            <div className={`${styles.panel} ${styles.wordDisplay}`}>
                <div className={`${handleColorLogic()}`}>{translation}</div >
                {word && <div className={`${styles.wordDisplay} ${styles.fadeIn}`}>{word}</div >}
            </div>
        </>
    )
}
