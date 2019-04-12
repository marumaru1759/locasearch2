<template>
	<div>
	
	<section class="hero is-info is-fullheight">

	<header>
		<topHeader />
	</header>

		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="column is-6 is-offset-3">
                        <h1 class="title" font-family="Verdana">
                            ロケサーチ（仮）
                        </h1>
                         <h2 class="subtitle">
                            あなたの行きたいを見つけるサイト
                        </h2>
                        <router-link to="/register" class="button is-medium is-info">新規登録</router-link>

                </div>   
			</div>
		</div>

	<footer>
		<topFooter />
    </footer>
	 
	</section>
 
 </div>
</template>

<script>
import topHeader from '@/components/molecules/topHeader.vue'
import topFooter from '@/components/molecules/topFooter.vue'


export default {
	name: 'CustomeWel',

	components: {
		topHeader,
		topFooter
	}
}
//--No script
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>

