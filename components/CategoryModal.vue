<template>
    <b-modal id="add-category-modal-id" title="Add Category" centered>
        <b-form>
            <b-form-group 
                id="title" 
                label="Title"
                label-for="title"
                description="A title for your category">
                <b-form-input v-model="title"></b-form-input>
            </b-form-group>
        </b-form>
        <div class="flex" slot="modal-footer">
            <b-button type="reset" @click="onReset" variant="danger">Reset</b-button>
            <b-button type="submit" @click="onSubmit" variant="primary">Submit</b-button>
        </div>
    </b-modal>
</template>
<script>
export default {
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.$store.commit('categories/add', this.title)
            this.$bvModal.hide('add-category-modal-id');
            this.title = '';
        },
        onReset() {
            this.title = '';
        }
    },
    data() {
        return {
            categories: [],
            title: ''
        };
    }
}
</script>