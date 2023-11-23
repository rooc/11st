module.exports = {
	content: ["./dist/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				tahiti: "hsla(245, 21%, 14%, 1)",
			},
		},
		variables: {
			DEFAULT: {
				sizes: {
					small: "1rem",
				},
				colors: {
					red: {
						50: "red",
					},
				},
			},
			".container": {
				colors: {
					red: {
						50: "indigo",
					},
				},
			},
		},
		darkVariables: {
			DEFAULT: {
				colors: {
					red: {
						50: "blue",
					},
				},
			},
			".container": {
				colors: {
					red: {
						50: "green",
					},
				},
			},
		},
	},
	darkMode: "class",
	plugins: [require("@mertasan/tailwindcss-variables")],
};
