/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				ruaa: "url('./src/assets/themeless.jpg')",
				corenerUp: "url('./src/assets/cornerUp.svg')",
				cornerDown: "url('./src/assets/cornerBottom.svg')",
			},
			colors: {
				ieeeBlue: "#00629b",
				redGreenFull: "#ffff00",
				customColor: "#ab0000",
			},
		},
	},
	plugins: [],
};
