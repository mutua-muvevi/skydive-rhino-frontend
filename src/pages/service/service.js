import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StyledContainer = styled(Container)(({ theme }) => ({
	backgroundColor: "rgba(0,0,0,0.65)",
	paddingTop:"20px",
	paddingBottom:"20px",
	paddingRight:"10px",
	paddingLeft:"10px",
	color: "#fffffff",
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
}))

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const StyledButton = styled(Button)(({ theme }) => ({
	width: "100px",
	color: "#ffffff",
	borderColor: "#ffffff"
}));

const Service = ({service}) => {
	
	const StyledWrapper = styled(Box)(({ theme }) => ({
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${service.image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		position: "fixed"
	}))

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="h2" sx={{color: "#fff", fontFamily: "'Merienda', cursive"}}>
							{service.title}
						</Typography>

						<Link to="/" style={styledLink}>
							<StyledButton variant="outlined">
								Home
							</StyledButton>
						</Link>
					</Stack>

					{
						service && service.content && service.content.paragraph ? service.content.paragraph.map((par, i) => (
							<Typography variant="h5" sx={{color: "#ffffff", fontWeight: "500"}} key={i} textAlign="justify">
								{par}
							</Typography>
						)) : ""
					}
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

const mapStateToProps = ({service}) => ({
	service: service.service
})

export default connect(mapStateToProps)(Service)