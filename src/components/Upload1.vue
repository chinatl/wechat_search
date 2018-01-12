<template>
	<div class='content'>
		<p><label for="">{{msg}}：</label></p>
		<div>
		<div class='imgs'  v-for="(item,index) of imgList">
			<img src="./del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
			<img :src="item.file.src">
		</div>
		 <div class='imgs'>
		 	<input type="file"
		 	@change="fileChange($event)"
		 	:name='msgs'
		  class='file'>
		 	<img :src="downLoad" alt="" class="downLoad">
		 </div>
		</div>
	</div>
</template>


<script>
	import downLoad from '@/assets/img/download.png'
	import request from 'superagent'
	import URL from '@/config.js'
	export default {
		data(){
			return {
				size: 0,
				imgList:[],
				msg:'',
				downLoad:'',
				msgs:'',
				src_list:[],
			}
		},
		props:['list','title','name'],
		created(){
			this.downLoad = downLoad;
			this.msg = this.$props.title;
			this.src_list = this.$props.list;
			this.msgs = this.$props.name;
		},
		methods:{
		  	fileChange(el) {
              if (!el.target.files[0].size) return;
              	this.fileList(el.target);
              	el.target.value = ''
          	},
    			fileList(fileList) {
            if(this.imgList.length >=9){
              return 
            }
              let files = fileList.files;
              for (let i = 0; i < files.length; i++) {
                  //判断是否为文件夹
                  if (files[i].type != '') {
                      this.fileAdd(files[i]);
                  } else {
                      //文件夹处理
                      this.folders(fileList.items[i]);
                  }
              }
			},
			 folders(files) {
              let _this = this;
              //判断是否为原生file
              if (files.kind) {
                  files = files.webkitGetAsEntry();
              }
              files.createReader().readEntries(function (file) {
                  for (let i = 0; i < file.length; i++) {
                      if (file[i].isFile) {
                          _this.foldersAdd(file[i]);
                      } else {
                          _this.folders(file[i]);
                      }
                  }
              })
          },
		 foldersAdd(entry) {
              let _this = this;
              entry.file(function (file) {
                  _this.fileAdd(file)
              })
          },
		 fileAdd(file) {
              //总大小
              this.size = this.size + file.size;
              //判断是否为图片文件
              if (file.type.indexOf('image') == -1) {
                  file.src = 'wenjian.png';
                  this.imgList.push({
                      file
                  });
              } else {
                  let reader = new FileReader();
                  reader.vue = this;
                  reader.readAsDataURL(file);
                  reader.onload = function () {
                      file.src = this.result;
                      this.vue.imgList.push({
                          file
                      })
				  this.vue.$store.state.upload.loading = true;
//				  setTimeout(e=>{
//					this.vue.$store.state.upload.loading = false;
//				  	this.vue.src_list.push(file.src);
//				  },200)
				  var formData = new FormData();
				  formData.append('pic',file);
					request
					.post(URL+'image')
					.set("Authorization", "Bearer " + localStorage.getItem('token'))
					.send(formData)
					.then(res=> {
						if(res.body.code==0){
							this.vue.src_list.push(res.body.data);
							this.vue.$store.state.upload.loading = false;
						}
					})
				  }
              }
          },
		 fileDel(index) {
              this.size = this.size - this.imgList[index].file.size;//总大小
              this.imgList.splice(index, 1);
              this.src_list.splice(index, 1);
          }
		}
	}
</script>

<style>

</style>