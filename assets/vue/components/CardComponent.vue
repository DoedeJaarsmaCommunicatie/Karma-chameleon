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

        
        get classList(): string {
            const classes: Array<string> = [];
            if (this.tag === 'a') {
                classes.push('is-link');
            }
            
            if (this.innerButton) {
                classes.push('flex', 'flex-col');
            }
            
            return classes.join(' ');
        }
    }
</script>

<style scoped>
@screen lg {
    .itww-card {
        border: 1px solid theme('colors.grey');
        min-height: 450px;
        
        &.is-link {
            border: 1px solid theme('colors.primary');
            border-radius: 5px;
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
