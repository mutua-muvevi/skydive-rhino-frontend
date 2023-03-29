import { Box, Container, Grid, Stack, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";

import { jumpSchool } from "../info";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1679748100/skydive%20rhino/images/jump_school_bbi5jy.jpg"

const StyledHomeJumpSchool = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column",
	backgroundColor: theme.palette.background.paper
}))

const StyledContainer = styled(Container)(({ theme }) => ({
}))

const StyledMainStack = styled(Stack)(({ theme }) => ({

}))

const styledImage = {
	borderRadius: "5px"
}

const StyledGrid = styled(Grid)(({ theme }) => ({

}))

const StyledGridItem = styled(Grid)(({ theme }) => ({

}))

const HomeJumpSchool = () => {
	return (
		<StyledHomeJumpSchool>
			<StyledContainer maxWidth="xl">
				<StyledMainStack spacing={3} direction="column">
					<Typography variant="h2" color="primary">
						Jump school
					</Typography>
					<div>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
								<Stack direction="column" spacing={1.5}>
									{
										jumpSchool.paragraph.map((el, i) => (
											<Zoom in timeout={1000 + (i*1000)} key={i}>
												<Typography textAlign="justify" variant="body2" color="text.primary">
													{el}
												</Typography>
											</Zoom>
										))
									}
								</Stack>
							</Grid>

							<Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
								<Zoom in timeout={2000}>
									<img src={image} alt="Skydive rhino Jumps" style={styledImage}/>
								</Zoom>
							</Grid>
						</Grid>

					</div>

					<div>
						<StyledGrid container spacing={3}>
							{
								jumpSchool.list.map((el, i) => (
									<StyledGridItem item key={i} xs={12} sm={12} md={12} lg={6} xl={6}>
										<Zoom in timeout={3000 + (i*1000)} key={i}>
											<Stack direction="column" spacing={3}>
												<Stack direction="column" spacing={1.5}>
													<Typography variant="h5" color="primary">
														{el.title}
													</Typography>
													<Typography variant="body2" color="text.primary" textAlign="justify">
														{el.paragraph}
													</Typography>
												</Stack>
											</Stack>
										</Zoom>
									</StyledGridItem>
								))
							}
						</StyledGrid>
					</div>
				</StyledMainStack>
			</StyledContainer>
		</StyledHomeJumpSchool>
	)
}

export default HomeJumpSchool