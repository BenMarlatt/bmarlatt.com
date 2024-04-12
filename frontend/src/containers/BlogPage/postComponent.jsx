import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const maxWidth = 768

const PostContainer = styled.div`
  display: flex;

  width: 50%;
  height: 350px;
  word-break: break-word;

  @media (max-width: ${maxWidth}px) {
    width: 100%;
  }
  .zoom
`

const PostBackground = styled.div`
	display: flex;
	font-size: 12px;
	margin: 10px;
	width: 100%;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	text-align: center;
	font-family: "Arial", sans-serif;
	flex-direction: column;
	background-image: url("https://source.unsplash.com/random");
	background-size: cover;
	background-position: top right; // Position the background image in the center of the div
	background-repeat: no-repeat;
`

const PostBlur = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	justify-content: right;
	mask: linear-gradient(
		to right,
		rgba(2, 0, 36, 0) 0%,
		rgba(0, 0, 0, 0) 40%,
		var(--secondary-bg-color) 45%
	);
	background-color: var(--secondary-bg-color);
	transition: 0.5s ease;
	&:hover {
		box-shadow: inset 0 0 0 2000px rgba(64, 64, 64, 0.35);
	}
`

const PostContent = styled.div`
	display: flex;
	width: calc(55% - 10px);
	flex-direction: column;
	padding: 10px;
`

const PostHeader = styled.p`
	display: flex;
	font-size: 12px;
	margin: 0;

	align-items: right;
	justify-content: right;
`

const PostTitle = styled.h1`
	font-size: 24px;
	font-weight: 600;
	margin: 10px;
`

const PostBody = styled.p`
	font-size: 16px;
`

const PostComponent = ({ title, content }) => {
	if (!title) {
		return <PostContainer />
	}
	return (
		<PostContainer>
			<PostBackground>
				<Link style={{ width: "100%", height: "100%" }} to="/">
					<PostBlur>
						<PostContent>
							<div>
								<PostHeader>Created: 2020-02-01 Updated: 2020-02-03</PostHeader>
							</div>
							<div>
								<PostTitle>{title}</PostTitle>
								<PostBody>{content}</PostBody>
							</div>
						</PostContent>
					</PostBlur>
				</Link>
			</PostBackground>
		</PostContainer>
	)
}

export default PostComponent
