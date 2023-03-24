import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { nightSkydiving } from "./info";

const StyledHomeNight = styled(Box)(({ theme }) => ({
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

}));

const HomeNight = () => {
	return (
		<StyledHomeNight>
			<StyledContainer maxWidth="xl">
				<StyledMainStack spacing={3} direction="column">
					<Typography variant="h2" color="primary">
						Night time skydiving
					</Typography>
					<Stack direction="column" spacing={1.5}>
						{
							nightSkydiving.paragraph.map((el, i) => (
								<Typography key={i} textAlign="justify" variant="body2" color="text.primary">
									{el}
								</Typography>
							))
						}
					</Stack>
				</StyledMainStack>
			</StyledContainer>
		</StyledHomeNight>
	)
}

export default HomeNight