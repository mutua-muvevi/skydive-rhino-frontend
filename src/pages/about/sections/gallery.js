import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTheme } from "@emotion/react";
import { Box, Card, CardActionArea, CardMedia, Container, Grow, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { gallery } from "./info"

const StyledGallery = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	justifyContent: "center",
	flexDirection:"column"
}));


const SlickArrowLeft = (props) => {
	const { className, style, onClick, backgroundColor, color } = props;

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				backgroundColor: backgroundColor,
				color: color,
			}}
			onClick={onClick}
		/>
	)
}


const SlickArrowRight = (props) => {
	const { className, style, onClick , backgroundColor, color} = props;

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				backgroundColor: backgroundColor,
				color: color,
			}}
			onClick={onClick}
		/>
	)
}

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const Gallery = () => {
	const theme = useTheme();

	const settings = {
		className: "center",
		centerMode: true,
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		prevArrow: <SlickArrowLeft color={theme.palette.primary.main} backgroundColor={theme.palette.primary.halfOpacity}/>,
		nextArrow: <SlickArrowRight color={theme.palette.primary.main} backgroundColor={theme.palette.primary.halfOpacity}/>,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<StyledGallery>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Grow style={{ transformOrigin: '10 20 50' }} in timeout={1000}>
						<Stack direction="column" spacing={1.5}>
							<Typography variant="h2" color="primary">
								Our Gallery
							</Typography>

							<Typography variant="h5" color="text.primary">
								Capturing the Skydiving Spirit: Behold Our Stunning Photo Collection
							</Typography>
						</Stack>
					</Grow>

					
					<Slider {...settings}>
						{gallery.map((gal, index) => (
							<div key={index}>
								<Box key={index} px={2}>
									<Card>
										<a href={gal.link} target="_blank" rel="noreferrer" style={styledLink}>
											<CardActionArea>
												<CardMedia
													component="img"
													src={gal.image}
													alt={`Gallery image ${index + 1}`}
													height={350}
												/>
											</CardActionArea>
										</a>
									</Card>

								</Box>
							</div>
						))}
					</Slider>
				</Stack>
			</Container>
		</StyledGallery>
	)
}

export default Gallery