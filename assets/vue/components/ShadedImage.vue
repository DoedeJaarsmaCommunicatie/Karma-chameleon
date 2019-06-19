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

<style scoped>
    .shaded-image {
        box-shadow: 0 3px 6px color(theme('colors.black') a(15%)), 0 13px 16px color(theme('colors.black') a(10%));
        transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
        position: relative;
        
        & .shaded-image_title {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            margin: 0.5rem 2rem;
            transform: translateX(-50%) translateY(-50%);
            font-size: theme('fontSize.5xl');
            font-weight: 700;
            color: theme('colors.white');
            text-align: center;
            border: 2px solid theme('colors.white');
            border-radius: 5px;
            box-shadow: 0 3px 6px color(theme('colors.black') a(15%)), 0 13px 16px color(theme('colors.black') a(10%));
            transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
            text-shadow: 1px 1px color(theme('colors.black') a(20%));
            line-height: 1.2;
        }
        
        &.animated {
            &:hover{
                box-shadow: 0 3px 6px color(theme('colors.black') a(25%)), 0 13px 16px color(theme('colors.black') a(15%));
                
                & .shaded-image_title {
                    border-color: color(theme('colors.primary') blend(theme('colors.white') 60%));
                    transform: scale(1.1) translateX(-45%) translateY(-45%);
                }
            }
        }
    }
</style>
