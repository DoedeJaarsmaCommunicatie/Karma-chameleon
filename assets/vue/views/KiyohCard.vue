<template>
    <card-component class="kiyoh-card" tag="section">
        <header class="kiyoh_header">
            <kiyoh-grade-component :grade="kiyoh ? kiyoh.score : '9.7'"></kiyoh-grade-component>
            <span>
                <span v-if="kiyoh">{{ kiyoh.total_reviews }}</span> Beoordelingen
            </span>
        </header>
        <main class="kiyoh__speech-bubble" v-if="kiyoh">
            {{ kiyoh.reviews.pro }}
        </main>
        <a class="kiyoh__button" :href="kiyoh.url" v-if="kiyoh">
            kiyoh
        </a>
    </card-component>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CardComponent from "../components/CardComponent.vue";
    import { Kiyoh, kiyohModule } from '../store/modules/kiyoh.module';
    import TextLoader from './components/TextLoader';
    
    @Component( {
        components: { CardComponent, TextLoader }
    } )
    export default class KiyohCard extends Vue {
        kiyoh?: Kiyoh = null;
        
        async mounted() {
            this.kiyoh = await kiyohModule.fetchData();
        }
    }
</script>

<style>
    .kiyoh-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        
        & .kiyoh_header {
            display: flex;
            
            & span {
                margin-left: auto;
            }
        }
        
        & .kiyoh__speech-bubble {
            border: 1px solid color(theme('colors.grey'));
            margin-top: 0.5rem;
            border-radius: 5px;
            padding: 0.5rem;
            height: 150px;
            overflow: hidden scroll;
        }
        
        & .kiyoh__button {
            background: color(theme('colors.grey') shade(80%));
            padding: 0.25rem 0;
            margin-top: 0.5rem;
            text-align: center;
            color: theme('colors.white');
            width: 100%;
        }
    }
</style>
