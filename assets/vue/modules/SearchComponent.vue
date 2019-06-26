<template>
    <form method="get" action="/" role="search" class="search-form">
        <label for="s" class="sr-only">{{ placeholder }}</label>
        <input
                :placeholder="placeholder"
                id="s"
                name="s"
                type="text"
                class="search-control"
                autocomplete="false"
                ref="searchControl"
        />
    
        <input type="hidden" id="post_type" name="post_type" value="product" >
        
        <button
                type="submit"
                class="search-submit"
                @click.once.prevent="openControl"
        >
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script lang="ts">
    import { Vue, Component, Prop} from 'vue-property-decorator';
    
    @Component
    export default class SearchComponent extends  Vue {
        @Prop({default: 'Zoeken naar...'})
        placeholder: string;
        
        openControl(): void {
            (<HTMLElement>this.$refs['searchControl']).classList.add('active');
        }
    }
</script>

<style scoped>
    .search-form {
        border: 1px solid theme('colors.primary');
        border-radius: 12px;
        padding: 6px;
        transition: all 325ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
        display: flex;
        
        & .search-submit {
            color: theme('colors.primary');
            margin-left: auto;
        }
        
        & .search-control {
            color: theme('colors.primary');
            transform: scale(0, 1);
            transform-origin: right center;
            transition: all 325ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
            position: absolute;
            
            &.active {
                transform: scale(1);
                position: unset;
            }
            
            &::placeholder {
                color: color(theme('colors.primary') shade(80%));
                opacity: 0.4;
            }
        }
    }
</style>
