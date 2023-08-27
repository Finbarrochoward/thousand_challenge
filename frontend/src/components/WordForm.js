import React from 'react'
import styles from '../styles/Home.module.css'

export default function WordForm({ setAnswer, handleSubmit, handleChange, answer, isIncorrect }) {

    return (
        <div className={`${styles.panel} ${styles.wordForm}`}>
            <form onSubmit={handleSubmit} className={styles.flexCol}>
                <label className={isIncorrect ? styles.fadeIn : ''}> {isIncorrect ? "Please type the correct answer" : ""}</label>
                <input type="text" name="answer" onChange={handleChange} value={answer} />
            </form>
        </div >
    )
}
