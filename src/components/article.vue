<template>
    <div class="article">
        <div v-if="article.format == 1" class="article-item article-plate-1">
            <div class="article-content">
                <span class="img"></span>
                <h3>{{article.title}}</h3>
            </div>
            <div class="meta">
                <span>发布日期:{{article.addtime}}</span>
                <span>作者:{{article.author}}</span>
            </div>
        </div>
        <div v-if="article.format == 2" class="article-item article-plate-2">
            <div class="article-content">
                <h3>{{article.title}}</h3>
                <div class="img box">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="meta">
                <span>发布日期:{{article.addtime}}</span>
                <span>作者:{{article.author}}</span>
            </div>
        </div>
        <div v-if="article.format == 3" class="article-item article-plate-3">
            <div class="artilce-content">
                <h3>{{article.title}}</h3>
                <div class="video">

                </div>
            </div>
            <div class="meta">
                <span>发布日期:{{article.addtime}}</span>
                <span>作者:{{article.author}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['article']
    }
</script>

<style lang="scss" scoped="scoped">
    .article-item {
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        padding: .7rem 0;
        position: relative;
    }
    .article-plate-1 {
        background: #fff;
        h3 {
            font-size: 1.2rem;
        }
        .article-content {
            padding-right: 7.5rem;
            height: 5rem;
            span.img {
                width: 6rem;
                height: 5rem;
                background: #ddd;
                display: inline-block;
                position: absolute;
                right: 0;
            }
        }


    }
    .article-plate-2 {
        .img {
            div {
                width: 7rem;
                height: 6rem;
                background: #eee;
                &:nth-child(2) {
                    margin:0 1.3rem;
                }
            }
        }
    }

    .article-plate-3 {
        .artilce-content {
            .video {
                height: 10rem;
                background: #eee;
            }
        }
    }

    .meta {
        margin-top: .2rem;
        span{
            &:first-child {
                color: #999;
            }
            &:last-child {
                float: right;
            }
        }
    }


</style>