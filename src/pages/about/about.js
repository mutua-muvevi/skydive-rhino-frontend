import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Banner from "../../components/ui/banner";

import FAQ from "./sections/faq";
import Gear from "./sections/gear";
import Jumps from "./sections/jumps";
import Safety from "./sections/safety";
import WhoWeAre from "./sections/whoweare";

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
			<WhoWeAre/>
			<Jumps/>
			<Safety/>
			<FAQ/>
			<Gear/>
		</StyledAbout>
	)
}

export default About