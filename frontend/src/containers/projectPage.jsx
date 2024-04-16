import React from "react"
import data from "../testdata.json"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const ProjectImage = styled.img``
const ProjectTextArea = styled.div``

const ProjectPage = () => {
	const { id } = useParams()
	const project = data.find((project) => project.id == id)

	const { title, description, image, content } = project
	if (project === undefined) {
		return <h1>404: Project not found</h1>
	} else {
		return (
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
				<img src={image} alt={title} />
				{content.map((content, index) => {
					if (content.type === "image") {
						return <ProjectImage key={index} src={content.data} />
					} else if (content.type === "text") {
						return <ProjectTextArea key={index}>{content.data}</ProjectTextArea>
					}
				})}
			</div>
		)
	}
}

export default ProjectPage
