module.exports = {
    title: '随笔小记',
    base: '/blog/',
    description: "石宇航的博客",
    head: [
        ['link', {rel: 'icon', href: 'favicon.ico'}]
    ],
    themeConfig: {
        nav:[
            { text: 'Home', link: '/'},
            { text: 'GitHub', link: 'https://github.com/S-yh/blog'}
        ],
        sidebar: [
            ['/html/', 'HTML'],
            ['/css/', 'CSS'],
            ['/js/', 'JavaScript'],
            ['/vue/', 'Vue'],
            ['/react/', 'React'],
            ['/node/', 'Node'],
            ['/webpack/', 'Webpack'],
            ['/git/', 'Git'],
            ['/nginx/', 'Nginx'],
            ['/docker/', 'Docker'],
            ['/browser/', '浏览器'],
            ['/snippet/', '工具函数/代码片段'],
            ['/algorithm/', '数据结构/算法'],
            ['/performance/', '性能优化']
        ],
        sidebarDepth: 1
    }
}