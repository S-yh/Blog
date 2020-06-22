module.exports = {
    title: '随笔小记',
    base: '/blog/',
    description: "石宇航的博客",
    head: [
        ['link', {
            rel: 'icon',
            href: 'favicon.ico'
        }]
    ],
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Note',
                link: '/note/'
            },
            {
                text: 'Article',
                link: '/article/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/S-yh/blog'
            }
        ],
        sidebar: {
            '/note/': [
                'html',
                'css',
                'js',
                'vue',
                'react',
                'node',
                'ts',
                'webpack',
                'git',
                'nginx',
                'linux',
                'docker',
                'browser',
                'snippet',
                'algorithm',
                'performance'
            ],
            '/article/': [
                'vue-ssr',
                'redux',
                'vuex',
                'react-hook',
                'vue-composition-api',
                'event-loop'
            ],
        },
        sidebarDepth: 1
    }
}