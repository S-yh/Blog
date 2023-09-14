/*
 * @Description: 基础配置
 * @Author: Syh
 * @Date: 2020-05-03 12:22:05
 * @LastEditTime: 2020-07-05 11:52:59
 * @LastEditors: Syh
 */ 
module.exports = {
    title: '小记',
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
                'network',
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
                'event-loop',
                'typescript'
            ],
        },
        sidebarDepth: 1
    }
}