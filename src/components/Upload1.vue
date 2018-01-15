<template>
  <div class='content'>
    <p><label for="">{{msg}}：</label></p>
   <div class="pictur">
       <div class="photos" id="photos">
         <div v-for='(value,index) in lists' class="photosImg">
           <img :src="value">
           <img :src="del" alt="" class='del' @click='delImg(index)'>
         </div>
         <img :src="downLoad" alt="" @click="chooseImage" v-show='upload'/>
       </div>
  </div>
  </div>
</template>


<script>
  import downLoad from '@/assets/img/download.png'
  import del from './del.png'
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
            upload:true,
	  	del:del
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
                  _this.$store.state.upload.loading = false;
                  alert(JSON.stringify(error));
              }
        });
      },
		delImg(index){
			this.imgList.splice(index,1);
			this.lists.splice(index,1);
			this.count_img ++;
			if(this.count_img>0){
				this.upload = true
			}
		},
      wxuploadImage(localIds){
            var _this = this;
            var localId = localIds.pop();
            //解决IOS无法上传的坑
            if (localId.indexOf("wxlocalresource") != -1) {
                localId = localId.replace("wxlocalresource", "wxLocalResource");
            }
            _this.$store.state.upload.loading = true;
            wx.uploadImage({
                localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 0, // 默认为1，显示进度提示
                success: function (res) {
                   _this.$store.state.upload.loading = false;
                    var mediaId = res.serverId; // 返回图片的服务器端ID
//                    $("#chooseImage").attr("src",localIds);
                    if(mediaId){
                      _this.count_img--;
                      _this.imgList.push(mediaId)
                      _this.lists.push(localId);
                    }
                    if(_this.count_img==0){
                        _this.upload = false;
                    }
                    if(localIds.length > 0){
                        _this.wxuploadImage(localIds);
                    }
                },
                fail: function (error) {
                    _this.$store.state.upload.loading = false;
                    alert(JSON.stringify(error));
                }

            });
      }

    }
  }
</script>

<style>
.photosImg {
  display: inline-block;
  width: 55px;
  height: 55px;
  margin-left: 5PX;
  margin-bottom: 5px;
  position: relative;
}
.content .pictur .photosImg img.del{
  position: absolute;
  z-index: 40;
  right: 0;
  top: 0;
	width: 15px;	
	height: 15px;
	z-index: 40
}
</style>