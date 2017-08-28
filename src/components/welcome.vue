<template>
	<swiper ref="swiper" :options="swiperOption">
		<swiper-slide>I'm Slide 1</swiper-slide>
		<swiper-slide>I'm Slide 2</swiper-slide>
		<swiper-slide>I'm Slide 3</swiper-slide>
		<swiper-slide>I'm Slide 4</swiper-slide>
		<swiper-slide>I'm Slide 5</swiper-slide>
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
	        onSlideChangeStart (currentPage) {
	            console.log('onSlideChangeStart', currentPage);
	        },
	        onSlideChangeEnd (currentPage) {
	            console.log('onSlideChangeEnd', currentPage);
	        }
	    }
	}
</script>

<style>
	div.swiper-container {
		height: 100vh;
	}
</style>