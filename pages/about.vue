<template>
  <div class="container-fluid">
    <NavBar/>
    <div class="content">
        <h1>Keeping Score</h1>
        <p>
            This app was created to help me keep a running total of what I spend my money on.
        </p>
        <p>
            This app is meant to be very simple. All the data created by this site is stored in your browser. I do not track or store your data or anything about you.
        </p>
        <p>
            Enjoy!
        </p>
        <h2>Getting Started</h2>
        <ol>
            <li>Click the floating action button on the home screen then click the plus button to create a category.</li>
            <li>Once your category is created click the name of the category. This will take you to the category screen.</li>
            <li>Click the floating action button on the category screen then click the plus button to add items to it.</li>
            <li>Fill in the name and price of the item and click submit to add it to the category.</li>
            <li>Navigate back to the home screen by clicking the link in the header bar or clicking the category name at the top of the category screen.</li>
            <li>You should see a running total for each category you create on the home screen.</li>
        </ol>
        <h2>Settings</h2>
        <p>I have always liked apps that let me change themes. I'm going to try to keep that in mind as I build this application. I want you to be able to adjust this site to your liking. The settings will be stored in your browser using local storage.</p>
        <p>Some of the settings might not update immediately. Try picking the settings you want then navigating to the home page to see their affect.</p>
    </div>
    
    <Footer/>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        NavBar,
        Footer
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