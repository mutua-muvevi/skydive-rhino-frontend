import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	height: "100%",
	color: "#fff"
}));

const headerStyles = {
	fontSize: "50px"
}

const subHeaderStyles = {
	fontSize: "30px"
}

const Banner = ({ height, image, title, subtile }) => {
	
	const StyledBanner = styled(Box)(({ theme }) => ({
		height: height ? height: "50vh",
		backgroundImage: `url(${image})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
		marginTop: "-80px"
	}));

	return (
		<StyledBanner>

			<StyledContainer maxWidth="xl">
				<Typography variant="h3" style={headerStyles}>
					{title}
				</Typography>
				<Typography variant="h5" style={subHeaderStyles}>
					{subtile}
				</Typography>
			</StyledContainer>
		</StyledBanner>
	)
}

export default Banner