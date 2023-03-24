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

export const jumpSchool = {
	paragraph: [
		`At our jump school, we provide the highest quality instruction and training for all levels of skydivers. Our team of experienced and certified instructors will teach you everything you need to know to become a safe and confident skydiver. From beginner level courses to advanced training, we offer a variety of programs tailored to your specific needs and goals.`,
		`Whether you're looking to become a licensed skydiver, enhance your existing skills or simply experience the thrill of jumping out of a plane, our jump school is the perfect place to start. With our expert guidance and support, you'll be soaring through the skies in no time! Contact us today to learn more about our jump school programs and start your journey towards becoming a certified skydiver.`,
	],
	list: [
		{
			title: "Experienced Instructors",
			paragraph: "Our team of experienced and certified instructors are passionate about skydiving and dedicated to providing you with the best possible training experience."
		},
		{
			title:"State-of-the-Art Equipment",
			paragraph: "We use only the latest and most advanced skydiving equipment, ensuring your safety and comfort throughout your training."
		},
		{
			title:"Personalized Instruction",
			paragraph: "We offer personalized, one-on-one instruction to ensure that you receive the individual attention you need to progress at your own pace and achieve your skydiving goals."
		},
		{
			title:"Comprehensive Training",
			paragraph: "Our jump school curriculum covers all aspects of skydiving, from the fundamentals of freefall and canopy control to advanced techniques such as formation skydiving and wingsuit flying, giving you the skills and knowledge you need to become a safe and confident skydiver."
		},
	]
}

export const photographyAndVideography = {
	paragraph: [
		`Tandem skydiving is not only an exciting and thrilling experience, but it's also a great opportunity to capture beautiful and unique memories. That's why at Sky Dive Rhino Kenya, we offer professional photography and videography services for our tandem jumpers.`,
		`Our experienced photographers and videographers will capture every moment of your jump, from the initial leap out of the plane to the peaceful descent under the parachute. You'll be able to relive the experience and share it with your loved ones.`,
		`Our professional photography and videography package allows you to have a tangible memory of your skydiving experience, and can be a great way to commemorate a special occasion or milestone. So don't hesitate, book your tandem skydiving experience today and let us capture the unforgettable moments for you.`,
	],
	images: [
		{
			alt: "Photography and videography",
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047336/skydive%20rhino/images/kamil-pietrzak-H22w-tq0SeQ-unsplash_cn6hbi.jpg"
		},
		{
			alt: "Photography and videography",
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047325/skydive%20rhino/images/kamil-pietrzak-G0FsO2Ca8nQ-unsplash_zkucd7.jpg"
		},
		{
			alt: "Photography and videography",
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg"
		},
		{
			alt: "Photography and videography",
			src: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673515747/skydive%20rhino/images/kamil-pietrzak-5U9FD-sdcoc-unsplash_s0weea.jpg"
		},
	]

}