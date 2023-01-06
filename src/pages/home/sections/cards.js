import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import HomeCard from "./card";
import { cardItems } from "../info";

const StyledHomeCardsGrid = styled(Grid)(({ theme }) => ({

}));

const StyledCardItem = styled(Grid)(({ theme }) => ({

}));

const HomeCards = () => {
	return (
		<StyledHomeCardsGrid
			container
			spacing={3}
		>
			{
				cardItems.map((el, i) => (
					<StyledCardItem xs={12} sm={12} md={12} lg={6} xl={6} item key={i}>
						<HomeCard data={el}/>
					</StyledCardItem>
				))
			}
		</StyledHomeCardsGrid>
	)
}

export default HomeCards