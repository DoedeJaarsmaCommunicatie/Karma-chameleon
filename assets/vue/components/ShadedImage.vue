<template>
    <figure class="shaded-image" :class="classes">
        <a :href="link" target="_self" class="shaded-image_link">
            <img :src="image" :alt="alt" class="shaded-image_image">
            <figcaption v-if="title" class="shaded-image_title">
                {{ title }}
            </figcaption>
        </a>
    </figure>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    
    @Component
    export default class ShadedImage extends Vue {
        @Prop()
        title?: string;
        
        @Prop()
        link?: string;
        
        @Prop({required: true})
        image: string;
        
        @Prop()
        alt?: string;
        
        classList: Array<string> = [];
        
        get classes(): string {
            if(this.link) {
                this.classList.push('animated')
            }
            
            return this.classList.join(' ');
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/abstracts/all";
    
    .shaded-image {
        transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
        position: relative;
        & .shaded-image_title {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            transform: translateX(-50%) translateY(-50%);
            font-size: map-get($fontSize, 3xl);
            font-weight: 700;
            color: $white;
            text-align: center;
            border: 2px solid $white;
            border-radius: 5px;
            transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
            text-shadow: 1px 1px adjust-color($black, $alpha: decimate(20));
            line-height: 1.2;
            
            @include box-shadow;
        }
    
        &.animated {
            &:hover{
                box-shadow: none;
                
                & .shaded-image_title {
                    border-color: mix($primary, $white, percentage(60));
                    transform: scale(1.1) translateX(-45%) translateY(-45%);
                }
            }
        }
        @include box-shadow;
    }
    
    @media screen and (min-width: map-get($screenSize, lg)) {
        .shaded-image {
            height: 100%;
            & .shaded-image_image {
                height: 100%;
                width: auto;
                object-fit: cover;
                max-height: 550px;
            }
            
            & .shaded-image_title {
                font-size: map-get($fontSize, 5xl);
            }
        }
    }

</style>
