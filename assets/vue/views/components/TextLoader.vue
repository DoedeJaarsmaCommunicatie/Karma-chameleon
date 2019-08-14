<template>
    <span class="animated-background" :class="classList"></span>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    
    @Component
    export default class TextLoader extends Vue {
        @Prop({ default: 'lg' })
        height: string;
        
        get classList(): string {
            const classes = [];
            
            classes.push(this.height);
            
            return classes.join(' ');
        }
    }
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
        width: 100%;
        display: block;
        position: relative;
        
            height: 2rem;
        &.lg {
            height: 2rem;
        }
        
        &.md {
            height: 1rem;
        }
        
        
    }
</style>
