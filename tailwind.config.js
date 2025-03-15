/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'teal': '#02584B',         // Main teal
                'teal-light': '#037c70',   // Lighter teal
                'teal-lightest': '#f0f9f8', // Very light teal background
                'dark': '#333333',          // Dark text color
                'light': '#FFFFFF',         // White
                'gray-light': '#f3f4f6',    // Light gray
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-teal': 'linear-gradient(90deg, #02584B 0%, #037c70 100%)',
            }
        }
    },
    plugins: [],
}