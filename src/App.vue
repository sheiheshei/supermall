<template>
  <div id="app">
    <router-view></router-view>
    <TabBarMain></TabBarMain>
  </div>
</template>

<script>
  import TabBarMain from 'components/content/TabBarMain'


  export default {
    name: 'app',
    components: {
      TabBarMain,

    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>

