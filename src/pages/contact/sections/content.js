import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContactDetails = styled(Stack)(({ theme }) => ({

}))

const StyledDetailTitles = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	textTransform: "uppercase",
	width: "200px",
	display: "flex",
	justifyContent: "center",
	borderRadius: theme.shape.borderRadius
}))

const contactItems = [
	{
		title: "Address",
		items: [
			"Nairobi City, Kenya"
		],
	},
	{
		title: "Phone",
		items: [
			"+254 700 000 000",
			"+254 700 000 000",
		],
	},
	{
		title: "Email",
		items: [
			"emailOne@mail.com",
			"emailTwo@mail.com",
			"emailThree@mail.com",
		],
	},
]

const ContactDetails = () => {
	return (
		<StyledContactDetails direction="column" spacing={3}>
			<Typography variant="h4" color="primary">
				Get in touch with us
			</Typography>
			<Typography variant="body2" color="text.primary">
				Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.
			</Typography>
			{
				contactItems.map((item, i) => (
					<Stack direction="column" spacing={1.5} key={i}>
						<StyledDetailTitles>
							<Typography variant="h6">
								{item.title}
							</Typography>
						</StyledDetailTitles>
						{
							item.items.map((text, i) => (
								<Typography variant="body2" color="text.primary" key={i}>
									{text}
								</Typography>
							))
						}
					</Stack>
				))
			}
		</StyledContactDetails>
	)
}

export default ContactDetails