import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import HomeContent from "./sections/content";

import HomeNav from "./sections/nav";

const StyledHomepage = styled(Box)(({ theme }) => ({
	backgroundColor: "rgba(0, 130, 255, 0.17)"
}));

const StyledHomeContainer = styled(Container)(({ theme }) => ({
}));

const styledVideo = {
	position: "absolute",
	zIndex: -1,
	top: 0,
	left: 0,
	height: "100vh",
	objectFit: "cover",
	
	width: "100vw",
}

const StyledPageContent = styled(Stack)(({ theme }) => ({
	height: "100vh",
}))

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1673035911/skydive%20rhino/videos/pexels-leo-salom-7997309_tzgcig.mp4"

const Homepage = () => {
	return (
		<StyledHomepage >
			<StyledHomeContainer maxWidth="xl">
				<StyledPageContent direction="column" spacing={3}>
					<HomeNav/>
					<HomeContent/>
				</StyledPageContent>
			</StyledHomeContainer>

			<video style={styledVideo} autoPlay loop controls="" muted>
				<source  src={videoLink} type="video/mp4"/>
				<Typography variant="h4">
					Your browser does not support HTML video.
				</Typography>
			</video>
		</StyledHomepage>
	)
}

export default Homepage