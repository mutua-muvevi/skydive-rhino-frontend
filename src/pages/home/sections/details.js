import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/styles";
import * as styles from "@mui/styles"

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
		// color:theme.palette.primary.darker
	}
	
	const styledSubHeader = {
		fontSize: "50px",
		marginLeft: "140px",
		// color: theme.palette.primary.darker
	}
	
	const styledParagraph = {
		// color: theme.palette.primary.darker
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
					{console.log(styles)}
				</Typography>
			</Box>

			<Typography variant="subtitle1" style={styledParagraph} gutterBottom>
				Welcome to Sky Dive Rhino Kenya, where we provide a one-of-a-kind skydiving experience that is safe, exciting, and unforgettable. Our team of experienced instructors will guide you through every step of the process, from your initial jump to your landing. We use state-of-the-art equipment and the latest safety protocols to ensure a smooth and enjoyable experience for our customers. Our unique location in the heart of Kenya, and our MAULE planes, allow us to take you to some of the most remote and beautiful locations, where you can experience the thrill of skydiving with a breathtaking view. Join us and feel the rush of adrenaline as you free fall from thousands of feet above the ground, and soar like a bird, while enjoying the beautiful views of Kenya. Book your skydiving experience today and make memories that will last a lifetime.
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