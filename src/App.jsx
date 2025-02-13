import React, { Component } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Hero />
				<About />
				<Services />
				<Tours />
				<Footer />
			</React.Fragment>
		)
	}
}
