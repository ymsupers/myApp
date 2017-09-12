<template>
	<div id="header">
		<header>
			<div class="box box-pack-start">
				<div class="box-item logo">
					<strong>{{siteName || '今日头条'}}</strong>
				</div>
				<div class="box-item search">
					<i-input placeholder="迪迦奥特曼 | 漫游" />
				</div>
				<div class="box-item qr-code">
					<!--<i class="material-icons">&#xE853;</i>-->
					<i class="material-icons">&#xE3C2;</i>
				</div>
			</div>
		</header>
		<swiper ref="swiper" :options="swiperOption">
			<swiper-slide :class="path == 'promote' ? 'active' : ''"><span @click="handover('promote')">推荐</span></swiper-slide>
			<swiper-slide :class="path == 'hot' ? 'active' : ''"><span @click="handover('hot')">热点</span></swiper-slide>
			<swiper-slide :class="path == 'region' ? 'active' : ''"><span @click="handover('region')">杭州</span></swiper-slide>
			<swiper-slide :class="path == 'video' ? 'active' : ''"><span @click="handover('video')">视频</span></swiper-slide>
			<swiper-slide :class="path == 'society' ? 'active' : ''"><span @click="handover('society')">社会</span></swiper-slide>
			<swiper-slide :class="path == 'disport' ? 'active' : ''"><span @click="handover('disport')">娱乐</span></swiper-slide>
			<swiper-slide :class="path == 'technology' ? 'active' : ''"><span @click="handover('technology')">科技</span></swiper-slide>
			<swiper-slide>问答</swiper-slide>
			<swiper-slide>汽车</swiper-slide>
			<swiper-slide>财经</swiper-slide>
			<swiper-slide>军事</swiper-slide>
			<swiper-slide>体育</swiper-slide>
			<swiper-slide>段子</swiper-slide>
		</swiper>
	</div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
	import iInput from 'iview/src/components/input';
	export default {
		props: ['siteName'],
		components: {
		    iInput,
            swiper,
            swiperSlide
		},
		data() {
		    return {
		        path: 'promote',
                swiperOption: {
					direction: 'horizontal',
                    autoHeight: true,
                    slidesPerView: 6,
                    paginationClickable: true,
                    spaceBetween: 0
				}
			}
		},
        methods: {
		    handover: function (uri) {
		        this.$router.push({path: uri});
			}
		},
		mounted() {
		    let {path} = this.$router.history.current;
		    this.$data.path = path.replace(/\//, '');
		},
        watch: {
		    '$route': function ({path}) {
		        this.$data.path = path.replace(/\//, '');
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#header {
		width: 100vw;
		height: auto;
		border-bottom: 1px solid #ddd;
		&:after {
			content: '';
			clear: both;
		}
		header {
			height: 3.6rem;
			background: #DC143C;
			color: #fff;
			.box {
				height: inherit;
				-webkit-box-align: center;
				-moz-box-align: center;
			}
			.box-item {
				text-align: center;
			}
			.logo {
				-webkit-box-flex: 2;
				-moz-box-flex: 2;
			}
			.search {
				-webkit-box-flex: 4;
				-moz-box-flex: 4;
			}
			.qr-code {
				-webkit-box-flex: 2;
				-moz-box-flex: 2;
				i {
					line-height: inherit;
				}
			}
		}
		.swiper-container {
			height: auto;
			background: #fff;
			.swiper-slide {
				background: none;
				color: #333;
				line-height: 2.4rem;
				&.active {
					color: red;
					font-weight: bold;
				}
			}
		}
	}
</style>