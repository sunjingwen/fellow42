<template>
  <div id="app">
    <common-header></common-header>
    <div id="container">
      <router-view />
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
};
</script>

<style lang="scss">
#container {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
