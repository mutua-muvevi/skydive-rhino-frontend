import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledTitleSubtitle = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	paddingTop: "50px",
	paddingBottom: "50px",
}))

const TitleSubtitle = ({ title, subtitle }) => {
	return (
		<StyledTitleSubtitle>
			<Typography variant="h4" color="primary">
				{title}
			</Typography>
			<Typography variant="subtitle1" color="text.primary">
				{subtitle}
			</Typography>
		</StyledTitleSubtitle>
	)
}

export default TitleSubtitle