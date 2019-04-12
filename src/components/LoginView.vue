<template>
	<div>
	 <section class="hero is-info is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title">Login</h3>
            <p class="subtitle">Please login to proceed.</p>
            <div>
            	<loginForm :onlogin="handleLogin" />
            	<p class="help is-danger is-medium" v-if="loginerror">{{ loginerror }}</p>
            </div>
          </div>
        </div>
      </div>
     </section>
   	</div>
</template>

<script>
import loginForm from '@/components/molecules/loginForm.vue'

export default {
	name: 'LoginView',

	components:{
		loginForm
	},

	data() {
	return { 
			 loginerror: ''
			}
	},

methods:{
	handleLogin(authInfo){
		return this.$store.dispatch('login', authInfo)
			.then((error) => {
				if(error){
					console.log(error);
					this.loginerror = error;
				} else {
					console.log("success");
					this.$router.push({ path: '/Mypage'})
				}
				
			})
			.catch(err => this.throwReject(err))
	},

	throwReject (err) { return Promise.reject(err)}
	
	}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>




