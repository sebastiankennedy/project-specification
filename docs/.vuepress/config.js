module.exports = {
    // 相对路径
    configureWebpack: {
        resolve: {
            alias: {
                "@public": "./public"
            }
        }
    },
    // 配置站点多语言
    locales: {
        '/': {
            lang: "zh-CN",
            title: "项目开发规范",
            description: "这是一套严格的团队开发规范。",
        }
    },
    themeConfig: {
        nav: [
            { text: 'HTML', link: '/html/' },
            { text: 'CSS', link: '/css/' },
            { text: 'JavaScript', link: '/javascript/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'PHP', link: '/php/' },
            { text: 'Laravel', link: '/laravel/' },
        ],
        // 自动生成侧边栏
        sidebar: 'auto'
    }
}