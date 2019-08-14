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
                classes.push('flex', 'lg:flex-col');
            }
            
            if (this.height) {
                classes.push('fix-height');
            }
            
            return classes.join(' ');
        }
    }
</script>

<style scoped lang="scss">
@import "../../styles/abstracts/all";

.itww-card {
    border: 1px solid $grey;
    
    &.flex {
        justify-content: space-around;
        padding: 0.5rem 0;
    }
    
    &.is-link {
        border: 2px solid $primary;
        border-radius: 5px;
        transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
        line-height: 1;
        
        &:hover {
            box-shadow: none;
        }
        
        @include box-shadow;
    }
    
    & .innerButton {
        margin: 0;
        background: $primary;
        color: $white;
        border-radius: 5px;
        padding: 4px 12px;
    }
}

@media screen and (min-width: map-get($screenSize, lg)) {
    .itww-card {
        
        &.fix-height {
            height: 450px;
        }
        
        &.flex {
            align-content: center;
            justify-content: center;
            padding: 2rem;
        }
        
        & .innerButton {
            margin: 2rem auto 0 auto;
        }
    }
}
</style>
