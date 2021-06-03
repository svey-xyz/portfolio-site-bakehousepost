const colors = require('tailwindcss/colors')

module.exports = {
	mode: (process.env.NODE_ENV === 'production' ? '' : 'jit'),
	purge: {
		content: ["./src/_includes/layouts/**/*.njk", "./src/*.njk"],
		options: {
			keyframes: true
		},
	},
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			minWidth: {
				'0': '0',
				'1/4': '25%',
				'1/3': '33.333%',
				'1/2': '50%',
				'3/4': '75%',
				'full': '100%',
				'sm': '12rem',
				'md': '20rem',
				'thumb': '10rem',
				'thumb-sm': '6rem'

			},
			maxWidth: {
				'prose-full': '85ch',
				'prose': '65ch'
			},
			minHeight: {
				'16': '4rem',
				'80': '20rem',
				'96': '24rem',
				'3/5': '60%',
				'full': '100%',
			},
			height: {
				'102': '30rem',
				'content': 'min-content'
			},
			maxHeight: {
				'3/5': '60%',
				'full': '100%',
			},
			padding: {
				'16/9': '56.25%'
			},
			scale: {
				'102': '1.02'
			},
			colors: {
				primaryColour: 'var(--primary-colour)',
				primaryTranslucent: 'var(--primary-colour-translucent)',
				secondaryColour: 'var(--secondary-colour)',
				accentColour: 'var(--accent-colour)',
				darkGrey: '#181818',
				charcoal: '#3B454E',
				textColour: '#3B454E'
			},
			boxShadow: {
				DEFAULT: '0 0px 6px -1px rgba(0,0,0,0.1), 0 0px 5px -1px rgba(0,0,0,.06)',
				lg: '0 0px 12px -3px rgba(0,0,0,0.5), 0 0px 6px -1px rgba(0,0,0,.06)',
				xl: '0 0px 16px -3px rgba(0,0,0,0.5), 0 0px 7px -1px rgba(0,0,0,.07)',
			},
			fontFamily: {
				heading: ['DM Serif Display', 'serif'],
				body: ['Montserrat', 'sans-serif']
			},
		}
	},
	variants: {
		extend: {
			fontWeight: ['hover'],
			transform: ['hover']

		}
	},
	plugins: [],
};