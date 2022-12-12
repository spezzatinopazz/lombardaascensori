/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"serif": ['PT Sans'],
			"sans": ['Nunito Sans'],
			"error": ['"Press Start 2P"','cursive'],
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui")
	],
	daisyui: {
		logs: false,
		themes: [
			{
				corporate: {
					...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
					primary: "#388DD8",
					accent: "#FF4136",
				}
			},
		]
	},
}
