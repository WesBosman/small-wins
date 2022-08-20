<template>
    <div>
        <div class="heading" @click="() => $emit('clicked-category-back')">
            <span><b-icon-chevron-left/></span>
            <span>{{selectedCategory.title}}</span>
        </div>
        <b-list-group :key="item.title" v-for="item in selectedCategory.items">
            <b-list-group-item class="d-flex justify-content-between">
                <span>{{item.title}}</span> 
                <span>{{(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price))}}</span>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
import { BIconChevronLeft } from 'bootstrap-vue';

export default {
    components: {
        'b-icon-chevron-left': BIconChevronLeft
    },
    props: {
        selectedCategory: {
            typeof: Object
        }
    }
}
</script>
<style>
.heading {
    padding: 12px 20px 12px 20px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: 500;
}
</style>