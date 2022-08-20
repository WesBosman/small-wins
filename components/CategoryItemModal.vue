<template>
    <b-modal id="add-category-item-modal-id" 
        :title="'Add Category Item to' + this.selectedCategory.title" 
        centered>
        <b-form>
            <b-form-group 
                id="title" 
                label="Title"
                label-for="title"
                description="A title for your category item">
                <b-form-input v-model="title"></b-form-input>
            </b-form-group>
            <b-form-group 
                id="price" 
                label="Price"
                label-for="price"
                description="A price for your category item">
                <b-form-input v-model="price"></b-form-input>
            </b-form-group>
        </b-form>
        <div slot="modal-footer">
            <b-button type="reset" @click="onReset" variant="danger">Reset</b-button>
            <b-button type="submit" @click="onSubmit" variant="primary">Submit</b-button>
        </div>
    </b-modal>
</template>
<script>
export default {
    props: {
        selectedCategory: {
            typeof: Object
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.$store.commit('categories/update', {
                selectedCategory: this.selectedCategory, 
                item: {
                    title: this.title,
                    price: this.price
                }
            });
            this.$bvModal.hide('add-category-item-modal-id');
            this.title = '';
            this.price = null;
        },
        onReset() {
            this.title = '';
            this.price = null;
        }
    },
    data() {
        return {
            title: '',
            price: null
        };
    }
}
</script>