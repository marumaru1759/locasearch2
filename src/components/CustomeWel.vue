<template>
	<div>
	<header class="nav">
        <div class="nav-left">
        	<span class="nav-item">
        		<span class="fa fa-language"></span>Locasearch
        	</span>
        </div>
        <div class="nav-right">
        	<span class="nav-item">
        		<router-link to="/login" class="fa fa-user">ログイン</router-link>
			</span>
		</div>

	<section class="hero">
		<div class="hero-body">
				<div class="conatainer">
					<h1 class="title">Locasearch</h1>
					<h2 class="subtitle">あなたの行きたいを見つけるサイト</h2>
				</div>
			</div>
		</div>
	</header>

	<section class="level">
		<div class="level-right">
			<div class="level-item tabs">
				<ul>
					<li class"is-active">
						 <router-link to="/info" class="nav-link">お知らせ</router-link></li>
						 <li><router-link to="/mypage" class="nav-link">マイページ</router-link></li>
						 <li><router-link to="/users" class="nav-link">UsersList</router-link></li>
				</ul>
			</div>
		</div>
	</section>

	<main class="columns">
		<div class="content">
        	<h1>ロケサーチ（仮）</h1>
        	<p>あなたの行きたいを見つけるサイト</p>
			<router-link to="/register" class="button">新規登録</router-link>
        </div>
     </main>

	<footer class="container">
        <div class="content">
          <nav class="nav justify-content-center">
            <a class="nav-link" href="#">利用規約</a> 
            <a class="nav-link" href="#">当サイトについて</a>
            <a class="nav-link" href="#">お問い合わせ</a>
          </nav>
        </div>
     </footer>
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
