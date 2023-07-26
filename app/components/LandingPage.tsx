import Image from 'next/image'

function LandingPage() {
  return (
    <main className="overflow-hidden" id="landing-main">
      <div className="flex-column container">
        <header>
          <h1 className="main-title">Social Media Site</h1>
          <h2 className="secondary-title">Share your favorite images with your friends!</h2>
        </header>
        <section id="login">
          <h3 className="secondary-title">Login</h3>
          <form id="login-form" className="flex-column">
            <div className="form-item">
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" name="username"></input>
            </div>
            <div className="form-item">
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" name="password"></input>
            </div>
          </form>
        </section>
      </div>
      <div className="landing-image" style={{maxHeight: '100%', maxWidth: '50%'}}>
        <Image id="landing-image" src="/pexels-marek-339379.jpg" alt="camera" width={100} height={50} objectFit="contain" layout="responsive"/>
      </div>
    </main>
  )
}

export default LandingPage

