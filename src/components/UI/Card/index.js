import React from 'react'

import './styles.sass'

const LargeCard = ({ username, platform, followers, change }) => (
    <div className={`card large ${platform}`}>
        <div className="user">
            <img src={`images/icon-${platform}.svg`} alt={platform} />
            <span className="username">{username}</span>
          </div>
          <div className="followers">
            <div className="count">{followers}</div>
            <div className="text">followers</div>
          </div>
          <div className={`change${change < 0 ? " down" : ""}`}>
            <img className="caret" src={`images/icon-${change < 0 ? "down" : "up"}.svg`} />
            <span>{`${Math.abs(change)} Today`}</span>
          </div>
    </div>
)

const SmallCard = ({ param, platform, count, change }) => (
    <div className="card small">
        <div className="param">{param}</div>
        <img className="platform-icon" src={`images/icon-${platform}.svg`} alt={platform} />
        <div className="count">{count}</div>
        <div className={`change${change < 0 ? " down" : ""}`}>
          <img className="caret" src={`images/icon-${change < 0 ? "down" : "up"}.svg`} />
          <span>{`${Math.abs(change)} Today`}</span>
        </div>
    </div>
)

export { SmallCard, LargeCard}