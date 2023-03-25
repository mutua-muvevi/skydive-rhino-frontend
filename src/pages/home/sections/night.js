import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { nightSkydiving } from "./info";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679747514/skydive%20rhino/images/nightskydive-transformed_a1entz.jpg";

const StyledHomeNight = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column",
	backgroundColor: theme.palette.background.paper
}))

const StyledContainer = styled(Container)(({ theme }) => ({
}))

const StyledMainStack = styled(Stack)(({ theme }) => ({
}));


const styledImage = {
	borderRadius: "5px"
}


const HomeNight = () => {
	return (
		<StyledHomeNight>
			<StyledContainer maxWidth="xl">
				<StyledMainStack spacing={3} direction="column">
					<Typography variant="h2" color="primary">
						Night time skydiving
					</Typography>
					<Stack direction="column" spacing={1.5}>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
									{
										nightSkydiving.paragraph.map((el, i) => (
											<Typography key={i} textAlign="justify" variant="body2" color="text.primary">
												{el}
											</Typography>
										))
									}
								</Grid>
									
								<Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
									<img src={image} alt="Skydive rhino Jumps" style={styledImage}/>
								</Grid>
							</Grid>
						</div>
					</Stack>
				</StyledMainStack>
			</StyledContainer>
		</StyledHomeNight>
	)
}

export default HomeNight