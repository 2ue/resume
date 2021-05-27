webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_project__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_project__);
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    components: {
        MyHeader: __WEBPACK_IMPORTED_MODULE_0__components_header___default.a,
        MyFooter: __WEBPACK_IMPORTED_MODULE_1__components_footer___default.a,
        MyList: __WEBPACK_IMPORTED_MODULE_2__components_list___default.a,
        MyProject: __WEBPACK_IMPORTED_MODULE_3__components_project___default.a
    },
    data() {
        return {
            title: '关于我'
        };
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'myFooter',
    data() {
        return {
            workYear: 2015
        };
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'myHeader',
    data() {
        return {
            name: '杰远飞',
            workYear: '2014-11',
            workPosition: '前端开发工程师',
            sex: '男',
            telphone: 13508391424,
            address: '重庆市渝北区大竹林',
            qq: 2429886596,
            mail: 'jie746635835@163.com'
        };
    },
    computed: {

        workTime: function () {
            let _self = this;
            let allMonth, newYear, newMonth;
            allMonth = _self.getMonth();
            newYear = parseInt(allMonth / 12) > 0 ? parseInt(allMonth / 12) + '年' : '';
            newMonth = allMonth % 12 > 0 ? allMonth % 12 + '个月' : '';
            return newYear + newMonth;
        },
        age: function () {
            var _self = this;
            return parseInt(_self.getMonth('1991-4') / 12);
        }
    },
    methods: {

        // 用于计算年龄和工作时间
        getMonth: function (_d) {
            let _self = this;
            let date, year, month, workYear, allMonth;
            date = new Date();
            year = date.getFullYear();
            month = date.getMonth() + 1;
            workYear = !!_d ? _d.split('-') : !_self.workYear ? [2014, 11] : _self.workYear.split('-');
            allMonth = year * 12 + month - parseInt(workYear[0]) * 12 - parseInt(workYear[1]);
            return allMonth;
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'myList',
    data() {
        return {
            name: '杰远飞',
            workYear: 2,
            workPosition: '前端开发工程师',
            age: 25,
            sex: '男',
            telphone: 13508391424,
            address: '重庆市渝北区大竹林',
            qq: 2429886596,
            mail: 'jie746635835@163.com',
            lists: [{
                title: '教育经历',
                item: [{
                    headerWidth: '33.33%',
                    header: ['2015年本科毕业', '重庆理工大学', '工业设计专业'],
                    content: ['大学学习工业设计相关课程，毕业后从事前端开发工作至今']
                }]
            }, {
                title: '工作经历',
                item: [{
                    headerWidth: '33.33%',
                    header: ['2017.03 - 至今', '中移物联网', '前端开发工程师'],
                    content: ['物联网门户/后台管理系统/监控系统/数据系统/活动专题系统', '还原设计图/数据交互/web&pc端/独立参与项目']
                }, {
                    headerWidth: '33.33%',
                    header: ['2016.02 - 2017.03', '重庆博恩软件公司', '前端开发工程师'],
                    content: ['金融/物流/进出口/保险等类型项目', '还原设计图/数据交互/web&pc端/独立参与项目']
                }, {
                    headerWidth: '33.33%',
                    header: ['2014.11 - 2016.02', '重庆昌辉旅游文化机构', '前端开发工程师'],
                    content: ['旅游类项目以及公司内部系统软件', '还原设计图/数据交互/web&pc端']
                }]
                // , {
                //     title: '专业技能',
                //     className: 'list-box-2',
                //     item: [
                //         {
                //             content: [
                //                 '工业设计出身，精通PS，有良好的审美',
                //                 '擅长HTML/CSS/JQ，对H5和CSS3有掌握',
                //                 '熟练使用原生JS，如函数化编程，面向对象，作用域，CMD&AMD等',
                //                 'gulp，webpack有所涉猎',
                //                 '使用VUE写过一些小项目(组件)，已发布到了github上，了解过REACT',
                //                 '版本管理工具：在工作中使用SVN，平时自己折腾使用GIT',
                //                 '使用过一些前端的流行库，如underscore'
                //             ]
                //         }
                //     ]
                // }
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
            }]
        };
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
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
                'gulp-webpack-template': 'gulp + webpack的一个打包项目的脚手架，支持多文件入口，以指定文件（一般是HTML文件）为入口，打包对应的（同名的）js文件。其中gulp负责打包HTML,CSS,IMG等文件，gulp主要负责打包JS等文件。但由于gulp的异步性，导致了可能存在打包JS文件失败的情况，找了很多插件也没能解决问题，所以目前已弃用'
            },
            projects: [{}, {}, {}, {}, {}, {}]
        };
    },
    beforeCreate() {

        var _self = this;
        //获取GITHUB的仓库---START
        fetch('https://api.github.com/users/2ue/repos?sort=created&per_page=100').then(function (response) {
            return response.json();
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
            console.log('parsing failed', ex);
        });
        //获取GITHUB的仓库---END
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    template: '<App/>',
    components: {
        App: __WEBPACK_IMPORTED_MODULE_1__App___default.a
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/photo.20c9107.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  "data-v-85ca9416",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  "data-v-4365cc32",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  "data-v-d2d94010",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  "data-v-6f5c9e2f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_in",
    attrs: {
      "id": "app"
    }
  }, [_c('h2', {
    staticClass: "f_tac mod_ttl container_ttl"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('my-header'), _vm._v(" "), _c('my-list'), _vm._v(" "), _c('my-project'), _vm._v(" "), _c('my-footer')], 1)])
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_in f_clear header f_topbdr"
  }, [_c('div', {
    staticClass: "header_left f_left"
  }, [_vm._m(0), _vm._v(" "), _c('span', {
    staticClass: "f_dib header_text"
  }, [_c('label', {
    staticClass: "hear_name f_dbk"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('label', {
    staticClass: "hear_year f_dbk"
  }, [_vm._v(_vm._s(_vm.workTime) + "前端开发经验")]), _vm._v(" "), _c('label', {
    staticClass: "hear_job f_dbk"
  }, [_vm._v(_vm._s(_vm.workPosition))])])]), _vm._v(" "), _c('div', {
    staticClass: "header_right f_left"
  }, [_c('p', {
    staticClass: "right_age"
  }, [_c('i', {
    staticClass: "icon iconfont icon-user"
  }), _vm._v(_vm._s(_vm.age) + "岁")]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "icon iconfont icon-sex"
  }), _vm._v(_vm._s(_vm.sex))]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "icon iconfont icon-tel"
  }), _vm._v(_vm._s(_vm.telphone))]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "icon iconfont icon-address"
  }), _vm._v(_vm._s(_vm.address))]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "icon iconfont icon-qq"
  }), _vm._v(_vm._s(_vm.qq))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "f_dib f_disselected header_photo"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(18)
    }
  })])
}]}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_in projects f_topbdr"
  }, [_c('h2', {
    staticClass: "f_tac mod_ttl"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "project_box"
  }, _vm._l((_vm.projects), function(project) {
    return _c('div', {
      staticClass: "project_list f_left"
    }, [_c('p', {
      staticClass: "project_name",
      attrs: {
        "title": project.description
      }
    }, [_c('a', {
      attrs: {
        "href": project.html_url
      }
    }, [_vm._v(_vm._s(project.name))])]), _vm._v(" "), _c('p', {
      staticClass: "project_introduction"
    }, [_vm._v(_vm._s(project.description_define))]), _vm._v(" "), _c('div', {
      staticClass: "project_inf_bottom"
    }, [_c('p', {
      staticClass: "project_hot"
    }, [_c('span', {
      staticClass: "f_dib"
    }, [_vm._v("star：\n                        "), _c('em', [_vm._v(_vm._s(project.stargazers_count))])]), _vm._v(" "), _c('span', {
      staticClass: "f_dib"
    }, [_vm._v("forks：\n                        "), _c('em', [_vm._v(_vm._s(project.forks_count))])])]), _vm._v(" "), _c('p', {
      staticClass: "f_tac project_creat_time"
    }, [_vm._v("创建于：" + _vm._s(project.created_at))])])])
  }), 0)])
},staticRenderFns: []}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_in f_clear footer f_topbdr"
  }, [_c('p', {
    staticClass: "f_tac"
  }, [_vm._v("@" + _vm._s(_vm.workYear) + "~" + _vm._s(new Date().getFullYear()))])])
},staticRenderFns: []}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_in list f_topbdr"
  }, _vm._l((_vm.lists), function(list) {
    return _c('div', {
      staticClass: "list_box f_clear",
      class: list.className
    }, [_c('div', {
      staticClass: "f_left f_tac list_ttl"
    }, [_c('span', {
      staticClass: "f_dib"
    }, [_vm._v(_vm._s(list.title))])]), _vm._v(" "), _c('div', {
      staticClass: "f_left list_content"
    }, _vm._l((list.item), function(item) {
      return _c('div', {
        staticClass: "list_i"
      }, [_c('p', {
        staticClass: "list_i_headr"
      }, _vm._l((item.header), function(headerTtl) {
        return _c('span', {
          staticClass: "f_dib",
          style: ({
            'width': item.headerWidth
          })
        }, [_vm._v(_vm._s(headerTtl))])
      }), 0), _vm._v(" "), _vm._l((item.content), function(content) {
        return _c('p', {
          staticClass: "list_i_info"
        }, [_vm._v(_vm._s(content))])
      })], 2)
    }), 0)])
  }), 0)
},staticRenderFns: []}

/***/ })
],[9]);
//# sourceMappingURL=app.4337bf92e577cbe545da.js.map