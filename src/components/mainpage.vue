<template>
    <div>
    <h2 class="text-center">welcome user "{{useremailtext}}"</h2>
    <br>
    <b-row>
        <br>
        <b-button @click="logout" variant="outline-primary" type="submit" value="submit" class="mx-auto">Logout</b-button>
    </b-row>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "mainpage",
  data: function() {
        return { 
          useremailtext: ""
        };
      },
  //Protected Route 
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace("/")
          alert("You don't have a permission to view this page please login.")
        }
        else{
            this.useremailtext = user.email;
        }
    });
  },
  methods: {
    logout() {
       firebase
       .auth()
       .signOut()
       .then(() => {
         this.$router.replace("/");
       });
    }
  }
};
</script>