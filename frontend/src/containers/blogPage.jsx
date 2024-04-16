import React from "react"
import styled from "styled-components"
import PostComponent from "../components/postComponent"

import posts from "../testdata.json"

const maxWidth = 768

const PostColumnContainer = styled.div`
	display: flex;
	height: 100%;
	background-color: var(--primary-bg-color);
	width: 100%;
	align-items: center;
	overflow-y: scroll;
	flex-direction: column;
`

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
		<div
			style={{
				display: "flex",
				height: "calc(100% - 50px)",
				boxSizing: "border-box",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<PostColumnContainer>
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
			</PostColumnContainer>
		</div>
	)
}

export default BlogPage
