import React from "react"
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

const fetchProject = async (id) => {
	try {
		const response = await fetch(`/api/projects/${id}`)
		console.log(response)
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.error("Error fetching posts:", error)
		return []
	}
}

const ProjectPage = () => {
	const { id } = useParams()
	const [project, setProject] = React.useState()
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		setLoading(true)
		const getProject = async () => {
			const fetchedPosts = await fetchProject(id)
			console.log(fetchedPosts)
			setProject(fetchedPosts)
			setLoading(false)
		}

		getProject()
	}, [])

	if (loading) {
		return <h1>Loading...</h1>
	} else if (project === undefined) {
		return <h1>404: Project not found</h1>
	} else {
		const { title, description, image, content } = project
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
