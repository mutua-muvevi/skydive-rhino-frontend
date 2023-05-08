import { Box, Container, Grid, Grow, Stack, Typography, Zoom, } from "@mui/material";
import { styled } from "@mui/system";

import { whyUs } from "./info";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1679998802/skydive%20rhino/images/paragliding_hdbsz8.jpg"

const StyledWhyUs = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${image})`,
	backgroundSize: "cover",
	backgroundAttachment: "fixed",
	backgroundRepeat:"no-repeat",
	backgroundPosition: "center",
	color: "#fff"
}));


const StyledShapeOne = styled(Box)(({ theme }) => ({
	position: "absolute",
	clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
	backgroundColor: "rgba(255, 231, 0, 0.3)",
	width: "150px",
	height: "150px",
	zIndex:0,
	right: "5vw",
}))

const StyledMainStack = styled(Stack)(({ theme }) => ({

}))

const StyledGrid = styled(Grid)(({theme}) => ({
	
}))

const StyledGridItem = styled(Grid)(({theme}) => ({

}))

const StyledIconBox = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	width: "70px",
	height: "70px",
	backgroundColor: theme.palette.secondary.main,
	color: "#fff",
	borderRadius: "50%"
}))

const WhyUs = () => {
	return (
		<StyledWhyUs>
			<Container maxWidth='xl'>
				<StyledShapeOne/>
				<StyledMainStack direction="column" spacing={3}>
					<Typography variant="h2">
						Why us
					</Typography>

					<div>
						<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
							<StyledGrid container spacing={3}>
								{
									whyUs.map((el, i) => (
										<StyledGridItem key={i} item xs={12} sm={12} md={6} lg={4} xl={4}>
											<Zoom in timeout={1000 + (i * 1000)}>
												<Stack direction="column" spacing={1.5}>
													<StyledIconBox>
														{el.icon}
													</StyledIconBox>
													<Typography variant="h4" textAlign="justify">
														{el.title}
													</Typography>
													<Typography variant="body2" textAlign="justify">
														{el.text}
													</Typography>
												</Stack>
											</Zoom>
										</StyledGridItem>
									))
								}
							</StyledGrid>
						</Grow>
					</div>
				</StyledMainStack>
			</Container>
		</StyledWhyUs>
	)
}

export default WhyUs