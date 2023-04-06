import './index.css'

const LetestMatch = props => {
  const {details} = props
  const {team, squiedlogo, winning, status} = details

  const statusFont = status === 'Won' ? 'Green' : 'Red'
  return (
    <div className="latest">
      <img className="letestlogo" src={squiedlogo} alt={team} />
      <h1>{team}</h1>

      <p>{winning}</p>
      <p className={statusFont}>{status}</p>
    </div>
  )
}
export default LetestMatch
