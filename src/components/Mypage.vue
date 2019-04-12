<template>
<div>

<section class="hero is-info is-fullheight">

	<header>
    <MyPageHeader />
  </header>

  <div class="hero-body">
      <div class="container has-text-centered">
          <div class="column is-6 is-offset-3">
                        <h1 class="title">
                            Hi {{ user.email }}
                        </h1>
                        <h2 class="subtitle">
                          your userid is {{ user.uid }}
                        </h2>
                        <a @click="googleSearch" class="button">Push</a>
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
import MyPageHeader from '@/components/molecules/MyPageHeader.vue'
import topFooter from '@/components/molecules/topFooter.vue'

export default {
  name: 'Mypage',

  components: {
    MyPageHeader,
    topFooter
  },

computed:{
		user(){
			return this.$store.state.currentUser	
		}
},

methods:{
	googleSearch(){
		return this.$store.dispatch('webScraping', 'http://weather.livedoor.com/forecast/webservice/json/v1?city=130010')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




