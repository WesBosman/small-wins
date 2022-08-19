<template>
    <div>
        <b-list-group :key="category.title" v-for="category in categories">
            <b-list-group-item>{{category.title}}</b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
export default {
    computed: {
        categories() {
            return this.$store.state.categories.list;
        }
    },
    data() {
        return {
        };
    }
}
</script>
<style>
</style>