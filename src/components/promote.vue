<template>
    <scroller :on-refresh="refresh" :on-infinite="infinite" refreshText="下拉刷新" noDataText="没有更多数据" snapping="true">
        <div class="warp">
            <ul>
                <li  v-for="item in dataList">
                    <app-article :article="item"></app-article>
                </li>
            </ul>

        </div>
    </scroller>
</template>

<script>
    import appArticle from 'components/article.vue';
    export default {
        data() {
            return {
                dataList: [
                    {
                        title: '文章组件01'
                    },
                    {
                        title: '文章组件02'
                    },
                    {
                        title: '文章组件03'
                    },
                    {
                        title: '文章组件04'
                    },
                    {
                        title: '文章组件05'
                    },
                    {
                        title: '文章组件06'
                    },
                    {
                        title: '文章组件07'
                    },
                    {
                        title: '文章组件08'
                    },
                    {
                        title: '文章组件09'
                    }
                ]
            }
        },
        methods: {
            refresh: function (done) {
                setTimeout(function () {
                    done();
                },3000);
            },
            infinite: function (done) {
                console.log(done);
            }
        },
        components: {
            appArticle
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .warp {
        background: #fff;
        padding: 0 1.5rem;
    }
</style>
