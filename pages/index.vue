<template>
  <div class="container-fluid">
    <NavBar/>
    <CategoryList v-if="!this.showCategoryItems"
      @clicked-category="this.clickedCategory"
      :categories="this.categories"
    />
    <CategoryItemList v-else 
      @clicked-category-back="this.clickedCategoryBack"
      :selectedCategory="this.selectedCategory"
    />
    <FloatingButton 
      @add-category-clicked="this.addCategoryButtonClicked"
    />

    <!-- Modals -->
    <AddCategoryModal v-if="!this.showCategoryItems"/>
    <AddCategoryItemModal v-else :selectedCategory="this.selectedCategory"/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import CategoryList from '~/components/CategoryList.vue';
import FloatingButton from '~/components/FloatingButton.vue';
import AddCategoryModal from '~/components/CategoryModal.vue';
import CategoryItemList from '~/components/CategoryItemList.vue';
import AddCategoryItemModal from '~/components/CategoryItemModal.vue';
import Footer from '~/components/Footer.vue';

export default {
  computed: {
    categories() {
        return this.$store.state.categories.list;
    }
  },
  components: {
    NavBar,
    CategoryList,
    CategoryItemList,
    FloatingButton,
    AddCategoryModal,
    AddCategoryItemModal,
    Footer,
  },
  methods: {
    clickedCategory(category) {
      const foundCategory = this.categories.find((element) => {
        return element.title === category;
      })
      this.category = category;
      this.selectedCategory = foundCategory;
      this.showCategoryItems = true;
    },
    clickedCategoryBack() {
      this.category = '';
      this.showCategoryItems = false;
    },
    addCategoryButtonClicked: function() {
      if(this.showCategoryItems){
        this.$bvModal.show('add-category-item-modal-id');
      }
      else {
        this.$bvModal.show('add-category-modal-id');
      }
    },
    closeAddCategoryModal: function() {
      this.$bvModal.hide('add-category-modal-id');
    }
  },
  data() {
    return {
      category: '',
      showCategoryItems: false,
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
