<template>
    <div class="article-item">{{article.title}}</div>
</template>

<script>
    export default {
        props: ['article']
    }
</script>

<style lang="scss" scoped="scoped">
    .article-item {
        border-bottom: 1px solid #ddd;
        height: 6.5rem;
    }
</style>