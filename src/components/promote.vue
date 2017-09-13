<template>
    <scroller ref="myscroll" :on-refresh="refresh" :on-infinite="infinite"  refreshText="下拉刷新" noDataText="没有更多数据" height="449.2px">
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
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 1,
                        author: '晓峰',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 2,
                        author: '晓峰',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 3,
                        author: '晓峰',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 1,
                        author: '小芳',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 2,
                        author: '小刚',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 1,
                        author: '小红',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 3,
                        author: '晓峰',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 2,
                        author: '晓峰',
                        addtime: '17/09/12'
                    },
                    {
                        title: 'React组件生命周期ReactAJAXReact表单与事件React Refs',
                        format: 1,
                        author: '晓峰',
                        addtime: '17/09/12'
                    }
                ]
            }
        },
        mounted: function () {
            this.bottom = 9;
        },
        methods: {
            refresh: function (done) {
                setTimeout(function () {
                    done();
                },3000);
            },
            infinite: function (done) {
                var self = this;
                setTimeout(function () {
                    console.log('下拉加载更多', self.bottom);
                    var start = self.bottom + 1;
                    for (var i = start; i < start + 10; i++) {
                        self.dataList.push({
                            title: i + '--这里是随机生成的数据',
                            format: Math.ceil(Math.random() * 3),
                            author: 'xxx',
                            addtime: 'xxx'
                        })
                    }
                    self.bottom = self.bottom + 10;
                    done();
                }, 1500);
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
