<template>
    <div class="m_in projects f_topbdr">
        <h2 class="f_tac mod_ttl">{{title}}</h2>
        <div class="project_box">
            <div class="project_list f_left" v-for="(project, i) in projects" :key="i">
                <p class="project_name" :title="project.description">
                    <a :href="project.html_url">{{project.name}}</a>
                </p>
                <p class="project_introduction">{{project.description_define}}</p>
                <div class="project_inf_bottom">
                    <p class="project_hot">
                        <span class="f_dib">star：
                            <em>{{project.stargazers_count}}</em>
                        </span>
                        <span class="f_dib">forks：
                            <em>{{project.forks_count}}</em>
                        </span>
                    </p>
                    <p class="f_tac project_creat_time">创建于：{{project.created_at}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'whatwg-fetch';
    export default {
        name: 'myProject',
        data() {
            return {
                title: '我的项目',
                repoNames: ['2ue.github.io', 'vue-datepicker', 'vui', 'gulp-webpack-template', 'local-storage-js', 'browser'],
                repoDescription: {
                    '2ue.github.io': '一个以HEXO技术搭建的托管在GITHUB上的静态博客。旨在记录一些平时撸码过程中的知识。最开始想搭一个博客的目的单纯是为了好玩，后来发现GITHUB上可以托管静态资源，再加上发现了HEXO这一利器，平时记录的markdown文章可以一键转换成文章，真是方便。',
                    'vue-datepicker': '日历插件是我一直想写的插件，学习javascript一段时间之后就自己尝试写了一个纯javascript的日历插件，学习了vue之后又写了一个vue版本的。由于水平原因，写的不太好，不过我会继续更新它的。毕竟这是我入行前端以来真正意义上想写又付诸行动的插件之一，所谓执念颇深。',
                    'vui': '以学习和乐趣为主要目的，基于vue的简易框架，正在开发中，计划写一些pc和手机端的常用的公共的模块',
                    'vue-music': '一个很简陋的音乐播放器，借用了网易云音乐平台的接口(不过这个接口不是公开是，请勿用作商业使用)和vue实现的，目前只实现了播放，暂停，切换歌曲(上一首，下一首，随机)，快进快退等功能。并且由于，某些歌曲版权原因，还存在抽风的情况。当然无论何时程序员都应该有自己的音乐电台！',
                    'gulp-webpack-template': 'gulp + webpack的一个打包项目的脚手架，支持多文件入口，以指定文件（一般是HTML文件）为入口，打包对应的（同名的）js文件。其中gulp负责打包HTML,CSS,IMG等文件，gulp主要负责打包JS等文件。但由于gulp的异步性，导致了可能存在打包JS文件失败的情况，找了很多插件也没能解决问题，所以目前已弃用',
                },
                projects: [{}, {}, {}, {}, {}, {}]
            }
        },
        beforeCreate() {

            var _self = this;
            //获取GITHUB的仓库---START
            fetch('https://api.github.com/users/2ue/repos?sort=created&per_page=100')
                .then(function (response) {
                    return response.json()
                }).then(function (allRepos) {
                    var repos = [];
                    allRepos.map(function (repo, i) {
                        // if (!repo.fork) {
                            var index = _self.repoNames.indexOf(repo.name);
                            if (index == -1) return;
                            // console.log(repo.name, !!_self.repoDescription[repo.name])
                            repo.description_define = _self.repoDescription[repo.name] || repo.description;
                            repos[index] = repo;
                        // }
                    });
                    return repos;
                }).then(function (res) {
                    _self.projects = [];
                    for (var i = 0; i < res.length; i++) {
                        res[i].created_at = res[i].created_at.split('T')[0];
                        _self.projects.push(res[i]);
                    }

                }).catch(function (ex) {
                    console.log('parsing failed', ex)
                })
            //获取GITHUB的仓库---END

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .project_box,
    .project_hot {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .project_list {
        position: relative;
        width: 30%;
        height: 340px;
        background: #FAFAFA;
        margin-bottom: 30px;
        transition: all ease-in-out 0.2s;
    }

    .project_list:hover {
        box-shadow: 0px 1px 5px 0px rgba(9, 2, 4, 0.2);
    }

    .project_name {
        font-size: 20px;
        text-align: center;
        line-height: 60px;
        border-bottom: 2px solid #fff;
        /*text-transform: capitalize;*/
        color: #333;
        transition: all ease-in-out 0.3s;
    }

    .project_name:hover {
        color: #000;
    }

    .project_introduction {
        padding: 10px 30px 0;
        font-size: 14px;
        text-indent: 1em;
        word-break: break-all;
        line-height: 24px;
        max-height: 190px;
        overflow: hidden;
    }

    .project_inf_bottom {
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
        font-style: italic;
    }

    .project_inf_bottom p {
        height: 30px;
        line-height: 30px;
    }

    .project_hot span {
        width: 50%;
        text-align: center;
        font-size: 14px;
        text-transform: capitalize;
    }

    .project_hot em {
        font-weight: bold;
        color: #666;
    }

    .project_creat_time {
        font-size: 12px;
        color: #999;
    }
</style>
