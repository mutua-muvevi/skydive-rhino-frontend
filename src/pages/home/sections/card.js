import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/styles";

const StyledContentStack = styled(Stack)(({ theme }) => ({
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(0, 130, 255, 0.17)",
	paddingLeft: "20px",
	paddingRight: "20px",
	paddingTop: "30px",
}));

const HomeCard = ({data}) => {
	const theme = useTheme()
	
	const StyledHomeCard = styled(Box)(({ theme }) => ({
		height: "50vh",
		width: "100%",
		borderRadius: theme.shape.borderRadius,
		backgroundImage: `url(${data.image})`,
		position: "center",
		backgroundSize: "cover",
		backgroundRepeat:"no-repeat",
	}))

	return (
		<StyledHomeCard>
			<StyledContentStack
				spacing={3}
			>
				<Typography variant="h5" style={{color: theme.palette.primary.darker}} gutterBottom>
					{data.title}
				</Typography>
				<Stack
					spacing={2}
					direction="column"
				>
					{
						data.paragraph.map((par, i) => (
							<Typography key={i} variant="body2" style={{color: "#fff"}} gutterBottom>
								{par}
							</Typography>
						))
					}
				</Stack>
			</StyledContentStack>
		</StyledHomeCard>
	)
}

export default HomeCard