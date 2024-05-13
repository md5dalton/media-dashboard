export default ({ param, platform, count, change }) => (
    <div className="card small">
        <div className="param">{param}</div>
        <img className="platform-icon" src={`images/icon-${platform}.svg`} alt={platform} />
        <div className="count">{count}</div>
        <div className={`change${change < 0 ? " down" : ""}`}>
          <img className="caret" alt="change caret" src={`images/icon-${change < 0 ? "down" : "up"}.svg`} />
          <span>{`${Math.abs(change)} Today`}</span>
        </div>
    </div>
)