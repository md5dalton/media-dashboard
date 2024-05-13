"use client"

import { useState, useEffect } from 'react'

import "./Toggle.sass"

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
        <div className="
            theme-toggler
            flex items-center mt-8 pt-4 justify-between
            md:mt-0 md:pt-0 md:justify-normal md:border-none
            border-t-2 border-t-dark-grayish-blue dark:border-t-desaturated-blue">
            <label htmlFor="theme">{theme} mode</label>
            <input type="checkbox" id="theme" checked={theme !== altTheme ? true : false} onChange={toggleTheme} />
        </div>
    )
}