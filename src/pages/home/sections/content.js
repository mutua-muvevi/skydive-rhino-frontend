import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import HomeCards from "./cards";
import HomeDetails from "./details";

const StyledHomeContent = styled(Grid)(({ theme }) => ({
	height: "70vh",
}))

const HomeContent = () => {
	return (
		<StyledHomeContent
			container
			spacing={3}
			alignItems="flex-end"
		>
			<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
				<HomeDetails/>
			</Grid>

			<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
				<HomeCards/>
			</Grid>
		</StyledHomeContent>
	)
}

export default HomeContent