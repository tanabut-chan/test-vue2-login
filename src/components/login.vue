<template>
    <div id="login">
    <h1 class="text-center">Welcome To Login Page</h1>
     <form @submit="loginWithEmail">
    <b-row>
      <b-col></b-col>
      <b-col align-v="center">
        <br>
        <h4 class="left">Email</h4>
        <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col align-v="center">
        <br>
        <h4 class="left">Password</h4>
        <b-form-input type="password" v-model="password" placeholder="Enter your password"></b-form-input>
        <br>
      </b-col>
      <b-col></b-col>
    </b-row>
      <b-row>
        <br>
        <b-button  variant="outline-primary" type="submit" value="submit" class="mx-auto">Login</b-button>
      </b-row>
     </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'login',
  data: function() {
        return { 
          email: "", 
          password: "",
          user: ""
        };
      },
      methods: {
       loginWithEmail(e) {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                 user => {
                    this.$router.replace("mainpage");
                 },
                 err => {
                    alert(err.message)
                 });
            e.preventDefault();
       }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
