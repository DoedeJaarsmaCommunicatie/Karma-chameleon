<template>
    <card-component class="product_card">
        <a class="product_card-label" v-if="label && product" :href="product.link">{{ label }}</a>
        <figure v-if="product" class="product_card-thumbnail">
            <a :href="product.link">
                <img :src="product.images[0].src" :alt="product.images[0].alt" class="product_card-tumbnail_image">
            </a>
        </figure>
        
        <h2 v-if="product" class="product_card-title">
            <a :href="product.link">
                {{ product.title }}
            </a>
        </h2>
        
        <h3 class="product_card-price" v-if="product">
            <a :href="product.link">
                &euro; <span>{{ product.price }}</span>
            </a>
        </h3>
        
        <a @click.prevent="addToCart">
            <i class="fas fa-shopping-cart"></i>
        </a>
        
    </card-component>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import CardComponent from "../components/CardComponent.vue"
    import { Product, productModule } from '../store/modules/product.module';
    import * as $ from 'jquery';
    // import axios from 'axios';
    
    @Component( {
        components: { CardComponent }
    } )
    export default class ProductCard extends Vue {
        @Prop({required: true})
        productId: number;
        
        @Prop({ default: false })
        label: string|boolean;
        
        product?: Product = null;
        
        status?: string = null;
        
        async created() {
            this.product = await productModule.fetchProduct(this.productId);
        }
        
        async addToCart(): Promise<any> {
            const data = {
                product_id: this.productId
            };
            
            const res = await $.post('?wc-ajax=add_to_cart', data).promise();
            
            console.dir(res);
        }
    }
</script>

<style scoped>
    .product_card {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        position: relative;
        
        & .product_card-label {
            background: theme('colors.green');
            color: theme('colors.white');
            position: absolute;
            top: 15px;
            right: -3px;
            padding: 4px 12px;
        }
        
        & .product_card-title {
            color: theme('colors.black');
            font-weight: 500;
            font-size: 1.3rem;
            text-align: center;
            margin: 0.75rem 0;
        }
        
        & .product_card-thumbnail {
            margin-top: 1rem;
        }
        
        & .product_card-price {
            color: theme('colors.primary');
            font-size: 1.25rem;
            font-weight: 400;
            text-align: center;
        }
    }
</style>
