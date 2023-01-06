import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBook = styled(Box)(({ theme }) => ({
}))

const Book = () => {
	return (
		<StyledBook>
			<div>Book</div>
		</StyledBook>
	)
}

export default Book