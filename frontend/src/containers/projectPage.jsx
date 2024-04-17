import React from "react"
import data from "../testdata.json"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { PageContainer } from "../components/pageContainer"

const ProjectImage = styled.img`
	width: 100%;
	margin: 10px;
	overflow-x: hidden;
	max-height: 600px;
	object-fit: contain;
`
const ProjectTextArea = styled.p`
	margin: 10px;
	border-radius: 10px;
	box-shadow: 0 0 5px 0 black;
	background-color: var(--secondary-bg-color);
	padding: 5px;
`

const ProjectContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 75%;
`

const ProjectPage = () => {
	const { id } = useParams()
	const project = data.find((project) => project.id == id)

	const { title, description, image, content } = project
	if (project === undefined) {
		return <h1>404: Project not found</h1>
	} else {
		return (
			<PageContainer>
				<ProjectContent>
					<h1>{title}</h1>
					<ProjectTextArea>{description}</ProjectTextArea>
					<ProjectImage src={image} alt={title} />
					{content.map((content, index) => {
						if (content.type === "image") {
							return <ProjectImage key={index} src={content.data} />
						} else if (content.type === "text") {
							return (
								<ProjectTextArea key={index}>{content.data}</ProjectTextArea>
							)
						}
					})}
				</ProjectContent>
			</PageContainer>
		)
	}
}

export default ProjectPage
