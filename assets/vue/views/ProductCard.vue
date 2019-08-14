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
        
        <section v-if="status === 'success'" class="notify success">
            {{ product.title }} is toegevoegd aan je winkelmand.
        </section>
    </card-component>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
    import CardComponent from "../components/CardComponent.vue"
    import { Product, productModule } from '../store/modules/product.module';
    import * as $ from 'jquery';
    import { debounce } from 'underscore';
    
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
            
            if (!res.error) {
                this.status = 'success';
            }
        }
        
        get classList(): string {
            this.classes.push(this.direction);
            return this.classes.join(' ')
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/abstracts/all";
    .product_card {
        &.horizontal, &.vertical {
            display: grid;
            grid-template-areas: "thumbnail thumbnail title title"
                                 "thumbnail thumbnail price button";
            grid-template-columns: 20% 20% 25% 25%;
            margin-bottom: 1rem;
            padding: 0.5rem;
    
            position: relative;
    
            & .product_card-thumbnail {
                grid-area: thumbnail;
                & .product_card-tumbnail_image {
                    height: 180px;
                    object-fit: cover;
                    margin: auto;
                }
            }
        }
        
        & .product_card-title {
            color: $black;
            font-weight: 500;
            font-size: 1.3rem;
            margin: 0.75rem 0;
            grid-area: title;
        }
        
        & .product_card-button {
            background: $primary;
            color: $white;
            border-radius: 5px;
            padding: 4px 12px;
            grid-area: button;
            margin: auto 0 0 auto;
        
            &:hover {
                background: $primary;
            }
        }
    
        & .product_card-label {
            background: $green;
            color: $white;
            position: absolute;
            top: 15px;
            right: -3px;
            padding: 4px 12px;
        }

        & .product_card-price {
            color: $primary;
            font-size: 1.25rem;
            font-weight: 400;
        }
    }
    
    .notify {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.5rem;
        
        &.success {
            background: $primary;
            color: $white;
        }
    }
    
    @media screen and (min-width: map-get($fontSize, lg)) {
        .product_card {
            &.horizontal {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                position: relative;
    

                & .product_card-thumbnail {
                    margin-top: 1rem;
                    
                    & img {
                        max-height: 180px;
                        margin: auto;
                    }
                }
                
                & .product_card-title {
                    text-align: center;
                }
                
                & .product_card-price {
                    text-align: center;
                }
                
                & .product_card-button {
                    margin: auto auto 0;
                }
            }
            
            &.vertical {
                display: grid;
                position: relative;
                grid-template-areas: "thumb title" "thumb ." "thumb price" "thumb button";
                grid-template-columns: 30% 70%;
                grid-column-gap: 10px;
                
                & .product_card-thumbnail {
                    grid-area: thumb;
                    
                    & .product_card-tumbnail_image {
                        height: 150px;
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
                }
            }
        }
    }
</style>
