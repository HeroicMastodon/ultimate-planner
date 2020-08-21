<template>
    <div ref='container' class="pop-over">
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </div>
    <div class="overlay"></div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
    name: 'AFModal',
    props: {
        
    },
    setup() {

        return {
        }
    },
})
</script>

<style lang="scss" scoped>
.pop-over {
    // margin: 1em;
    width: calc(100% - 2em);
    padding: 1em;
    position: absolute;
    left: 50%;
    top: 4em;
    transform: translate(-50%);
    z-index: 12;
    background: white;
    min-width: 200px;
    min-height: 200px;
}

.overlay {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .5;
}
</style>