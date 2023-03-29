import { Box, Container, Grow, Stack, Typography, Zoom } from "@mui/material";
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

const Banner = ({ height, image, title, subtitle, text, position, paragraph }) => {
	
	const StyledBanner = styled(Box)(({ theme }) => ({
		height: height ? height: "50vh",
		backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${image})`,
		backgroundPosition: position ? position : "center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
		paddingTop: "30px",
		paddingBottom: "30px"
	}));

	return (
		<StyledBanner>
				<StyledContainer maxWidth="xl">
					<Stack spacing={1.5}>
						<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
							<Typography variant="h3" style={headerStyles}>
								{title}
							</Typography>
						</Grow>

						<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1500}>
							<Typography variant="h5" style={subHeaderStyles}>
								{subtitle ? text: null}
							</Typography>
						</Grow>
						<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1500}>
							<Typography variant="body1">
								{text ? text: null}
							</Typography>
						</Grow>
						<Stack direction="column" spacing={1.5}>
							{
								paragraph ? paragraph.map((el, i) => (
									<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1500 + (i * 1000)}>
										<Typography variant="body1">
											{el}
										</Typography>
									</Grow>
								)) : ""
							}
						</Stack>
					</Stack>
				</StyledContainer>
		</StyledBanner>
	)
}

export default Banner