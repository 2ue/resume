<template>
    <div class="m_in list f_topbdr">
        <div class="list_box f_clear" v-for="(list, i) in lists" :key="i" :class="list.className">
            <div class="f_left f_tac list_ttl">
                <span class="f_dib">{{list.title}}</span>
            </div>
            <div class="f_left list_content">
                <div class="list_i" v-for="(item, j) in list.item" :key="j">
                    <p class="list_i_headr">
                        <span class="f_dib" :style="{'width':item.headerWidth}" v-for="(headerTtl, l) in item.header" :key="l">{{headerTtl}}</span>
                    </p>
                    <p class="list_i_info" v-for="(content, m) in item.content" :key="m">{{content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'myList',
        data() {
            return {
                lists: [
                    {
                        title: '教育经历',
                        item: [
                            {
                                headerWidth: '33.33%',
                                header: [
                                    '2000年本科毕业',
                                    'XXXX大学',
                                    'XXXX专业'
                                ],
                                content: [
                                    '大学学习XXXX相关课程，毕业后从事前端开发工作至今'
                                ]
                            }
                        ]
                    }, {
                        title: '工作经历',
                        item: [
                            {
                                headerWidth: '33.33%',
                                header: [
                                    '2017.03 - 至今',
                                    'XXXXX公司',
                                    '前端开发工程师'
                                ],
                                content: [
                                    '物联网门户/后台管理系统/监控系统/数据系统/活动专题系统',
                                    '还原设计图/数据交互/web&pc端/独立参与项目'
                                ]
                            },
                            {
                                headerWidth: '33.33%',
                                header: [
                                    '2013.02 - 2017.03',
                                    'XXXXXX',
                                    '前端开发工程师'
                                ],
                                content: [
                                    '金融/物流/进出口/保险等类型项目',
                                    '还原设计图/数据交互/web&pc端/独立参与项目'
                                ]
                            },
                            {
                                headerWidth: '33.33%',
                                header: [
                                    '2010.11 - 2016.02',
                                    'XXXX公司',
                                    '前端开发工程师'
                                ],
                                content: [
                                    '旅游类项目以及公司内部系统软件',
                                    '还原设计图/数据交互/web&pc端'
                                ]
                            }
                        ]
                    }
                    , {
                        title: '专业技能',
                        className: 'list-box-2',
                        item: [
                            {
                                content: [
                                    '精通XXXXXXX',
                                    '精通XXXXXXX',
                                    '擅长XXXXXXX',
                                ]
                            }
                        ]
                    }
                    // , {
                    //     title: '自我评价',
                    //     className: 'list-box-2',
                    //     item: [
                    //         {
                    //             content: [
                    //                 '兴趣浓，喜欢前端',
                    //                 '能吃苦，能加班',
                    //                 '敢于提出问题',
                    //                 '有时反应迟钝',
                    //                 '能够友好交流'
                    //             ]
                    //         }
                    //     ]
                    // }
                ]
            }
        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list {
        overflow: hidden;
    }

    /*.list_box{border-top: 2px solid #e5e5e5;margin-top:-2px;padding-top: 10px;}*/

    .list_box {
        border-bottom: 2px solid #e5e5e5;
        padding-top: 10px;
    }

    .list_ttl {
        width: 23%;
    }

    .list_ttl span {
        width: 120px;
        height: 50px;
        line-height: 50px;
        border: 3px solid #3e5f94;
        color: #3e5f94;
        font-size: 20px;
        margin-top: 20px;
    }

    .list_content {
        width: 70%;
        padding-top: 5px;
        font-size: 14px;
        color: #333;
        overflow: hidden;
    }

    .list_i {
        margin-bottom: -2px;
        border-bottom: 2px solid #eee;
        margin-top: 20px;
        padding-bottom: 15px;
    }

    .list_i:last-child {
        padding-bottom: 30px;
    }

    .list_i p {
        margin-bottom: 5px;
    }

    .list-box-2 .list_i {
        margin-top: 0;
    }

    .list_i .list_i_headr {
        margin-bottom: 15px;
        color: #3e5f94;
        font-weight: bold;
    }

    .list_i_headr {
        display: flex;
    }

    .list_i_headr span {
        text-align: center;
    }

    .list_i_headr span:last-child {
        text-align: right;
    }

    .list_i_headr span:first-child {
        text-align: left;
    }
</style>
