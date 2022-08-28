<template>
  <div class="container-fluid">
    <NavBar/>
    <div class="content">
        <h1>Settings</h1>
        <b-row>
            <b-col sm="3">
                <label for="primary-color">Primary Color</label>
            </b-col>
            <b-col sm="9">
                <b-form-input id="primary-color" 
                    :value="primaryColor" 
                    type="color"
                    @change="this.updatePrimaryColor"></b-form-input>
            </b-col>
        </b-row>
    </div>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';

export default {
    computed: {
        primaryColor: function() {
            return this.$store.state.settings.primaryColor;
        }
    },
    methods: {
        updatePrimaryColor: function(value) {
            this.$store.commit('settings/update', {
                'key': 'primary-color',
                'value': value
            });
        }
    },
    components: {
        NavBar
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
.content {
    padding: 1em;
}
</style>