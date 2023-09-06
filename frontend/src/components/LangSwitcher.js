import React from 'react'

export default function LangSwitcher({ styles }) {
    return (
        <div className={styles.langSelect}>
            <form className={styles.langForm}>
                <select name="language" id="language" className={`${styles.selectItem} ${styles.light}`}>
                    <option value="english">English</option>
                    <option value="german">German</option>
                    <option value="spanish">Spanish</option>
                </select>
                <select name="language" id="language" className={`${styles.selectItem} ${styles.dark}`}>
                    <option value="english">English</option>
                    <option value="german">German</option>
                    <option value="spanish">Spanish</option>
                </select>
            </form>
        </div>
    )
}
