<template>
	<div class="search">
			<input type="text" class="searchInp" placeholder="大家都在搜索热门" />
			<img  class="searchIcon" src="../../src/assets/image/search.png" ></img>
		

	</div>

</template>
<script type="text/javascript">

	export default{
			data(){
				return {
                
				}
			}


	}


</script>
<style scoped>
	.search{width: 220px;display: inline-block;position: relative;border:1px solid #8a8a8a;}
	.searchInp{height: 20px;line-height: 20px;padding: 4px 10px 4px 10px;border:none;outline: none; }
	.searchIcon{width:20px;height: 20px;vertical-align: middle;display: inline-block;cursor: pointer;}
</style>