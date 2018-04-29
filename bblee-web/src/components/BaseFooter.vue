<template>
	<el-footer class="me-area">
    <div>
    </div>
		<div class="me-footer">
      Copyright © 2018 bblee版权所有 | 备案号:京ICP备18020697号
		</div>
	</el-footer>

</template>

<script>

export default {
  name: 'BaseFooter',
  data (){
  	return {
  	}
  },
  methods:{
	},
	mounted() {
  }
}
</script>

<style>

.el-footer {
  width: 100%;
  position:absolute;
  bottom:0;
  left:0;
  /*height:20px;*/
  z-index: 1024;
}
.me-footer{
  text-align: center;
  line-height: 15px;
  font-size: 14px;
}

.me-login-design-color{
  color: #5FB878 !important;
}

</style>
