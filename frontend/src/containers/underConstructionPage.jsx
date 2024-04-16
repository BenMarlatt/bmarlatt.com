import * as React from "react"
import * as ReactDOM from "react-dom/client"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export default function UnderConstructionPage() {
	return (
		<Container maxWidth="sm">
			<Box
				sx={{
					my: 4,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh"
				}}
			>
				<Typography variant="h4" component="h1" sx={{ mb: 2 }} align="center">
					bmarlatt.com
				</Typography>
				<Typography
					variant="body1"
					component="h2"
					sx={{ mb: 2 }}
					align="center"
				>
					Under Construction
				</Typography>
			</Box>
		</Container>
	)
}

// export default UnderConstructionPage;
