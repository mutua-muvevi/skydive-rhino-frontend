import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Banner from "../../components/ui/banner";
import ContactDetailsForm from "./sections/details";
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
				subtile="Adventure is just a phone call away - contact us now!"
			/>
			<ContactDetailsForm/>
			<Map/>
		</StyledContact>
	)
}

export default Contact