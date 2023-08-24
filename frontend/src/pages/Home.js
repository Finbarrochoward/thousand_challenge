import React from 'react'
import WordDisplay from '../components/WordDisplay'
import WordForm from '../components/WordForm'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.homePage}>
            <WordForm />
            <WordDisplay />
        </div>
    )
}
