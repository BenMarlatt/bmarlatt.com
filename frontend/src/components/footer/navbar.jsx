import React, { useState } from "react"
import { Link } from "react-router-dom"

const MenuBar = () => {
	return <div>my menu</div>
}

const NavBarLinks = () => {
	return (
		<>
			<Link to="/about">About</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/updates">Updates</Link>
		</>
	)
}

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div className="flex w-1/3 justify-end">
				<div className="hidden w-full justify-between md:flex">
					<NavBarLinks />
				</div>
				<div className="md:hidden">
					<button onClick={toggleMenu}>
						{isOpen ? <div>X</div> : <MenuBar />}
					</button>
				</div>
			</div>
			{isOpen && (
				<div className="flex basis-full flex-col items-center">
					<NavBarLinks />
				</div>
			)}
		</>
	)
}

export default NavBar
