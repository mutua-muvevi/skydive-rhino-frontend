import { Box, Container, Grow, Stack, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";
import { helicopterSkydiving } from "./info";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679653564/skydive%20rhino/images/pexels-pixabay-38447_yvzwe5.jpg"

const StyledHomeTandem = styled(Box)(({ theme }) => ({
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
	backgroundPosition: "center"
}))

const StyledContainer = styled(Container)(({ theme }) => ({

}))

const StyledMainStack = styled(Stack)(({ theme }) => ({

}))
const HomeHelicopter = () => {
	return (
		<StyledHomeTandem>
			<StyledContainer maxWidth="xl">
				<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
					<StyledMainStack spacing={3} direction="column">
						<Typography variant="h2" sx={{color: "#fff"}}>
							Helicopter
						</Typography>
						{
							helicopterSkydiving.paragraph.map((el, i) => (
								<Zoom in timeout={1000 + (i*1000)} key={i}>
									<Typography key={i} textAlign="justify" variant="body1" sx={{color: "#fff"}}>
										{el}
									</Typography>
								</Zoom>
							))
						}
					</StyledMainStack>
				</Grow>
			</StyledContainer>
		</StyledHomeTandem>
	)
}

export default HomeHelicopter