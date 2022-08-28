<template>
    <div class="floating-button-container">
        <!-- <div class="floating-button">
            <b-icon-trash-fill/>
        </div> -->
        <a class="floating-button link button-two"
            :class="this.slideout ? 'slideout' : ''"
            :style="style"
            href="/settings">
            <b-icon-gear/>
        </a>
        <div class="floating-button button-one" 
            :class="this.slideout ? 'slideout' : ''"
            :style="style"
            @click="() => this.$emit('add-category-clicked')">
            <b-icon-plus/>
        </div>
        <div class="three-dots floating-button" 
            :class="this.slideout ? 'slideout' : ''" 
            :style="style"
            @click="onStartSlideOut">
            <b-icon-three-dots/>
        </div>
    </div>
</template>
<script>
import {BIconThreeDots, BIconPlus, BIconTrash, BIconGear} from 'bootstrap-vue';

export default {
    components: {
        'b-icon-gear': BIconGear,
        'b-icon-plus': BIconPlus,
        'b-icon-trash-fill': BIconTrash,
        'b-icon-three-dots': BIconThreeDots
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
@keyframes button-one-slide-up {
    0% {
        bottom: 0.5em;
    }
    100% {
        bottom: 2em;
    }
}
@keyframes button-two-slide-up {
    0% {
        bottom: 0.5em;
    }
    100% {
        bottom: 3.5em;
    }
}
.button-one.slideout {
    animation: button-one-slide-up 0.6s ease;
    animation-fill-mode: both;
}
.button-two.slideout {
    animation: button-two-slide-up 0.55s ease;
    animation-fill-mode: both;
}
.three-dots {
    transition: all 0.5s ease;
    transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    visibility: visible;
}
.three-dots.slideout {
    transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transition-duration: 0.5s;
    transition-timing-function: ease;
}
.floating-button {
    position: absolute;
    bottom: 0.5em;
    right: 0.5em;
    color: white;
    text-align: center;
    font-size: 40px;
    line-height: 45px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 2px #F7EBE8;
}
.floating-button:hover {
    cursor: pointer;
}
.link, .link:hover {
    text-decoration: none;
    color: white;
}
</style>