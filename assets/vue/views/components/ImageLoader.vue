<template>
    <span class="animated-background"></span>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class ImageLoader extends Vue {}
</script>

<style scoped lang="scss">
    @import "../../../styles/abstracts/all";
    
    @keyframes placeHolderShimmer{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }
    
    .animated-background {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
        height: 200px;
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
</style>
