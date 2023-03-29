import { Box, Container, Grid, Stack, Typography, Zoom } from "@mui/material";
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


const styledImage = {
	borderRadius: "5px"
}


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
							<StyledGriditem item xs={12} sm={12} md={12} lg={7} xl={7}>
								<Stack spacing={2}>
									{
										tandem.paragraph.map((el, i) => (
											<Zoom in timeout={1000 + (i*1000)}>
												<Typography variant="body2" color="text.primary" textAlign="justify" key={i}>
													{el}
												</Typography>
											</Zoom>
										))
									}
								</Stack>
							</StyledGriditem>


							<StyledGriditem item xs={12} sm={12} md={12} lg={5} xl={5}>
								<Zoom in timeout={1500}>
									<img src={tandem.image} alt="Skydive rhino Tandem jump" style={styledImage}/>
								</Zoom>
							</StyledGriditem>
						</StyledGrid>
					</div>
				</StyledMainStack>
			</StyledContainer>
		</StyledHomeTandem>
	)
}

export default HomeTandem