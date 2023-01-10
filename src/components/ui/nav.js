import { Box, Stack, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { NavLink } from "react-router-dom";

const StyledContainer = styled(Container)(({ theme }) => ({

}));

const StyledNavbar = styled(Stack)(({ theme }) => ({
	paddingTop: "30px",
}));

const StyledNavbarItems = styled(Stack)(({ theme }) => ({
}));

const styledNavItems = {
	textDecoration: "none"
}

const navItem = {
	logo: {
		image: "",
		text: "",
		link: "/"
	},
	navItems: [
		{
			label: "homepage",
			link: "/"
		},
		{
			label: "about",
			link: "/landing/about"
		},
		{
			label: "contact",
			link: "/landing/contact"
		},
	]
}

const Navbar = () => {

	return (
		<Box>
			<StyledContainer maxWidth="xl">
				<StyledNavbar
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
						<Box>
							<Typography variant="subtitle1" color="#fff">
								Logo
							</Typography>
						</Box>

						<StyledNavbarItems
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
						</StyledNavbarItems>
				</StyledNavbar>
			</StyledContainer>
		</Box>
	)
}

export default Navbar