import React from 'react'
import Toggle from './Toggle'

import './styles.sass'

export default () => (
    <header>
        <div className="title">
            <h1>Social Media Dashboard</h1>
            <div>Total followers: 23,005</div>
        </div>
        <Toggle />
    </header>
)