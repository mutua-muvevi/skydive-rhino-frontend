import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Banner from "../../components/ui/banner";
import HomeAbout from "./sections/about";
import HomeFreefall from "./sections/freefall";
import HomeHelicopter from "./sections/helicopter";
import HomeJumpSchool from "./sections/jumpschool";
import HomeNight from "./sections/night";
import HomePhotography from "./sections/photography";
import HomeTandem from "./sections/tandem";
import HomeWhyUs from "./sections/whyus";
import HomeWingSuit from "./sections/wingsuit";

const bannerImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679652035/skydive%20rhino/images/IMG_20230201_145259_013_posegl.jpg"

const StyledHomepage = styled(Box)(({ theme }) => ({
	backgroundColor: ""
}));

const bannerParagraph = [
	`Welcome to Sky Dive Rhino Kenya, where we provide a one-of-a-kind skydiving experience that is safe, exciting, and unforgettable. Our team of experienced instructors will guide you through every step of the process, from your initial jump to your landing. We use state-of-the-art equipment and the latest safety protocols to ensure a smooth and enjoyable experience for our customers.`,
	` Our unique location in the heart of Kenya, and our MAULE planes, allow us to take you to some of the most remote and beautiful locations, where you can experience the thrill of skydiving with a breathtaking view. Join us and feel the rush of adrenaline as you free fall from thousands of feet above the ground, and soar like a bird, while enjoying the beautiful views of Kenya. Book your skydiving experience today and make memories that will last a lifetime.`,
]

const Homepage = () => {
	return (
		<StyledHomepage >
			<Banner
				image={bannerImage}
				title="Skydive Rhino"
				height="70vh"
				paragraph={bannerParagraph}
			/>
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