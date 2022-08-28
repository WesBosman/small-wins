<template>
    <b-navbar :style="style" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Keeping Score</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
          <b-nav-item href="/about">
            <b-icon-info/>
          </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>
<script>
import { BIconInfoFill } from 'bootstrap-vue';

export default {
    computed: {
        style: function() {
            return {
                backgroundColor: this.$store.state.settings.primaryColor + ' !important'
            };
        }
    },
    components: {
        'b-icon-info': BIconInfoFill
    },
    data() {
        return {};
    }
}
</script>