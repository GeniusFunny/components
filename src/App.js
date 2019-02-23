import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ModalExample from './components/Modal/ModalExample'
import SwiperExample from './components/Swiper/SwiperExample'
import './App.scss'
const App = () => (
  <Router>
    <main className="App">
      <nav className="App-navigation">
        <h2>
          Menu
        </h2>
        <li>
          <Link to={'/home'}>Home</Link>
        </li>
        <li>
          <Link to={'/components'}>Components</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </nav>
      <Route path={'/home'} component={Home}/>
      <Route path={'/components'} component={Components}/>
      <Route path={'/about'} component={About}/>
    </main>
  </Router>
)
const Components = ({match}) => (
  <section className={'App-content'}>
    <h2>Components</h2>
    <ul>
      <li>
        <Link to={`${match.url}/modal`}>Modal</Link>
      </li>
      <li>
        <Link to={`${match.url}/swiper`}>Swiper</Link>
      </li>
    </ul>
    <Route path={`${match.url}/modal`} component={ModalExample}/>
    <Route path={`${match.url}/swiper`} component={SwiperExample}/>
  </section>
)
const Home = () => (
  <section className={'App-content'}>
    <h2 className={'App-content-title'}>Home</h2>
  </section>
)
const About = () => (
  <section className={'App-content'}>
    <h2>About</h2>
  </section>
)
export default App
