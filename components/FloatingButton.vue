<template>
    <div class="floating-button-container">
        <!-- <div class="floating-button">
            <b-icon-trash-fill/>
        </div> -->
        <a class="floating-button"
            :style="style"
            href="/settings">
            <b-icon-gear/>
        </a>
        <div class="floating-button" 
            :style="style"
            @click="() => this.$emit('add-category-clicked')">
            <b-icon-plus/>
        </div>
        <!-- <div class="three-dots floating-button" 
            :class="this.slideout ? 'slideout' : ''" 
            :style="style"
            @click="onStartSlideOut">
            <b-icon-three-dots-vertical/>
        </div> -->
    </div>
</template>
<script>
import {BIconThreeDotsVertical, BIconPlus, BIconTrash, BIconGear} from 'bootstrap-vue';

export default {
    components: {
        'b-icon-gear': BIconGear,
        'b-icon-plus': BIconPlus,
        'b-icon-trash-fill': BIconTrash,
        'b-icon-three-dots-vertical': BIconThreeDotsVertical
    },
    computed: {
        style: function() {
            return {
                'background-color': this.$store.state.settings.primaryColor
            };
        }
    },
    methods: {
        onStartSlideOut() {
            this.slideout = !this.slideout;
        }
    },
    data() {
        return {
            slideout: false
        };
    }
}
</script>
<style>
@keyframes rotate {
    100% {
        transform: rotate(90deg);
    }
}
@keyframes slide-out {
    from {

    }
    to {

    }
}
.three-dots .slideout {
    -moz-transform: rotate(30deg);
    transform: rotate(30deg);
}
.floating-button-container {
    display: flex;
    gap: 0.4em;
    position: absolute;
    bottom: 0.5em;
    right: 0.5em;
    flex-direction: column;
}
.floating-button {
  color: white;
  text-align: center;
  font-size: 40px;
  line-height: 45px;
  width: 50px;
  height: 50px;
  /* background-color: #3B3561; */
  border-radius: 50%;
  box-shadow: 0px 2px 4px 2px #F7EBE8;
}
.floating-button:hover {
    cursor: pointer;
}
</style>