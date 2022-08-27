<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Keeping Score</b-navbar-brand>

      <b-navbar-nav>
          <b-nav-item href="/about">
            <b-icon-info/>
          </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>
<style>
/* Style */
</style>
<script>
import { BIconInfoFill } from 'bootstrap-vue';

export default {
    components: {
        'b-icon-info': BIconInfoFill
    },
    data() {
        return {};
    }
}
</script>