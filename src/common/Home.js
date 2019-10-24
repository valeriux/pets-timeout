import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight" style={{backgroundImage: 'url(media/dessert-1.jpg)'}}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <hr className='top' />
            <h1 className="">Pets Timeout</h1>
            <hr className="bottom"/>
            <h1 className="IntroductionText">Welcome</h1>
          </div>
        </div>
      </section>


    )
  }
}

export default Home
