<template>
	<section class="container">
		<!-- START: 头部开始 -->
		<app-header :siteName="'今日头条'"></app-header>
		<!-- START: ok -->
		<router-view></router-view>
		<!-- START: 脚部开始 -->
		<app-footer></app-footer>
		<!-- START: ok -->
	</section>
</template>

<script>
	import appHeader from 'components/header.vue';
	import appFooter from 'components/footer.vue';
	export default {
		components: {
			appHeader,
            appFooter
		}
	}
</script>

<style>
</style>