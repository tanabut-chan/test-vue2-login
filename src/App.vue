<template>
<div id="app">
  <router-view />
  <p class="footer">Tanabut Chandee</p>
</div>
</template>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.1.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.1.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
}
</style>
