import React from "react"
import styled from "styled-components"

const PageContent = styled.div`
	display: flex;
	height: calc(100% - 50px);
	box-sizing: border-box;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const PageBackground = styled.div`
	display: flex;
	height: 100%;
	background-color: var(--primary-bg-color);
	width: 100%;
	align-items: center;
	overflow-y: scroll;
	overflow-x: hidden;
	flex-direction: column;
`

const PageContainer = (props) => {
	return (
		<PageContent>
			<PageBackground>{props.children}</PageBackground>
		</PageContent>
	)
}

export { PageContainer }
