<template>
    <div class="floating-button" @click="() => this.$emit('add-category-clicked')">
      +
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    }
}
</script>
<style>
.floating-button {
  position: absolute;
  color: white;
  text-align: center;
  font-size: 29px;
  width: 44px;
  height: 44px;
  bottom: 10px;
  right: 10px;
  background-color: green;
  border-radius: 50%;
}
</style>