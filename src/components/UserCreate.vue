<template>
   <div>

    <section class="hero is-info is-fullheight">
      <div class="hero-head">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title">会員登録</h3>
            <p class="subtitle">Please register to proceed.</p>
            <div  class="box">
              <form v-on:submit.prevent="userRegister">
                
                <div class="field has-text-left">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input is-medium" v-model="newemail" type="email" placeholder="Your Email" autofocus="">
                  </div>
                </div>

                <div class="field has-text-left">
                  <label class="label">password</label>
                  <div class="control">
                    <input class="input is-medium" v-model="newPass" type="password" placeholder="Your Email">
                    <p class="help is-danger" v-if="loginerror">{{ loginerror}}</p>
                  </div>
                </div>
                
                <button class="button is-info is-medium">Register</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
</template>

<script>
export default {

data() {
        return { 
                         newemail: '',
                         newPass: '',
                         loginerror: ''
                        }
        },

methods:{
        userRegister(){
                // 'userRegister' mutation is committed here
                        this.$store.dispatch('userRegister', {
                                email: this.newemail,
                                password: this.newPass
                        }).then((error) => {
                                if(error) { 
                                        console.log(error);
                                        this.loginerror = error;
                                } else {
                                        console.log("success");
                                        this.$router.push('Mypage');
                                }
                         
                        });              
         
        }

}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>