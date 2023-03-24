import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { photographyAndVideography } from "../info";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679655247/skydive%20rhino/images/videography-transformed_uiyrb8.jpg"

const StyledHomePhotography = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column",
}))

const StyledMainStack = styled(Stack)(({ theme }) => ({

}))

const StyledGrid = styled(Grid)(({ theme }) => ({

}))

const StyledGridItem = styled(Grid)(({ theme }) => ({

}))

const imageStyle = {
	borderRadius: "5px",
	// height: "200px"
}

const HomePhotography = () => {
	return (
		<StyledHomePhotography>
			<Container maxWidth="xl">
				<StyledMainStack spacing={3} direction="column">

					<Typography variant="h2" color="primary">
						Photography and videography
					</Typography>
					
					<div>
						<StyledGrid container spacing={3}>
							<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
								<Stack direction="column" spacing={1.5}>
									{
										photographyAndVideography.paragraph.map((el, i) => (
											<Typography key={i} textAlign="justify" variant="body2" color="text.primary">
												{el}
											</Typography>
										))
									}
								</Stack>
							</StyledGridItem>

							<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
								<img src={image} alt="Photography and videography" style={imageStyle}/>
							</StyledGridItem>
						</StyledGrid>
					</div>
				</StyledMainStack>
			</Container>
		</StyledHomePhotography>
	)
}

export default HomePhotography