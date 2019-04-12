<template>
	<div  class="box">
        <form novalidate>
            <div class="field has-text-left">
                <label class="label">Email</label>
                  <div class="control">
                    <input 
                    	class="input is-medium"
                    	id="email"
                    	v-model="email"
                    	type="text"
                    	autocomplete="off" 
                    	placeholder="Your Email"
                    	@focus="resetError"
                    	>
                  </div>
            </div>

            <div class="field has-text-left">
                <label class="label">password</label>
                  <div class="control">
                    <input 
                    	id="password"
                    	v-model="password"
                    	class="input is-medium"
                    	type="password"
                    	placeholder="Your Password"
                    	@focus="resetError">
                    <p class="help is-danger" v-if="!validation.password.required">Password is mandatory</p>
                  </div>
            </div>
            <div>
                <loginButton
  					@click="handleClick">Login
  				</loginButton>
  			</div>	
        </form>
    </div>
</template>


<script>
import loginButton from '@/components/atoms/loginButton.vue'

const required = val => !!val.trim()

export default {
	name: 'loginForm',

	components: {
		loginButton
	},

	props: {
		onlogin:{
			type: Function,
			required: true
		}
	},

	data (){
		return{
			email: '',
			password: '',
			progress: false,
			error: ''
		}
	},

	computed: {
		validation(){
			return{
				password: {
					required: required(this.password)
				}
			}
		}
	},


	methods: {
		resetError(){
			this.error = ''
		},

		handleClick(ev){
			this.progress = true //
			this.error = ''

			this.$nextTick(() => {
				this.onlogin({ email: this.email, password: this.password })
				.catch(err => {
					this.error = err.message
				})
				.then(() => {
					this.progress = false
				})
			})

		}
	}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="../css/style.css"></style>




