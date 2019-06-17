<template>
    <form role="search" class="homepage-filter">
        <h3 :data-title="title" :title="title" class="homepage-filter_title">{{ title }}</h3>
        
        <div class="custom-input">
            <span>
                een Rode wijn
            </span>
            
            <ul>
                <li>Rode wijn</li>
                <li>Witte wijn</li>
            </ul>
        </div>
        
        <button
                type="submit"
                role="button"
                class="homepage-filter_button"
        >
            {{ buttonText }}
        </button>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    
    @Component({
        props: {
            title: {
                type: String,
                default: 'Ik ben op zoek naar:'
            },
            buttonText: {
                type: String,
                default: 'Toon resultaat'
            }
        }
    })
    export default class HomepageFilter extends Vue {}
</script>

<style scoped>
    .homepage-filter {
        background: theme('colors.primary');
        
        & .homepage-filter_title {
            color: theme('colors.white');
            font-weight: bold;
        }
        
        & .homepage-filter_button {
            color: theme('colors.black');
            background: theme('colors.white');
        }
        
        & .custom-input {
            width: 100%;
            background: color(theme('colors.primary') blend(theme('colors.white') 10%));
            color: theme('colors.white');
        }
    }
</style>
