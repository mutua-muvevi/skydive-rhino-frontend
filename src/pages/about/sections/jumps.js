import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { jumpCardContent } from "../info"

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1673035911/skydive%20rhino/videos/pexels-leo-salom-7997309_tzgcig.mp4"

const StyledJumps = styled(Box)(({ theme }) => ({
	minHeight: "75vh",
	background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAChJREFUGFcti8ENADAQgmD/oWm89CMGoygUAsnoXJOh/imNM3dZWwYPx6AOCD6mrOwAAAAASUVORK5CYII=) repeat"
}));

const styledVideo = {
	position: "relative",
	zIndex: -1,
	top: 0,
	left: 0,
	minHeight: "75vh",
	objectFit: "cover",
	
	width: "100%",
}

const StyledContainer = styled(Container)(({ theme }) => ({
	marginTop: "-95vh",
	maxWidth: "100vw !important",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "75vh",
	paddingTop:"30px",
	paddingBottom: "30px"
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

const StyledCard = styled(Card)(({ theme }) => ({
	minWidth: 400,
	width: "80%"
}));

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
	display: "flex"
}));

const Jumps = () => {
	return (
		<StyledJumps>
			<video style={styledVideo} autoPlay loop controls="" muted>
				<source  src={videoLink} type="video/mp4"/>
				<Typography variant="h4">
					Your browser does not support HTML video.
				</Typography>
			</video>
			<StyledContainer maxWidth="xl">
				<StyledStack container spacing={3}>
					{
						jumpCardContent.map((el, i) => (
							<StyledCard key={i}>
								<StyledCardActionArea>
									<CardMedia
										component="img"
										height={300}
										src={el.image}
										alt={el.title}
									/>
									<CardContent>
										<Typography variant="subtitle1" color="text.primary" gutterBottom>
											{el.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{el.text}
										</Typography>
									</CardContent>
								</StyledCardActionArea>
							</StyledCard>
						))
					}
				</StyledStack>
			</StyledContainer>
		</StyledJumps>
	)
}

export default Jumps