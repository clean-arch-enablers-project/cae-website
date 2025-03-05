/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
	content: [
		'./src/**/*.{html,ts}',
		'./REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};