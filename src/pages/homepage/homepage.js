import React from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	useTheme,
	useMediaQuery,
	Container,
	CardMedia,
	Stack,
	AppBar,
	Toolbar,
	Button,
} from "@mui/material";
import Slider from "react-slick";
import { homeService } from "./info";
import { styled } from "@mui/system";

const videoUrl =
	"https://res.cloudinary.com/dqweh6zte/video/upload/v1673035911/skydive%20rhino/videos/pexels-leo-salom-7997309_tzgcig.mp4";

const logo =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1679650180/skydive%20rhino/images/skydive_rhino_kenya_logo_trnkqy.png";

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
	);
};

const SlickArrowRight = (props) => {
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
	);
};

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundSize: "cover",
	backgroundPosition: "center",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({}));

const Home = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

	const settings = {
		className: "center",
		centerMode: true,
		centerPadding: "50px",
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		slidesToShow: isSmallScreen
			? 1
			: isMediumScreen
			? 2
			: isLargeScreen
			? 4
			: 1,
		prevArrow: (
			<SlickArrowLeft
				color={theme.palette.primary.main}
				backgroundColor={theme.palette.primary.halfOpacity}
			/>
		),
		nextArrow: (
			<SlickArrowRight
				color={theme.palette.primary.main}
				backgroundColor={theme.palette.primary.halfOpacity}
			/>
		),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Box
			sx={{
				position: "relative",
				height: "100vh",
				width: "100vw",
				overflow: "hidden",
			}}
		>
			<AppBar
				position="fixed"
				sx={{ backgroundColor: "transparent", boxShadow: "none" }}
			>
				<Toolbar>
					<Container
						maxWidth="xl"
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<img
							src={logo}
							alt="skydiverhino logo"
							style={{
								height: "50px",
								width: "50px",
							}}
						/>
						<div>
							<Button color="inherit" href="/landing/about">
								About
							</Button>
							<Button color="inherit" href="/landing/contacts">
								Contact
							</Button>
						</div>
					</Container>
				</Toolbar>
			</AppBar>

			<video
				autoPlay
				loop
				muted
				style={{
					position: "absolute",
					width: "100%",
					left: "50%",
					top: "50%",
					height: "100%",
					objectFit: "cover",
					transform: "translate(-50%, -50%)",
					zIndex: "-1",
				}}
			>
				<source src={videoUrl} type="video/mp4" />
			</video>

			<Box
				sx={{
					position: "absolute",
					bottom: "20%",
					width: "100%",
				}}
			>
				<Container maxWidth="xl">
					<Stack
						direction="column"
						sx={{
							position: "relative",
							backgroundColor: "rgba(0,0,0,0.4)",
							color: "#ffffff",
							borderRadius: "10px",
						}}
						spacing={3}
					>
						<Stack direction="column" spacing={1.5} px={5}>
							<Typography variant="h1">Skydive Kenya</Typography>
							<Typography variant="h5">
								Defy Gravity, Embrace Adventure: Welcome to the
								World of Skydiving!
							</Typography>
						</Stack>

						<Slider {...settings}>
							{homeService.map((service, index) => (
								<div key={index}>
									<StyledCard
										sx={{
											backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${service.image})`,
											height: "180px",
										}}
									>
										<StyledCardContent>
											<Typography
												variant="h2"
												sx={{ color: "#ffffff" }}
											>
												{service.title}
											</Typography>
										</StyledCardContent>
									</StyledCard>
								</div>
							))}
						</Slider>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};

export default Home;
