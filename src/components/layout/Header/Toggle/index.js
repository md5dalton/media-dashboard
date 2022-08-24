import React, { useState, useEffect } from 'react'

import './styles.sass'

export default () => {
    
    const defaultTheme = "dark"
    const altTheme = "light"

    const getTheme = () => localStorage.getItem("theme") || defaultTheme

    const [ theme, setTheme ] = useState(getTheme())
    
    const toggleTheme = () => {

        const theme = getTheme()

        const newTheme = theme !== defaultTheme ? defaultTheme : altTheme  
        
        localStorage.setItem("theme", newTheme)

        setTheme(newTheme)

    }

    useEffect(() => {
        document.body.classList.remove(defaultTheme, altTheme)
        document.body.classList.add(theme)
    })

    return (
        <div className="theme-toggler">
            <label htmlFor="theme">{theme} mode</label>
            <input type="checkbox" id="theme" checked={theme !== altTheme ? true : false} onChange={toggleTheme} />
        </div>
    )
}