import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Banner from "../../components/ui/banner";

import WhyUs from "./sections/whyus";
import AboutUs from "./sections/aboutus";

const StyledAbout = styled(Box)(({ theme }) => ({
}))

const About = () => {
	return (
		<StyledAbout>
			<Banner
				height="50vh"
				image="https://res.cloudinary.com/dqweh6zte/image/upload/v1673047336/skydive%20rhino/images/kamil-pietrzak-H22w-tq0SeQ-unsplash_cn6hbi.jpg"
				title="About us"
				subtile="Who we are"
			/>
			<Stack direction="column" spacing={3}>
				<AboutUs/>
				<WhyUs/>
			</Stack>
		</StyledAbout>
	)
}

export default About