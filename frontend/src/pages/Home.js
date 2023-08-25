import React from 'react'
import TestComponent from '../components/TestComponent'
import WordDisplay from '../components/WordDisplay'
import WordForm from '../components/WordForm'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.homePage}>
            <WordForm />
            <WordDisplay />
            <TestComponent />
        </div>
    )
}
