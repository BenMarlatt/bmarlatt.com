import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../../components/Header/index.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ButtonBase } from "@mui/material";
import Divider from "@mui/material/Divider";

const Body = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  paddingLeft: "50%",
  borderRadius: "4px",
  background: `url('${props.image}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const Blur = styled("div")({
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "10px",
  paddingLeft: "20px",
  // boxShadow: "inset 0 0 0 2000px rgba(255, 255, 255, 0.5)",
  // backdropFilter: "blur(5px)",
  backgroundColor: "rgb(0 0 0 / 30%)",
  mask: "linear-gradient(to left, black 95%, transparent)",
  transition: "0.5s ease",
  "&:hover": {
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.25)",
  },
});

const Post = ({ title, content, image }) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: 2,
        flexGrow: 1,
        maxWidth: 800,
        height: 400,
      }}
    >
      <Body image={image}>
        <Blur>
          <Grid
            item
            sm={12}
            container
            className={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ p: 2 }}
              className={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{ mb: 2 }}
                align="center"
                textOverflow={"ellipsis"}
              >
                {title}
              </Typography>
              <Typography variant="caption">
                Posted on: {new Date().toLocaleDateString()}
              </Typography>
              <Typography variant="caption">
                Updated on:{new Date().toLocaleDateString()}
              </Typography>
            </Box>
            <Divider width="100%" />
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body2"
                sx={{ mb: 2 }}
                // align="center"
                textOverflow={"ellipsis"}
              >
                {content}
              </Typography>
            </Box>
          </Grid>
        </Blur>
      </Body>
    </Paper>
  );
};

const postList = [
  {
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://source.unsplash.com/random",
  },
  {
    title: "Post 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus. Amet consectetur adipiscing elit ut aliquam purus sit amet. Tellus integer feugiat scelerisque varius. In ante metus dictum at tempor. Risus sed vulputate odio ut enim blandit volutpat. Et tortor at risus viverra adipiscing. Ipsum dolor sit amet consectetur adipiscing elit. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Massa tempor nec feugiat nisl pretium fusce id velit. Est ullamcorper eget nulla facilisi etiam dignissim. Turpis tincidunt id aliquet risus feugiat in. In fermentum et sollicitudin ac orci phasellus egestas. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Malesuada fames ac turpis egestas integer eget aliquet nibh.",
    image:
      "https://randomwordgenerator.com/img/picture-generator/54e7d245485baa14f1dc8460962e33791c3ad6e04e50744172287edc9445c4_640.jpg",
  },
  {
    title: "Post 3",
    content:
      "Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Augue neque gravida in fermentum. Ornare massa eget egestas purus viverra accumsan in nisl. Amet justo donec enim diam. Cras tincidunt lobortis feugiat vivamus at. Sodales neque sodales ut etiam sit amet nisl purus in. Vulputate odio ut enim blandit. Metus dictum at tempor commodo ullamcorper a lacus. Auctor elit sed vulputate mi sit amet mauris commodo. Donec enim diam vulputate ut pharetra sit amet. Lacus vel facilisis volutpat est velit egestas dui id. Amet nisl suscipit adipiscing bibendum. Elit eget gravida cum sociis natoque penatibus et magnis dis. Lobortis mattis aliquam faucibus purus in massa tempor. Tortor condimentum lacinia quis vel. Vel pharetra vel turpis nunc eget lorem. Id faucibus nisl tincidunt eget nullam non nisi est sit. Pharetra vel turpis nunc eget lorem dolor sed. Tellus at urna condimentum mattis pellentesque.",
    image: "https://source.unsplash.com/random",
  },
  {
    title: "Post 4",
    content: "This is the fourth post.",
    image: "https://source.unsplash.com/random",
  },
  {
    title: "Post 5",
    content: "This is the",
    image: "https://source.unsplash.com/random",
  },
];

export default function HomePage() {
  return (
    <div>
      <Header />
      {postList.map((post) => (
        <Post title={post.title} content={post.content} image={post.image} />
      ))}
    </div>
  );
}
