import { Box, Button, Card, CardContent, Container, Grid, Grow, Stack, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";

import { about } from "./info";
import { Link } from "react-router-dom";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679749553/skydive%20rhino/images/IMG_20230126_072246_564_voxwjd.jpg";

const StyledHomeAbout = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column",
	backgroundColor: "#fff"
}))

const StyledHomeAboutContainer = styled(Container)(({ theme }) => ({

}))

const styledImage = {
	borderRadius: "5px"
}


const StyledAboutSection = styled(Stack)(({ theme }) => ({

}))

const StyledWhyItems = styled(Grid)(({ theme }) => ({

}))

const StyledCard = styled(Card)(({ theme }) => ({

}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}))

const StyledShapeOne= styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral,
	borderRadius: "50%",
	width: "300px",
	height: "300px",
	position: "absolute",
	left: "-15vw",
	top:"-5vh",
	zIndex:-3
}))

const StyledShapeTwo= styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	width: "70px",
	height: "250px",
	position: "absolute",
	right: "-1vw",
	top:"2vh",
	transform: "skew(-40deg)",
	zIndex:-3
}))

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const HomeAbout = () => {
	return (
		<StyledHomeAbout>
			<StyledHomeAboutContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Typography variant="h2" color="primary">
							Who we are
						</Typography>
					</Grow>
					<div>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
								<StyledAboutSection spacing={1.5}>
									{
										about.aboutUs.map((el, i) => (
											<Grow key={i}  style={{ transformOrigin: '10 20 50' }} in timeout={1500 + (i *500)}>
												<Typography variant="body2" color="text.primary" textAlign="justify">
													{el}
												</Typography>
											</Grow>
										))
									}
									<Link to="/landing/about" style={styledLink}>
										<Button variant="contained" color="primary">
											View more
										</Button>
									</Link>
								</StyledAboutSection>					
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
								<Zoom in timeout={1500}>

								<img src={image} alt="Skydive rhino staff" style={styledImage}/>
								</Zoom>
							</Grid>
						</Grid>
					</div>
				</Stack>
			</StyledHomeAboutContainer>
		</StyledHomeAbout>
	)
}

export default HomeAbout