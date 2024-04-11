import React from "react";
import Header from "../../components/Header/index.tsx";
import styled from "styled-components";
import PostComponent from "./postComponent.jsx";

const maxWidth = 768;

const PostColumnContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: var(--main-bg-color);
  width: 100%;
  align-items: center;
  overflow-y: scroll;
  flex-direction: column;
`;

const PostRowContainer = styled.div`
  display: flex;
  width: 75%;
  @media (max-width: ${maxWidth}px) {
    flex-direction: column;
    transition: all 0.5s;
  }
`;

const posts = [
  {
    title: "DAISY IS GOING POTTY BRB 1a",
    content:
      "DAISY IS GOING POTTY BRB 1b. This is the first post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc.",
  },
  {
    title: "DAISY IS GOING POTTY BRB 2a",
    content:
      "DAISY IS GOING POTTY BRB 2b. This is the second post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc.",
  },
  {
    title: "DAISY IS GOING POTTY BRB 3a",
    content:
      "DAISY IS GOING POTTY BRB 3b. This is the third post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc.",
  },
  {
    title: "DAISY IS GOING POTTY BRB 4a",
    content:
      "DAISY IS GOING POTTY BRB 4b. This is the fourth post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc.",
  },
  {
    title: "DAISY IS GOING POTTY BRB 5asssssssssssssssssssssssssssssssssssss",
    content:
      "DAISY IS GOING POTTY BRB 5b. This is the fifth post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc. Sed euismod, mauris id aliquet lacinia, mauris nunc tincidunt nunc, non tincidunt nisl elit a nunc.",
  },
];

const BlogPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          height: "calc(100% - 68.5px)",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PostColumnContainer>
          {posts.map((post, index) => {
            const isOdd = index % 2 !== 0;
            if (posts.length - 1 === index && !isOdd) {
              return (
                <PostRowContainer>
                  <PostComponent
                    style={{
                      width: "calc(50% - 20px)",
                    }}
                    title={post.title}
                    content={post.content}
                  />
                </PostRowContainer>
              );
            } else if (!isOdd && posts.length - 1 !== index) {
              return (
                <PostRowContainer>
                  <PostComponent title={post.title} content={post.content} />
                  <PostComponent
                    title={posts[index + 1].title}
                    content={posts[index + 1].content}
                  />
                </PostRowContainer>
              );
            }
            return null;
          })}
        </PostColumnContainer>
      </div>
    </div>
  );
};

export default BlogPage;
