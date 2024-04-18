import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const maxWidth = import.meta.env.VITE_MAX_WIDTH
const title = import.meta.env.VITE_APP_TITLE

const FooterContainer = styled.div`
	z-index: 2;
	display: flex;
	background-color: var(--secondary-bg-color);
	position: fixed;
	top: 0;
	height: 50px;
	width: 100%;
	justify-content: center;
	align-items: center;
`
const FooterNavBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	@media (max-width: ${maxWidth}px) {
		padding-left: 60px;
	}
`

const FooterTitle = styled.h1`
	margin: 20px;
`
const FooterLink = styled(Link)`
	display: flex;
	justify-content: center;
	text-decoration: none;
	margin: 5px;
	padding: 5px;
	width: 60px;
	color: var(--secondary-fg-color);
	@media (max-width: ${maxWidth}px) {
		display: none;
	}
`

const FooterMenuContainer = styled.div`
	display: none;
	@media (max-width: ${maxWidth}px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-self: center;
	}
`

const FooterMenuButton = styled.button`
	display: none;
	@media (max-width: ${maxWidth}px) {
		display: flex;
		max-width: 60px;
		width: 100%;
	}
`

const FooterMenuDropdownContainer = styled.div`
	z-index: 1;
	position: absolute;
	top: 50px;
	left: 0;
	width: 100%;
	background-color: var(--primary-bg-color);
	border: 1px solid var(--secondary-fg-color);
	animation: 0.5s slidein ease-in-out;
	@keyframes slidein {
		from {
			transform: translateY(-150%);
		}
		to {
			transform: translateY(0);
		}
	}
`

const MenuLink = styled(Link)`
	display: none;
	justify-content: center;
	text-decoration: none;
	color: var(--secondary-fg-color);
	margin: 5px;
	padding: 5px;

	@media (max-width: ${maxWidth}px) {
		display: flex;
	}
`

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "50px",
				width: "100%"
			}}
		>
			<FooterContainer>
				<FooterNavBar>
					<FooterLink to="/updates">Updates</FooterLink>
					<FooterLink to="/projects">Projects</FooterLink>
					<FooterTitle>{title}</FooterTitle>
					<FooterLink to="/about">About</FooterLink>
					<FooterLink to="/contact">Updates</FooterLink>
				</FooterNavBar>
				<FooterMenuContainer>
					<FooterMenuButton onClick={toggleMenu}>Menu</FooterMenuButton>
				</FooterMenuContainer>
			</FooterContainer>
			{isOpen && (
				<FooterMenuDropdownContainer>
					<MenuLink to="/updates">Updates</MenuLink>
					<MenuLink to="/projects">Projects</MenuLink>
					<MenuLink to="/about">About</MenuLink>
					<MenuLink to="/contact">Updates</MenuLink>
				</FooterMenuDropdownContainer>
			)}
		</div>
	)
}

export default Footer
