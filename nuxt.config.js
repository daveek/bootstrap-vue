const path = require('path');

module.exports = {
    srcDir: path.resolve(__dirname, 'docs', 'nuxt'),
    dev: process.env.NODE_ENV !== 'production',

    head: {
        title: 'BootstrapVue',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ],
        link: [
            {rel: 'icon', href: '/banner.png', sizes: '16x16', type: 'image/png'}
        ]
    },

    build: {
        extend(config) {
            config.module.rules.push({
                test: /\.md$/,
                use: [
                    {loader: 'html-loader'},
                    {loader: 'highlight-loader'},
                    {loader: 'markdown-loader', options: {}}
                ]
            });
        }
    },

    generate: {
        dir: 'docs-dist'
    },

    plugins: [
        '~plugins/bootstrap-vue.js',
        '~plugins/codemirror.js',
        '~plugins/ga.js'
    ],
    css: [
        path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
        path.resolve(__dirname, 'node_modules/highlightjs/styles/github-gist.css'),
        path.resolve(__dirname, 'node_modules/codemirror/lib/codemirror.css'),
        '~assets/css/docs.min.css',
        '~assets/css/styles.css'
    ]
};
