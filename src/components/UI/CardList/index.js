import React from 'react'

import './styles.sass'

export default props => (
    <div className="list">{props.items.map(props.itemHandler)}</div>
)