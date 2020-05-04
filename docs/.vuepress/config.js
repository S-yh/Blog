module.exports = {
    title: '随笔一记',
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
            ['/git/', 'Git'],
            ['/webpack/', 'Webpack'],
            ['/nginx/', 'Nginx'],
            ['/docker/', 'Docker'],
            ['/browser/', '浏览器'],
            ['/snippet/', '工具函数/代码片段'],
            ['/algorithm/', '数据结构/算法']
        ],
        sidebarDepth: 1
    }
}