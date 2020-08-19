<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="goForward">前进</button>
  </div>
</template>

<script>
export default {
  methods: {
    goForward() {
      this.$router.forward();
    },
  },
  beforeRouteEnter(to, from, next) {
    //does NOT have access to `this` component instance
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    next(false);
  }
};
</script>
