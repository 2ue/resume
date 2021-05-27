<template>
    <div class="m_in f_clear header f_topbdr">
        <div class="header_left f_left">
            <span class="f_dib f_disselected header_photo">
                <img src="https://dummyimage.com/160x160/000/fff">
            </span>
            <span class="f_dib header_text">
                <label class="hear_name f_dbk">{{name}}</label>
                <label class="hear_year f_dbk">{{workTime}}开发经验</label>
                <label class="hear_job f_dbk">{{workPosition}}</label>
            </span>
        </div>
        <div class="header_right f_left">
            <p class="right_age">
                <i class="icon iconfont icon-user"></i>{{age}}岁</p>
            <p>
                <i class="icon iconfont icon-sex"></i>{{sex}}</p>
            <p>
                <i class="icon iconfont icon-tel"></i>{{telphone}}</p>
            <p>
                <i class="icon iconfont icon-address"></i>{{address}}</p>
            <p>
                <i class="icon iconfont icon-qq"></i>{{qq}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'myHeader',
        data() {
            return {
                name: '杰XX',
                workYear: '2000-11',
                workPosition: '前端开发工程师',
                sex: '男',
                telphone: '1350XXXXXX',
                address: '重庆市XXXXXXX',
                qq: 'xxxxxxxxx',
                mail: 'XXXXXX@tencent.com'
            }
        },
        computed: {
            workTime: function () {
                let _self = this;
                let allMonth, newYear, newMonth;
                allMonth = _self.getMonth();
                newYear = parseInt(allMonth / 12) > 0 ? parseInt(allMonth / 12) + '年' : '';
                newMonth = (allMonth % 12) > 0 ? (allMonth % 12) + '个月' : '';
                return (newYear + newMonth);
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
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        height: 210px;
    }

    .header_left {
        width: 65%;
        height: 100%;
        background: #d8e2ec;
        font-size: 0;
    }

    .header_right {
        width: 35%;
        height: 100%;
        background: #3e5f94;
    }

    .header_right {
        color: #fff;
    }

    .header_photo {
        margin: 25px 45px 25px 30px;
        vertical-align: top;
        width: 160px;
        height: 160px;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid #fff;
    }

    .header_photo img {
        width: 100%;
        height: auto;
    }

    .header_text {
        margin: 25px 0;
        vertical-align: top;
        color: #333;
    }

    .hear_name {
        font-size: 24px;
        margin: 10px 0 20px;
        letter-spacing: 3px;
    }

    .hear_year {
        font-size: 16px;
        margin: 40px 0 10px 0;
        letter-spacing: 3px;
        color: #666;
    }

    .hear_job {
        font-size: 16px;
        margin: 10px 0 20px;
        letter-spacing: 3px;
    }

    .header_right p {
        padding: 0 40px;
        font-size: 14px;
        margin: 10px 0;
    }

    .header_right p i {
        margin: -3px 8px 0 0;
        font-size: 18px;
    }

    .header_right p i.icon-sex {
        font-size: 20px;
        margin: -2px 8px 0 0;
    }

    .header_right .right_age {
        margin-top: 35px;
    }
</style>
