import { Box, Container, Grid, Stack, Typography, } from "@mui/material";
import { styled } from "@mui/system";

import { whyUs } from "./info";

const StyledHomeWhyUs = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column",
	backgroundColor: theme.palette.background.paper
}));


const StyledShapeOne = styled(Box)(({ theme }) => ({
	position: "absolute",
	clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
	backgroundColor: "rgba(255, 231, 0, 0.3)",
	width: "150px",
	height: "150px",
	zIndex:0,
	right: "5vw",
}))

const StyledMainStack = styled(Stack)(({ theme }) => ({

}))

const StyledGrid = styled(Grid)(({theme}) => ({
	
}))

const StyledGridItem = styled(Grid)(({theme}) => ({

}))

const HomeWhyUs = () => {
	return (
		<StyledHomeWhyUs>
			<Container maxWidth='xl'>
				<StyledShapeOne/>
				<StyledMainStack direction="column" spacing={3}>
					<Typography variant="h2" color="primary">
						Why us
					</Typography>

					<div>
						<StyledGrid container spacing={3}>
							{
								whyUs.map((el, i) => (
									<StyledGridItem key={i} item xs={12} sm={12} md={6} lg={4} xl={4}>
										<Stack direction="column" spacing={1.5}>
											{el.icon}
											<Typography variant="h5" color="primary">
												{el.title}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{el.text}
											</Typography>
										</Stack>
									</StyledGridItem>
								))
							}
						</StyledGrid>
					</div>
				</StyledMainStack>
			</Container>
		</StyledHomeWhyUs>
	)
}

export default HomeWhyUs