// color design tokens export
export const colorTokens = {
	primary: {
		50: "#E4F0F8",
		100: "#C8E2F0",
		200: "#A5CFE6",
		300: "#83BCDC",
		400: "#62ABD3",
		500: "#429AC9",
		600: "#3C8DB9",
		700: "#347F9D",
		800: "#2C717F",
		900: "#245462",
		1000: "#1C4644",
	},
	white: "#FFFFFF",
	grey: {
		50: "#F5F7FA",
		100: "#ECEFF3",
		200: "#D8DCE1",
		300: "#C5C9D0",
		400: "#AEB2C2",
		500: "#979CB5",
		600: "#858BA6",
		700: "#6E748D",
		800: "#555D73",
		900: "#3B425A",
		1000: "#222933",
	},
};



// mui theme settings
export const themeSettings = (mode) => {
	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
					// palette values for dark mode
					primary: {
						dark: colorTokens.primary[200],
						main: colorTokens.primary[500],
						light: colorTokens.primary[800],
					},
					neutral: {
						dark: colorTokens.grey[100],
						main: colorTokens.grey[200],
						mediumMain: colorTokens.grey[300],
						medium: colorTokens.grey[400],
						light: colorTokens.grey[700],
					},
					background: {
						default: colorTokens.grey[900],
						alt: colorTokens.grey[800],
					},
				}
				: {
					// palette values for light mode
					primary: {
						dark: colorTokens.primary[700],
						main: colorTokens.primary[500],
						light: colorTokens.primary[50],
					},
					neutral: {
						dark: colorTokens.grey[700],
						main: colorTokens.grey[500],
						mediumMain: colorTokens.grey[400],
						medium: colorTokens.grey[300],
						light: colorTokens.grey[50],
					},
					background: {
						default: colorTokens.grey[10],
						alt: colorTokens.grey[0],
					},
				}),
		},
		typography: {
			fontFamily: ["Comfortaa", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Comfortaa", "sans-serif"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Comfortaa", "sans-serif"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Comfortaa", "sans-serif"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Comfortaa", "sans-serif"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Comfortaa", "sans-serif"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Comfortaa", "sans-serif"].join(","),
				fontSize: 14,
			},
		},
	};
};
