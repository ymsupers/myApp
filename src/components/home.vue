<template>
	<section class="container">
		<div class="layout box">
			<div class="box-item">
				<!-- START: 头部开始 -->
				<app-header :siteName="'今日头条'"></app-header>
				<!-- START: ok -->
			</div>
			<div class="box-item content">
				<router-view></router-view>
			</div>
			<div class="box-item">
				<!-- START: 脚部开始 -->
				<app-footer></app-footer>
				<!-- START: ok -->
			</div>
		</div>
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

<style lang="scss" scoped="scoped">
	.layout {
		-webkit-box-orient: vertical;
		-moz-box-orient: vertical;
		box-orient: vertical;
		height: 100vh;
		.box-item {
			&:after {
				clear: both;
			}
		}
		.content {
			-webkit-box-flex: 10;
			overflow: hidden;
			background: #eee;
			position: relative;
		}
	}
</style>