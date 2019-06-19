<template>
    <card-component class="kiyoh-card" tag="section">
        <header class="kiyoh_header">
            <kiyoh-grade-component></kiyoh-grade-component>
            <span>
                349 Beoordelingen
            </span>
        </header>
        <main class="kiyoh__speech-bubble">
            Wat je ziet is wat je krijgt.
            Prima verpakt.

            De wijn was van zeer goede kwaliteit, ik heb deze geschonken op een verjaardagsfeest. Er waren meerdere mensen die vroegen waar wij de wijn vandaan hadden. Bij
        </main>
        <a class="kiyoh__button" href="#">
            kiyoh
        </a>
    </card-component>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CardComponent from "../components/CardComponent.vue"
    @Component( {
        components: { CardComponent }
    } )
    export default class KiyohCard extends Vue {}
</script>

<style scoped>
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
