<template>
	<swiper ref="swiper" :options="swiperOption">
		<swiper-slide>I'm Slide 1</swiper-slide>
		<swiper-slide>I'm Slide 2</swiper-slide>
		<swiper-slide>I'm Slide 3</swiper-slide>
		<swiper-slide>I'm Slide 4</swiper-slide>
		<swiper-slide>
			<button type="button" @click="toHome">开启体验之旅</button>
		</swiper-slide>
	</swiper>
</template>

<script>
	import 'css/swiper.css';
	import {swiper, swiperSlide} from 'vue-awesome-swiper';
	
	export default {
		data() {
			return {
				swiperOption: {
					// 滑动方向 x: horizontal, y: vertical
					direction: 'vertical',
					autoHeight: true,
					setWrapperSize: true,
					grabCursor: true,
					notNextTick: true
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		methods: {
			toHome() {
				this.$router.push('/home');
			},
	        onSlideChangeStart (currentPage) {
	            console.log('onSlideChangeStart', currentPage);
	        },
	        onSlideChangeEnd (currentPage) {
	            console.log('onSlideChangeEnd', currentPage);
	        }
	    }
	}
</script>

<style lang="scss">
	div.swiper-container {
		height: 100vh;
		font-size: 1.2rem;
		& .swiper-slide {
			display: -webkit-flex;
			display: flex;
			justify-content: center;
			-webkit-justify-content: center;
			align-items: center;
			-webkit-align-items: center;
			background-size: cover !important;
			color: #fff;
		}
		& .swiper-slide:nth-child(1) {
			background: url('../../resource/static/images/nature1.jpg');
		}
		& .swiper-slide:nth-child(2) {
			background: url('../../resource/static/images/nature2.jpg');
		}
		& .swiper-slide:nth-child(3) {
			background: url('../../resource/static/images/nature5.jpg');
		}
		& .swiper-slide:nth-child(4) {
			background: url('../../resource/static/images/nature4.jpg');
		}
		& .swiper-slide:nth-child(5) {
			background: url('../../resource/static/images/nature1.jpg');
			button {
				padding: .75rem 1rem;
				border: 0;
				background: none;
				color: #fff;
				font-weight: 700;
				border: 1px solid #fff;
				outline: none;
				border-radius: 5px;
				font-size: 1.4rem;
			}
		}
	}
</style>