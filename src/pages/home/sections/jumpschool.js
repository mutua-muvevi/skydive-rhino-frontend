import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { jumpSchool } from "../info";

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
					<Stack direction="column" spacing={1.5}>
						{
							jumpSchool.paragraph.map((el, i) => (
								<Typography key={i} textAlign="justify" variant="body2" color="text.primary">
									{el}
								</Typography>
							))
						}
					</Stack>

					<div>
						<StyledGrid container spacing={3}>
							{
								jumpSchool.list.map((el, i) => (
									<StyledGridItem item key={i} xs={12} sm={12} md={12} lg={6} xl={6}>
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