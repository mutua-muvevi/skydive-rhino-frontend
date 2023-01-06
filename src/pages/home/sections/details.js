import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/styles";

import { socialMediaItems } from "../info";


const StyledHomeDetails = styled(Stack)(({ theme }) => ({

}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "200px",
	color:"#fff",
	borderColor: "#fff"
}));


const StyledIconSection = styled(Stack)(({ theme }) => ({
	width: "200px",
	color:"#fff",
	borderColor: "#fff"
}));


const HomeDetails = () => {
	const theme = useTheme();
	
	const styledHeader = {
		fontSize: "80px",
		fontWeight: "800",
		lineHeight : "60%",
		color:theme.palette.primary.darker
	}
	
	const styledSubHeader = {
		fontSize: "50px",
		marginLeft: "140px",
		color: theme.palette.primary.darker
	}
	
	const styledParagraph = {
		color: theme.palette.primary.darker
	}

	return (
		<StyledHomeDetails spacing={3}>
			<Box>
				<Typography variant="h3"  style={styledHeader}>
					Experience 
				</Typography>
				<Typography variant="h4" style={styledSubHeader}>
					the free
					<span style={{color:"#fff"}}>
						fall
					</span>
				</Typography>
			</Box>

			<Typography variant="subtitle1" style={styledParagraph} gutterBottom>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra placerat lectus vitae vestibulum. Aliquam erat volutpat. Nunc hendrerit enim diam, sit amet scelerisque enim lobortis quis. Nunc egestas, ipsum blandit vulputate tempus, urna lacus pharetra lectus, at molestie neque ligula vitae libero
			</Typography>

			<StyledButton variant="outlined">
				Book now
			</StyledButton>

			<StyledIconSection
				direction="row"
				alignItems="center"
				spacing={3}
			>
				{
					socialMediaItems.map((icon, i) => (
						<Box key={i}>
							{icon.icon}
						</Box>
					))
				}
			</StyledIconSection>
		</StyledHomeDetails>
	)
}

export default HomeDetails