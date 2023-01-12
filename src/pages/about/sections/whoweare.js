import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "../../../components/ui/titleSubtitle";
import { primaryDefination, definationParagraphs } from "../info"

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg"


const StyledWhoWeAre = styled(Container)(({ theme }) => ({

}));

const definationFontStyles = {
	fontWeight: "bold"
}

const StyledTextStack = styled(Stack)(({ theme }) => ({
	minHeight: "600px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
	minWidth: "200px"
}));

const StyledImageContainer = styled(Grid)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-end"
}));

const imageStyle = {
	height: "600px"
}

const WhoWeAre = () => {
	return (
		<StyledWhoWeAre maxWidth="xl">
			<TitleSubtitle
				title="Who we are"
				subtitle="Lorem Ipsum text place holder"
			/>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
					<StyledTextStack
						direction="column"
						spacing={3}
						alignItems="flex-start"
					>
						<Typography variant="body1" color="text.primary" style={definationFontStyles} >
							Main Defination here {primaryDefination}
						</Typography>
						{
							definationParagraphs.map((el, i) => (
								<Typography variant="body1" color="text.secondary" key={i}>
									{el}
								</Typography>
							))
						}
						<StyledButton variant="contained" color="primary">
							Connect with us
						</StyledButton>
					</StyledTextStack>
				</Grid>
				<StyledImageContainer item xs={12} sm={12} md={12} lg={5} xl={5}>
					<img
						src={image}
						alt="Who we are"
						style={imageStyle}
					/>
				</StyledImageContainer>
			</Grid>
		</StyledWhoWeAre>
	)
}

export default WhoWeAre