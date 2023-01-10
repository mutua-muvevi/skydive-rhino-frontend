import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { navItem } from "../info";
import { NavLink } from "react-router-dom";

const StyledHomeNav = styled(Stack)(({ theme }) => ({
	paddingTop: "30px",
}));

const StyledHomeNavItems = styled(Stack)(({ theme }) => ({
}));

const styledNavItems = {
	textDecoration: "none"
}

const HomeNav = () => {

	return (
		<StyledHomeNav
			direction="row"
			justifyContent="space-between"
			alignItems="center"
		>
				<Box>
					<Typography variant="subtitle1" color="#fff">
						Logo
					</Typography>
				</Box>

				<StyledHomeNavItems
					direction="row"
					alignItems="center"
					spacing={5}
				>
					{
						navItem.navItems.map((nav, i) => (
							<NavLink key={i} to={nav.link} style={styledNavItems} >
								<Typography color="#fff">
									{nav.label}
								</Typography>
							</NavLink>
						))
					}
				</StyledHomeNavItems>
		</StyledHomeNav>
	)
}

export default HomeNav