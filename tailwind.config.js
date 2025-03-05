/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
	content: [
		'./src/**/*.{html,ts}',
		'./components/**/*.{html,ts}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};