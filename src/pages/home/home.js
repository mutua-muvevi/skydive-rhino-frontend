import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import HomeAbout from "./sections/about";
import HomeBanner from "./sections/banner";
import HomeFreefall from "./sections/freefall";
import HomeHelicopter from "./sections/helicopter";
import HomeJumpSchool from "./sections/jumpschool";
import HomeNight from "./sections/night";
import HomePhotography from "./sections/photography";
import HomeTandem from "./sections/tandem";
import HomeWhyUs from "./sections/whyus";
import HomeWingSuit from "./sections/wingsuit";

const StyledHomepage = styled(Box)(({ theme }) => ({
	backgroundColor: ""
}));

const Homepage = () => {
	return (
		<StyledHomepage >
			<HomeBanner/>
			<HomeAbout/>
			<HomeWhyUs/>
			<HomeTandem/>
			<HomeFreefall/>
			<HomeWingSuit/>
			<HomeJumpSchool/>
			<HomePhotography/>
			<HomeHelicopter/>
			<HomeNight/>
		</StyledHomepage>
	)
}

export default Homepage