import { Box, Card, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { wingsuit } from "./info";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679652728/skydive%20rhino/images/wingsuit_ckwvdc.jpg"

const StyledHomeWingsuit = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column"
}))

const StyledContainer = styled(Container)(({ theme }) => ({

}))

const StyledMainStack = styled(Stack)(({ theme }) => ({

}))

const StyledGrid = styled(Grid)(({ theme }) => ({

}))

const StyledGriditem = styled(Grid)(({ theme }) => ({

}))

const StyledCard = styled(Card)(({ theme }) => ({
	minHeight: "400px"
}));

const HomeWingsuit = () => {
	return (
		<StyledHomeWingsuit>
			<StyledContainer maxWidth="xl">
				<StyledMainStack direction="column" spacing={3}>
					<Typography variant="h2" color="primary">
						Wingsuit Jump
					</Typography>
					<div>
						<StyledGrid container spacing={3}>
							<StyledGriditem item xs={12} sm={12} md={12} lg={6} xl={6}>
								<StyledCard>
									<CardMedia
										component="img"
										src={image}
										alt="wingsuit"
										height="100%"
									/>
								</StyledCard>

							</StyledGriditem>
							<StyledGriditem item xs={12} sm={12} md={12} lg={6} xl={6}>
								<Stack spacing={2}>
									{
										wingsuit.paragraph.map((el, i) => (
											<Typography variant="body2" color="text.primary" textAlign="justify" key={i}>
												{el}
											</Typography>
										))
									}
								</Stack>
							</StyledGriditem>

						</StyledGrid>
					</div>
				</StyledMainStack>
			</StyledContainer>
		</StyledHomeWingsuit>
	)
}

export default HomeWingsuit