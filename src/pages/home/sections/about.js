import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { about } from "./info";

const StyledHomeAbout = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column"
}))

const StyledHomeAboutContainer = styled(Container)(({ theme }) => ({

}))

const StyledAboutSection = styled(Stack)(({ theme }) => ({

}))

const StyledWhySection = styled(Grid)(({ theme }) => ({

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

const HomeAbout = () => {
	return (
		<StyledHomeAbout>
			<StyledHomeAboutContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Typography variant="h2" color="primary">
						Who we are
					</Typography>
					<StyledAboutSection spacing={1.5}>
						{
							about.aboutUs.map((el, i) => (
								<Typography key={i} variant="body2" color="text.primary" textAlign="justify">
									{el}
								</Typography>
							))
						}
					</StyledAboutSection>
					<StyledWhyItems container spacing={3} >
						{
							about.card.map((el, i) => (
								<StyledWhyItems key={i} item xs={12} sm={6} md={6} lg={3} xl={3}>
									<StyledCard sx={{marginLeft:-3, marginRight: 3}}>
										<StyledCardContent>
											<Stack direction="column" spacing={3}>
												<StyledShapeOne/>
												<Typography variant="h2" color="primary" sx={{lineHeight:"20%"}}>
													{el.number}
												</Typography>

												<Box>
													<Typography variant="subtitle1" color="text.primary" >
														{el.title}
													</Typography>
													<Typography variant="body2" color="text.secondary" >
														{el.text}
													</Typography>
												</Box>
												<StyledShapeTwo/>

												<Stack direction="column" spacing={1.5}>

												</Stack>
											</Stack>
										</StyledCardContent>
									</StyledCard>
								</StyledWhyItems>
							))
						}
					</StyledWhyItems>
				</Stack>
			</StyledHomeAboutContainer>
		</StyledHomeAbout>
	)
}

export default HomeAbout