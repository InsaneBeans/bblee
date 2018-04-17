<template>
<div>
	<el-container class="me-area">
		<el-main class="me-main">
			 <pre>
        个人介绍

        姓名：胡乙康

        介绍：毕业于北京科技大学计算机系，现就职于某互联网公司，从事大数据开发，主要做实时计算处理方面的工作，刚刚接触Kudu+Impala，正在学习Storm流式计算，一头雾水中...


        联系我

        QQ:1406485011@qq.com

        CSDN：https://blog.csdn.net/u010429286

        微博：https://weibo.com/hu1kang/home

			 </pre>
		</el-main>
	</el-container>
</div>
</template>

<script>
export default {
  name: 'Log',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.el-container{
	width: 700px;
}
.me-main{
	overflow: hidden;
}
.me-log-box{
	margin-left: 30%;
	margin-top: 20px;
}

</style>
