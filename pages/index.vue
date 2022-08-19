<template>
  <div class="container-fluid">
    <NavBar></NavBar>
    <CategoryList></CategoryList>
    <FloatingButton @add-category-clicked="this.addCategoryButtonClicked"></FloatingButton>

    <!-- Modals -->
    <AddCategoryModal/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import CategoryList from '~/components/CategoryList.vue';
import FloatingButton from '~/components/FloatingButton.vue';
import AddCategoryModal from '~/components/CategoryModal.vue';

export default {
  components: {
    NavBar,
    CategoryList,
    FloatingButton,
    AddCategoryModal
  },
  methods: {
    addCategoryButtonClicked: function() {
      this.$bvModal.show('add-category-modal-id');
    },
    closeAddCategoryModal: function() {
      this.$bvModal.hide('add-category-modal-id');
    }
  },
  data() {
    return {

    };
  }
}
</script>

<style>
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
  height: 100vh;
  overflow-y: scroll;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
