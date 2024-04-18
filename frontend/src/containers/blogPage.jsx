import React from "react"
import styled from "styled-components"
import PostComponent from "../components/postComponent"
import { PageContainer } from "../components/pageContainer"

import posts from "../testdata.json"

const maxWidth = import.meta.env.VITE_MAX_WIDTH

const PostRowContainer = styled.div`
	display: flex;
	width: 75%;
	@media (max-width: ${maxWidth}px) {
		flex-direction: column;
		transition: all 0.5s;
	}
`

const BlogPage = () => {
	return (
		<PageContainer>
			{posts.map((post, index) => {
				const isOdd = index % 2 !== 0
				if (posts.length - 1 === index && !isOdd) {
					console.log(post)
					return (
						<PostRowContainer>
							<PostComponent
								style={{
									width: "calc(50% - 20px)"
								}}
								post={post}
							/>
						</PostRowContainer>
					)
				} else if (!isOdd && posts.length - 1 !== index) {
					return (
						<PostRowContainer>
							<PostComponent post={post} />
							<PostComponent post={posts[index + 1]} />
						</PostRowContainer>
					)
				}
				return null
			})}
		</PageContainer>
	)
}

export default BlogPage
