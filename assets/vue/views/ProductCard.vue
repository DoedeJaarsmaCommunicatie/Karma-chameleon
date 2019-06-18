<template>
    <card-component>
    
    </card-component>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CardComponent from "../components/CardComponent.vue"
    @Component( {
        components: { CardComponent }
    } )
    export default class ProductCard extends Vue {}
</script>

<style scoped>

</style>
