<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<button open-type="getUserInfo" @getuserinfo="getUserInfo">获取授权信息</button>
		</view>
		<view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				imgs:[],
				videos:[]
			}
		},
		onLoad() {

		},
		methods: {
      getUserInfo(info){
        console.log(info)
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		text-align: center;
		height: 400rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.img{
		image{
			width: 400rpx;
			height: 400rpx;
		}
	}
</style>
