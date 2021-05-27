<template>
    <div id="app" class="m_in">
        <h2 class="f_tac mod_ttl container_ttl">{{title}}</h2>
        <div class="container">
            <my-header></my-header>
            <my-list></my-list>
            <my-project></my-project>
            <my-footer></my-footer>
        </div>
    </div>
</template>

<script>

    import MyHeader from './components/header'
    import MyFooter from './components/footer'
    import MyList from './components/list'
    import MyProject from './components/project'

    export default {
        name: 'app',
        components: {
            MyHeader,
            MyFooter,
            MyList,
            MyProject
        },
        data() {
            return {
                title: '关于我'
            }
        }
    }

</script>

<style>
    @import url('./css/rest.css');
    @import url('./assets/iconfont_ali/iconfont.css');
    body {}

    .mod_ttl {
        font-size: 24px;
        line-height: 120px;
        text-align: center;
        font-weight: bold;
    }

    /*.container_ttl{background:#fff;}
    .container{background:#FCFCFA;}*/
</style>
