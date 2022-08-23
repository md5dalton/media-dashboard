import React, { useState, useEffect } from 'react'

import './styles.sass'

export default () => {
    
    const defaultTheme = "light"
    const altTheme = "dark"

    const getTheme = () => localStorage.getItem("theme")

    const [ theme, setTheme ] = useState(getTheme())
    
    const toggleTheme = () => {

        const theme = getTheme()

        let newTheme = theme !== defaultTheme ? defaultTheme : altTheme  
        if (!theme) newTheme = altTheme
        
        localStorage.setItem("theme", newTheme)

        setTheme(newTheme)

    }

    useEffect(() => {
        document.body.classList.remove(defaultTheme, altTheme)
        document.body.classList.add(theme || defaultTheme)
    })

    return (
        <div className="theme-toggler">
            <label htmlFor="theme">{theme || defaultTheme} mode</label>
            <input type="checkbox" id="theme" checked={theme === altTheme ? true : false} onChange={toggleTheme} />
        </div>
    )
}