module.exports = {
    content: [
        './contact/index.html',
        './gallery/index.html',
        './packages/index.html',
        './thank-you/index.html',
        './index.html',
        './resources/*.{css,js,scss,svg}',
    ],
    theme: {
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
