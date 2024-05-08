import React from 'react'
import BannerImage from "../assests/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg";
import "../styles/Home.css"
function Home() {
  return (
    <div className="home"style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer">
      <p>DISCOVER NEW EXPERIENCE BY.
            EXPLORING SPACE</p>
      </div>
    </div>
  )
}

export default Home
