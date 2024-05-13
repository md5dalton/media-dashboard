export default ({ username, platform, followers, change }) => (
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
            <img className="caret" alt="change caret" src={`images/icon-${change < 0 ? "down" : "up"}.svg`} />
            <span>{`${Math.abs(change)} Today`}</span>
          </div>
    </div>
)