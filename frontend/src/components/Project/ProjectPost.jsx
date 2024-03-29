import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();
const ProjectPost = ({ title_text, title_image, opening, body }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="flex py-24 md:py-32">
        <div className="mx-auto">
          <h2 className="flex-none w-2/3">{title_text}</h2>
          <img className="flex-none w-1/3" src={title_image} alt="" />
        </div>
        <p>{opening}</p>
        {body.map(({ sub_head, content, images }) => (
          <div>
            <h3>{sub_head}</h3>
            <p>{content}</p>
            {images.map((image) => (
              <img src={image} alt="" />
            ))}
          </div>
        ))}
      </div>
    </ThemeProvider>
  );

  //   return (
  //     <div className="flex py-24 md:py-32">
  //       <div className="mx-auto">
  //         <h2 className="flex-none w-2/3">{title_text}</h2>
  //         <img className="flex-none w-1/3" src={title_image} alt="" />
  //       </div>
  //       <p>{opening}</p>
  //       {body.map(({ sub_head, content, images }) => (
  //         <div>
  //           <h3>{sub_head}</h3>
  //           <p>{content}</p>
  //           {images.map((image) => (
  //             <img src={image} alt="" />
  //           ))}
  //         </div>
  //       ))}
  //     </div>
  //   );
};

export default ProjectPost;
