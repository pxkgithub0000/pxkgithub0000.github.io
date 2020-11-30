
/*
*项目名: 个人简历
*创建者: Edit
*创建时间:2020.2.15 20:40:41
*联系方式:15622749328(微信同号)
*描述: 酷炫个人简历
*/

let textArr = [
    {
        name: 'h2',
        class: 'inten',
        text: '求职意向：java开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：彭新科'
            },{
                name: 'div',
                text: '生日：2000-08-15'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '籍贯：湖南邵阳'
            },{
                name: 'div',
                text: '电话：13874603738'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：永州职业技术学院'
        }, {
            name: 'span',
            text: '专业：计算机网络（java）'
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'有良好的 Java 基础知识和编码规范，熟悉 Java 常用的 api 和 JavaEE 基础'
        },{
            name: 'li',
            text:'熟练掌握',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'html、js、css、JQuery、ajax'
            },{
				name: 'li',
				text:'等前端技术'
			}]
        }, {
            name: 'li',
            text:'掌握掌握',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'bootstrap、vue、semanticUI 等前端框架'
            }]
        }, {
            name: 'li',
            text:'熟练掌握',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Spring、SpringBoot、Mybatis'
            }]
        },  {
            name: 'li',
            text:'熟练掌握',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Mysql，DDL、DML 语句'
            },{
				name: 'span',
				text: '的创建与使用'
			}]
        }, {
            name: 'li',
            text:'掌握分布式系统的相关知识，熟练掌握 SpringCloud 中各组件'
        }, {
            name: 'li',
            text: '了解 linux 基础命令',
        }, {
            name: 'li',
            text: 'JSP、Servlet、JavaBean 的 Javaweb 开发',
        }, {
            name: 'li',
            text: '了解 java 多线程的使用',
        }, {
            name: 'li',
            text: '对 hexo 博客框架有一定了解',
        }]
    },{
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目一：小新博客（2020.11-至今）'
            }, {
                name: 'li',
                text: '开发环境：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'hexo+git+nodejs'
                }]
            }, {
                name: 'li',
                text: '项目描述：基于hexo博客空间搭建，yilia为主题。功能除了主题自带的分享和联系我之外我还加了音乐播放器、留言、评论等也在主题的基础上美化了样式'
            }, {
                name: 'li',
                text: '项目心得：这是我的一个个人项目，为了完成用该项目，运用的新技术看似简单，实际操作还是有点复杂，所有的技术 点都要在网上各种学习和测试，最终得到相对理想的效果。在学习时的各种不顺利虽然有点头疼，但还是咬牙坚持了下来， 让我越来越热爱这门专业'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目二：up物业（2020.10-2020.10）'
            }, {
                name: 'li',
                text: '开发环境：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'MySQL+ eclipse+jdk11+Tomcat+Hbuilder'
                }]
            }, {
                name: 'li',
                text: '项目描述：这是大三团队项目，前端使用 jsp 实现数据展示，后端用 java 代码操作数据，jQuery 技术实现控件，前后端交互用了 springMVC，支付功能采用阿里的沙盒，短信验证是阿里的短信服务，最后项目的部署在阿里的服务器上'
            }, {
                name: 'li',
                text: '负责模块：up 物业网里负责登录注册，忘记密码，记住密码，个人资料的添加和修改，支付功能等'
            }, {
                name: 'li',
                text: '项目心得：为了更好的用户体验，去自学了很多东西（如：ajax、idea），花了大量时间对项目找茬，扩充了知识面，增长了管理时间的能力，也处理了各种异常，让我更加热爱这个专业，爱觉不累'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目三：up购物(2020.03-2020.04)'
            }, {
                name: 'li',
                text: '开发坏境：',
                children: [{
                    name: 'span',
                    class: 'tag',
                    text: 'MySQL+eclipse+jdk11+Tomcat+Hbuilder'
                }, {
                    name: 'span',
                    text: '项目描述：这是大二团队项目，前端使用了jsp来实现数据的展示，后端通过java代码来对数据进行一系列的操作，加入了jquery技术制作了一下控件效果，springMVC框架实现了前端和后端的交互'
                }]
            }, {
                name: 'li',
                text: '负责模块：加入购物车、商品搜索、提交订单等'
            }, {
                name: 'li',
                text: '项目心得：为了制作这个项目，查阅了大量资料，也测试了很多代码，才最终选定合格的代码，虽然最后的成果也有点简陋，但大体功能还是实现了，也在开发的道路上渐行渐远'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '自我评价'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'写代码结构清晰、命名规范、有条理，喜欢找规律'
        }, {
            name: 'li',
            text:'喜欢学习新知识'
        }, {
            name: 'li',
            text:'自学能力强，工作认真、细心，善于管理时间'
        }, {
            name: 'li',
            text:'态度诚恳、真诚，有良好的团队合作精神，心态好'
        }, {
            name: 'li',
            text:'吃苦耐劳，乐于助人，落落大方，喜欢分享经验、心得'
        }, {
            name: 'li',
            text:'善于独立思考，对事物有独特见解，做事谨慎'
        }]
    }
]
let style = `
    /*
    * 各位好，我叫彭新科，来自湖南邵阳
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 稍等，在容器上添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 我需要一点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 接下来请欣赏我的个人简历吧 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="images/balloon.png" id="bg-balloon-small">
        <img src="images/balloon.png" id="bg-balloon-large">
        <img src="images/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


