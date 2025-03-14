/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#02584B',       // Main teal
                'primary-light': '#038C7F', // Lighter teal
                'primary-dark': '#023B33',  // Darker teal
                'primary-bg': '#011A17',    // Very dark teal for backgrounds
                'accent': '#04D9C4',        // Bright teal for accents
                'text-light': '#E0F2F1',    // Light color for text on dark backgrounds
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(90deg, #02584B 0%, #038C7F 100%)',
            }
        }
    },
    plugins: [],
}