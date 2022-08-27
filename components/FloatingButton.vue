<template>
    <div class="floating-button" 
        @click="() => this.$emit('add-category-clicked')">
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
  font-size: 40px;
  line-height: 45px;
  width: 50px;
  height: 50px;
  bottom: 0.5em;
  right: 0.5em;
  background-color: #3B3561;
  border-radius: 50%;
}
.floating-button:hover {
    cursor: pointer;
}
</style>