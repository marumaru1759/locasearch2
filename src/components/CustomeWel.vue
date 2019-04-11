<template>
	<div>
	
	<section class="hero is-info is-fullheight">

	<header>
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
                                <a class="is-white is-outlined" href="#">
                                    Home
                                </a>
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
                                <span>
                                    <router-link to="/login" class="button is-info">Login</router-link>
                                </span>
                            </span>
                         </div>
                    </div>
                </div>
            </nav>
            </div>
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

	<footer class="hero-foot">
        <div class="container">
          <nav class="navbar navbar-menu">
            <a class="column is-2 is-offset-3 navbar-item">利用規約</a> 
            <a class="column is-2 navbar-item">当サイトについて</a>
            <a class="column is-2 navbar-item">お問い合わせ</a>
          </nav>
        </div>
    </footer>
	 
	</section>
 
 </div>
</template>

<script>
//--No script
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./css/style.css"></style>

<style>
h1, h2 {
  font-weight: normal;
  color: #ffffff
}

h3 {
  font-weight: normal;
  color: #ffffff
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
