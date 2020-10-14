<template>
  <div>
    <div id="nav">
      <router-link :to="{name:'index'}">Index</router-link> |
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

</style>