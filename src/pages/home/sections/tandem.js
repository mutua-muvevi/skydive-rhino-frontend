import { Box, Card, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { tandem } from "./info";


const StyledHomeTandem = styled(Box)(({ theme }) => ({
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

const HomeTandem = () => {
	return (
		<StyledHomeTandem>
			<StyledContainer maxWidth="xl">
				<StyledMainStack direction="column" spacing={3}>
					<Typography variant="h2" color="primary">
						Tandem Jump
					</Typography>
					<div>
						<StyledGrid container spacing={3}>
							<StyledGriditem item xs={12} sm={12} md={12} lg={12} xl={12}>
								<Stack spacing={2}>
									{
										tandem.paragraph.map((el, i) => (
											<Typography variant="body2" color="text.primary" textAlign="justify" key={i}>
												{el}
											</Typography>
										))
									}
								</Stack>
							</StyledGriditem>


							<StyledGriditem item xs={12} sm={12} md={12} lg={12} xl={12}>
								<StyledCard>
									<CardMedia
										component="img"
										src={tandem.image}
										alt="tandem"
										height="100%"
									/>
								</StyledCard>
							</StyledGriditem>
						</StyledGrid>
					</div>
				</StyledMainStack>
			</StyledContainer>
		</StyledHomeTandem>
	)
}

export default HomeTandem