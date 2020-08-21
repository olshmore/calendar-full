<template>
  <div class="alert-danger">{{ msg }}</div>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style scoped>

.alert-danger {
  color: #5a84a2;
    padding: 15px;
    letter-spacing: 1px;
}
</style>
