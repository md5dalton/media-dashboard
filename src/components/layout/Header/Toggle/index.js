import React, { useState, useEffect } from 'react'

import './styles.sass'

export default () => {
    
    const [ theme, setTheme ] = useState('light')

    const getTheme = () => localStorage.getItem("theme")
    
    const toggleTheme = () => {

        const savedTheme = getTheme()

        const newTheme = savedTheme === "light" ? "dark" : "light"
        
        localStorage.setItem("theme", newTheme)

        setTheme(newTheme)

    }

    useEffect(() => {

        const savedTheme = getTheme()

        document.body.classList.remove("light", "dark")
        document.body.classList.add(savedTheme)

    })

    return (
        <div className="toggle">
            <input type="checkbox" id="theme" checked={getTheme() === "dark" ? true : false} onChange={toggleTheme} />
            <label htmlFor="theme"></label>
        </div>
    )
}