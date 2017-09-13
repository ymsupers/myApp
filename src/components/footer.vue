<template>
    <div id="footer">
        <footer class="box">
            <div class="box-item">
                <i class="material-icons">&#xE88A;</i>
                <span>首页</span>
            </div>
            <div class="box-item">
                <i class="material-icons">&#xE038;</i>
                <span>西瓜视频</span>
            </div>
            <div class="box-item">
                <i class="material-icons">&#xE1BD;</i>
            </div>
            <div class="box-item">
                <i class="material-icons">&#xE333;</i>
                <span>小视频</span>
            </div>
            <div class="box-item">
                <i class="material-icons">&#xE8A6;</i>
                <span>未登录</span>
            </div>
        </footer>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped="scoped">
    #footer {
        border-top: 1px solid #dcdcdc;
        height: auto;
        background: #f1f1f1;
        padding-top: .5rem;
        footer {
            -webkit-box-align: center;
            -moz-box-align: center;
            .box-item {
                -webkit-box-flex: 1;
                -moz-box-flex: 1;
                text-align: center;
                i{
                    margin-bottom: -0.2rem;
                }
                i, span {
                    display: block;
                    color: #666;
                }
            }
        }
    }
</style>