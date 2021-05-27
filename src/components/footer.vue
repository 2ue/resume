<template>
    <div class="m_in f_clear footer f_topbdr">
        <p class="f_tac">@{{ workYear }}~{{ new Date().getFullYear() }}</p>
    </div>
</template>

<script>

    export default {
        name: 'myFooter',
        data() {
            return {
                workYear: 2015
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        height: 50px;
        background: #F5F5F5;
        margin-top: 50px;
    }

    .footer p {
        line-height: 50px;
        font-size: 14px;
        color: #666;
        letter-spacing: 1px;
        margin-top: 3px;
    }
</style>
