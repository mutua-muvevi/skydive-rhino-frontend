import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679652035/skydive%20rhino/images/IMG_20230201_145259_013_posegl.jpg"

const StyledHomeBanner = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${image})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundAttachment: "fixed",
	backgroundRepeat: "no-repeat"
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingBottom: "20px",
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "left",
}))

const StyledBannerItemsStack = styled(Stack)(({ theme }) => ({

}))

const titlesFont = {
	color: "#fff"
}

const StyledButton = styled(Button)(({ theme }) => ({
	maxWidth: "200px"
}))

const HomeBanner = () => {
	return (
		<StyledHomeBanner>
			<StyledContainer maxWidth="xl">
				<StyledBannerItemsStack direction="column" spacing={3}>
					<Typography variant="h2" style={titlesFont}>
						Skydive Rhino
					</Typography>
					<Typography variant="subtitle1" style={titlesFont} textAlign="justify">
						Welcome to Sky Dive Rhino Kenya, where we provide a one-of-a-kind skydiving experience that is safe, exciting, and unforgettable. Our team of experienced instructors will guide you through every step of the process, from your initial jump to your landing. We use state-of-the-art equipment and the latest safety protocols to ensure a smooth and enjoyable experience for our customers. Our unique location in the heart of Kenya, and our MAULE planes, allow us to take you to some of the most remote and beautiful locations, where you can experience the thrill of skydiving with a breathtaking view. Join us and feel the rush of adrenaline as you free fall from thousands of feet above the ground, and soar like a bird, while enjoying the beautiful views of Kenya. Book your skydiving experience today and make memories that will last a lifetime.
					</Typography>
				</StyledBannerItemsStack>
			</StyledContainer>
		</StyledHomeBanner>
	)
}

export default HomeBanner