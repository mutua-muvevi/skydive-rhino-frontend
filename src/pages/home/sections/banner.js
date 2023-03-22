import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047336/skydive%20rhino/images/kamil-pietrzak-H22w-tq0SeQ-unsplash_cn6hbi.jpg"

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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pellentesque leo. Quisque ac rutrum leo. Curabitur vulputate feugiat sapien, sed accumsan nisi ultrices non. Proin quis suscipit nisi. Praesent a enim eget sem maximus malesuada. Maecenas ut tempor arcu, quis pharetra ipsum. Nullam vel justo luctus, feugiat est at, ultrices mauris. Ut malesuada odio ac dui tempus convallis sed eget nulla. Integer et justo tellus. Sed pretium ut nulla ac congue
					</Typography>
					<StyledButton variant="contained" color="primary">
						Explore More
					</StyledButton>
				</StyledBannerItemsStack>
			</StyledContainer>
		</StyledHomeBanner>
	)
}

export default HomeBanner