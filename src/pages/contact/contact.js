import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Banner from "../../components/ui/banner";
import Form from "./sections/form";
import Map from "./sections/map";

const StyledContact = styled(Box)(({ theme }) => ({
}))

const Contact = () => {
	return (
		<StyledContact>
			<Banner
				height="50vh"
				image="https://res.cloudinary.com/dqweh6zte/image/upload/v1673047336/skydive%20rhino/images/kamil-pietrzak-H22w-tq0SeQ-unsplash_cn6hbi.jpg"
				title="Contact us"
				subtile="Lorem ipsum"
			/>
			<Form/>
			<Map/>
		</StyledContact>
	)
}

export default Contact