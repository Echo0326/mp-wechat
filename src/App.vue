<script>
	export default {
    onLaunch: function() {
      uni.getSetting({
        success(res){
          if (res.authSetting['scope.userInfo']){
            uni.getUserInfo({
              success(info){
                console.log('info====',info)
              }
            })
          }
        }
      })
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
