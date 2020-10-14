<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Nav></Nav>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/views/nav.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Nav
  }
};
</script>
