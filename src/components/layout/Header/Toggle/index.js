import React, { useState, useEffect } from 'react'

import './styles.sass'

export default () => {
    
    const defaultTheme = "light"

    const getTheme = () => localStorage.getItem("theme")

    const [ theme, setTheme ] = useState(getTheme())
    
    const toggleTheme = () => {

        const theme = getTheme()

        let newTheme = theme !== defaultTheme ? defaultTheme : "dark"  
        if (!theme) newTheme = "dark"
        
        localStorage.setItem("theme", newTheme)

        setTheme(newTheme)

    }

    useEffect(() => {
        document.body.classList.remove(defaultTheme, "dark")
        if (theme) document.body.classList.add(theme)
    })

    return (
        <div className="toggle">
            <label htmlFor="theme">{theme || defaultTheme} mode</label>
            <input type="checkbox" id="theme" checked={theme === "dark" ? true : false} onChange={toggleTheme} />
        </div>
    )
}