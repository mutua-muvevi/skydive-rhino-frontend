import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const navItem = {
	logo: {
		image: "",
		text: "",
		link: "/"
	},
	navItems: [
		{
			label: "homepage",
			link: "/"
		},
		{
			label: "about",
			link: "/landing/about"
		},
		{
			label: "contact",
			link: "/landing/contact"
		},
	]
}

export const cardItems = [
	{
		title: "Tandem skydive",
		paragraph: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra placerat lectus vitae vestibulum. Aliquam erat volutpat. Nunc hendrerit enim diam, sit amet scelerisque enim lobortis quis. Nunc egestas, ipsum blandit vulputate tempus, urna lacus pharetra lectus, at molestie neque ligula vitae libero",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra placerat lectus vitae vestibulum. Aliquam erat volutpat. Nunc hendrerit enim diam, sit amet scelerisque enim lobortis quis. Nunc egestas, ipsum blandit vulputate tempus, urna lacus pharetra lectus, at molestie neque ligula vitae libero",
		],
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047336/skydive%20rhino/images/kamil-pietrzak-H22w-tq0SeQ-unsplash_cn6hbi.jpg",
	},
	{
		title: "Jump School",
		paragraph: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra placerat lectus vitae vestibulum. Aliquam erat volutpat. Nunc hendrerit enim diam, sit amet scelerisque enim lobortis quis. Nunc egestas, ipsum blandit vulputate tempus, urna lacus pharetra lectus, at molestie neque ligula vitae libero",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra placerat lectus vitae vestibulum. Aliquam erat volutpat. Nunc hendrerit enim diam, sit amet scelerisque enim lobortis quis. Nunc egestas, ipsum blandit vulputate tempus, urna lacus pharetra lectus, at molestie neque ligula vitae libero",
		],
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047325/skydive%20rhino/images/kamil-pietrzak-G0FsO2Ca8nQ-unsplash_zkucd7.jpg",
	},
]

const socialIconStyles = {
	color:"#fff"
}

export const socialMediaItems = [
	{
		icon: <FaFacebookF style={socialIconStyles}/>,
		link: ""
	},
	{
		icon: <FaInstagram style={socialIconStyles}/>,
		link: ""
	},
	{
		icon: <FaTwitter style={socialIconStyles}/>,
		link: ""
	},
]