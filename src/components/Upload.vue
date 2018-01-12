<template>
	<div class='content'>
		<p><label for="">{{msg}}：</label></p>
	 <div class="pictur">
         <div class="photos" id="photos">
         <img :src="v"  v-for='v in lists'>
         <img :src="downLoad" alt="" @click="chooseImage" v-show='upload'/>
       </div>
  </div>
	</div>
</template>


<script>
	import downLoad from '@/assets/img/download.png'
	export default {
		data(){
			return {
				size: 0,
				imgList:[],
        lists:[],
				msg:'',
				downLoad:'',
				msgs:'',
        count_img:9,
        upload:true
			}
		},
		props:['list','title','name'],
		created(){
			this.downLoad = downLoad;
			this.msg = this.$props.title;
			this.imgList = this.$props.list;
			this.msgs = this.$props.name;
		},
		methods:{
      chooseImage(){
        var _this = this;
          wx.chooseImage({
            count: this.count_img, // 默认9
//            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                _this.wxuploadImage(localIds);
            },
            fail: function (error) {
                  this.$store.state.upload.loading = false;
                  alert(JSON.stringify(error));
              }
        });
      },
      wxuploadImage(){
          var _this = this;
            var localId = localIds.pop();
            //解决IOS无法上传的坑
            if (localId.indexOf("wxlocalresource") != -1) {
                localId = localId.replace("wxlocalresource", "wxLocalResource");
            }
            this.$store.state.upload.loading = true;
            wx.uploadImage({
                localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 0, // 默认为1，显示进度提示
                success: function (res) {
                   this.$store.state.upload.loading = false;
                    var str_img="";
                    var mediaId = res.serverId; // 返回图片的服务器端ID
                    _this.imgList.push(res.serverId)
//                    $("#chooseImage").attr("src",localIds);
                    if(str_img!=""){
                        _this.count_img--;
                        _this.lists.push(localId)
                    }
                    if(_this.count_img==0){
                        this.upload = false
                    }
                    if(localIds.length > 0){
                        wxuploadImage(localIds);
                    }
                },
                fail: function (error) {
                    this.$store.state.upload.loading = false;
                    alert(JSON.stringify(error));
                }

            });
      }

		}
	}
</script>

<style>

</style>