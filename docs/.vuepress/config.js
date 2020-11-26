const { config } = require("vuepress-theme-hope");
const path = require("path");

module.exports = config({
    // 部署站点基础路径
    base: '/project-specification/',
    // 相对路径
    configureWebpack: {
        resolve: {
          alias: {
            '@img': path.join(__dirname, './public/img/'),
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
            { text: 'Git', link: '/git/' },
            { text: 'HTML', link: '/html/' },
            { text: 'CSS', link: '/css/' },
            { text: 'JavaScript', link: '/javascript/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'PHP', link: '/php/' },
            { text: 'Laravel', link: '/laravel/' },
            { text: 'Web API', link: '/web_api/'}
        ],
        // 自动生成侧边栏
        sidebar: 'auto'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': 'img'
            }
        }
    }
})