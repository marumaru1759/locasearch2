<template>
		<div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <h1 class="navbar-item is-size-3">
                            Locasearch
                        </h1>

                        <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-start">
                            <span class="navbar-item">
                                <router-link to="/Mypage" class="is-white is-outlined">
                                    MyPage
                                </router-link>
                            </span>
                            <span class="navbar-item">
                                <router-link to="/info" class="is-white  is-outlined">お知らせ</router-link>      
                                
                            </span>
                            <span class="navbar-item">
                                <router-link to="/users" class="is-white is-outlined">UsersList</router-link>
                            </span>
                         </div>
                         
                         <div class="navbar-end">
                            <span class="navbar-item">
                                <a class="is-white" @click="logout">{{ user.email }}</a>
                            </span>
                                <span class="navbar-item">
                                    <a class="is-white" @click="logout">Logout</a>
                                </span>
                            </span>
                         </div>
                    </div>
                </div>
            </nav>
    </div>
</template>

		

<script>
export default {
  name: 'topHeader',

  methods:{
    logout(){
        return this.$store.dispatch('logout').then((error) => {
                if(error){
                    console.log(error);
                    this.logouterror = error;
                } else {
                    console.log("success");
                    this.$router.push({ path: '/'})
                }
                
            })
            .catch(err => this.throwReject(err))
        }
    },

  computed:{
        user(){
            return this.$store.state.currentUser    
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="../css/style.css"></style>