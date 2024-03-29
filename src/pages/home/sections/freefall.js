import { Box, Container, Stack, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";
import { freefall } from "./info";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679650180/skydive%20rhino/images/IMG_20230125_180933_434_czvrff.jpg"

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
const HomeFreefall = () => {
	return (
		<StyledHomeTandem>
			<StyledContainer maxWidth="xl">
				<StyledMainStack spacing={3} direction="column">
					<Typography variant="h2" sx={{color: "#fff"}}>
						Freefall
					</Typography>
					{
						freefall.paragraph.map((el, i) => (
							<Zoom key={i} in timeout={1000 + (i*500)}>
								<Typography key={i} textAlign="justify" variant="body1" sx={{color: "#fff"}}>
									{el}
								</Typography>
							</Zoom>
						))
					}
				</StyledMainStack>
			</StyledContainer>
		</StyledHomeTandem>
	)
}

export default HomeFreefall