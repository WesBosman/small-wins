<template>
    <div>
        <b-list-group :key="category.title" v-for="category in categories">
            <b-list-group-item class="d-flex justify-content-between" 
                @click="() => $emit('clicked-category', category.title)">
                {{category.title}} 
                <span>
                    <span>{{(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(category.total))}}</span>
                    <b-icon-chevron-right/>
                </span>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
import { BIconChevronRight } from 'bootstrap-vue';

export default {
    props: {
        categories: {
            typeof: Array
        }
    },
    components: {
        'b-icon-chevron-right': BIconChevronRight
    },
    data() {
        return {

        };
    }
}
</script>
<style>
</style>