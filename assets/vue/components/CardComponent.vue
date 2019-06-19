<template>
    <component :is="tag" class="itww-card" :href="link" :class="classList">
        <slot></slot>
        <button v-if="innerButton" class="innerButton">
            <i class="fas fa-chevron-right"></i>
        </button>
    </component>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    
    @Component
    export default class CardComponent extends Vue {
        @Prop({
            default: 'article',
            validator: (val: string) : boolean => ['a', 'section', 'article'].indexOf(val) !== -1,
        })
        tag: string;
        
        @Prop()
        link?: string;
        
        @Prop({default: false})
        innerButton?: boolean;
        
        @Prop({default: true})
        height: boolean;
        
        get classList(): string {
            const classes: Array<string> = [];
            if (this.tag === 'a') {
                classes.push('is-link');
            }
            
            if (this.innerButton) {
                classes.push('flex', 'flex-col');
            }
            
            if (this.height) {
                classes.push('fix-height');
            }
            
            return classes.join(' ');
        }
    }
</script>

<style scoped>
@screen lg {
    .itww-card {
        border: 1px solid theme('colors.grey');
        
        &.fix-height {
            min-height: 450px;
        }
        
        &.is-link {
            border: 2px solid theme('colors.primary');
            border-radius: 5px;
            box-shadow: 0 3px 6px color(theme('colors.black') a(15%)), 0 13px 16px color(theme('colors.black') a(10%));
            transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
            
            &:hover {
                /*box-shadow: 0 3px 6px color(theme('colors.black') a(7.5%)), 0 13px 16px color(theme('colors.black') a(5%));*/
                box-shadow: none;
            }
        }
        
        &.flex {
            align-content: center;
            justify-content: center;
            padding: 2rem;
        }
        
        & .innerButton {
            margin: 2rem auto 0 auto;
            background: theme('colors.primary');
            color: theme('colors.white');
            border-radius: 5px;
            padding: 4px 12px;
        }
    }
}
</style>
