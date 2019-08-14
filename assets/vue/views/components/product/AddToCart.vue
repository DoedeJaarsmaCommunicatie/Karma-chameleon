<template>
    <form class="add-to-cart">
        <div class="add-to-cart_qty-wrapper">
            <button type="button" class="add-to-cart_qty-button minus" @click.prevent="lowerQuantity">-</button>
            <input type="number" class="add-to-cart_qty" id="qty" v-model="quantity" >
            <input type="hidden" id="add_to_cart" :value="productId">
            <button type="button" class="add-to-cart_qty-button plus" @click.prevent="higherQuantity">+</button>
        </div>
        <button type="submit" class="add-to-cart_submit" @click.prevent="addToCart">
            Bestellen
        </button>
    </form>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import * as $ from 'jquery';

    @Component
    export default class AddToCart extends Vue {
        @Prop({ default: null })
        maximum?: number;
        
        @Prop({ required: true, default: null })
        productId: number;
        
        quantity: number = 1;
        
        async addToCart(): Promise<any> {
            const data = {
                product_id: this.productId
            };
            
            const res = await $.post('?wc-ajax=add_to_cart', data).promise();
            console.dir(res);
        }
        
        lowerQuantity(): void {
            if (this.quantity > 1) {
                this.quantity--;
            }
        }
        
        higherQuantity(): void {
            if (!this.maximum || this.quantity < this.maximum) {
                this.quantity++;
            }
            
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../styles/abstracts/all";
    
    @media screen and (max-width: map-get($screenSize, sm)) {
        .add-to-cart {
            position: fixed;
            z-index: 30;
            bottom: 0;
            left: 0;
            width: 100vw;
            background: $white;
            padding: 1rem;
            @include box-shadow;
        }
    }
    
    .add-to-cart {
        display: flex;
        justify-content: space-between;
        
        & .add-to-cart_qty-wrapper {
            display: flex;
            
            & .add-to-cart_qty-button {
                background: $primary;
                color: $white;
                padding: 0.25rem 1rem;
                
                &.minus {
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                }
                
                &.plus {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
                
                &:hover {
                    background: adjust-color($primary, $saturation: decimate(5));
                }
            }
        }
        
        & .add-to-cart_qty {
            appearance: textfield;
            text-align: center;
            border-top: 1px solid $primary;
            border-bottom: 1px solid $primary;
            max-width: 4rem;
        }
        
        & .add-to-cart_submit {
            background: $green;
            color: $white;
            border-radius: 5px;
            padding: 0.5rem 1rem;
            text-align: center;
            cursor: pointer;
            min-width: 10rem;
        }
    }
</style>
