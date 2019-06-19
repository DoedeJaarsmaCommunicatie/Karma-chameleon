<template>
    <card-component class="product_card" :class="classList" :height="direction === 'horizontal'">
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
        
        <button type="button" @click.prevent="addToCart" class="product_card-button">
            <i class="fas fa-shopping-cart"></i>
        </button>
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
        
        @Prop({default: 'horizontal'})
        direction: string;
        
        product?: Product = null;
        
        status?: string = null;
        
        classes: Array<string> = [];
        
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
        
        get classList(): string {
            this.classes.push(this.direction);
            return this.classes.join(' ')
        }
    }
</script>

<style scoped>
    @screen lg {
        .product_card {
            &.horizontal {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                position: relative;
    

                & .product_card-thumbnail {
                    margin-top: 1rem;
                }
                
                & .product_card-title {
                    text-align: center;
                }
                
                & .product_card-price {
                    text-align: center;
                }
                
                & .product_card-button {
                    margin: auto;
                }
                
            }
            
            &.vertical {
                display: grid;
                position: relative;
                grid-template-areas: "thumb title" "thumb ." "thumb price" "thumb button";
                grid-column-gap: 10px;
                
                & .product_card-thumbnail {
                    grid-area: thumb;
                    
                    & .product_card-tumbnail_image {
                        height: 180px;
                        object-fit: cover;
                    }
                }
                
                & .product_card-title {
                    grid-area: title;
                }
                
                & .product_card-price {
                    grid-area: price;
                }
                
                & .product_card-button {
                    grid-area: button;
                    margin-right: auto;
                }
            }
    
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
                margin: 0.75rem 0;
            }
            
            & .product_card-price {
                color: theme('colors.primary');
                font-size: 1.25rem;
                font-weight: 400;
            }
            
            & .product_card-button {
                background: theme('colors.primary');
                color: theme('colors.white');
                border-radius: 5px;
                padding: 4px 12px;
        
                &:hover {
                    background: color-mod(theme('colors.primary'))
                }
            }
        }
    }
</style>
