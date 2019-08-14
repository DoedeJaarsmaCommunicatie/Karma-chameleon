<template>
    <main>
        <article  class="container lg:mx-auto lg:py-12 product-app">
            <img :src="product.images[0].src" class="product-app_thumbnail" v-if="product">
            <image-loader v-else height="lg" :class="'product-app_thumbnail'"></image-loader>
            <section class="product-app_content">
                <h1 class="product-app_title mb-4">
                    <span v-if="product">
                        {{ product.title }}
                    </span>
                    <text-loader v-else></text-loader>
                </h1>
                <main class="product-app_main">
                    <div class="product-app_attributes">
                        <strong class="product-app_attributes-title">Kenmerken</strong>
                    
                        <table class="product-app_attributes-table" v-if="product">
                            <tbody>
                            <tr v-for="attribute in product.attributes" :key="attribute.id">
                                <th>{{ attribute.name }}</th>
                                <td>
                                    <span v-for="(option, key) in attribute.options" :key="key">
                                        {{option}}
                                    </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table class="product-app_attributes-table" v-else>
                            <tbody>
                                <tr>
                                    <th><text-loader height="md"></text-loader></th>
                                    <td><text-loader height="md"></text-loader></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                    <div v-if="product" v-html="product.content" class="content"></div>
                    <span class="mobile clickable" @click="toggleSidebar('content')">Lees meer over deze wijn</span>
                </main>
                <aside class="product-app_aside">
                    <h2 class="product-app_price">
                        <span v-if="product">&euro; {{ product.price }}</span>
                        <text-loader height="md" v-else></text-loader>
                    </h2>
                    <add-to-cart :maximum="product.stock_quantity" :product-id="product.id" v-if="product"></add-to-cart>
                    <text-loader v-else></text-loader>
                    <div class="product-app_usp">
                        <table class="product-app_usp-table" cellspacing="10">
                            <tbody>
                            <tr>
                                <th><i class="far fa-clock fa-2x text-primary"></i></th>
                                <td>Op werkdagen voor 15.00 uur besteld, morgen in huis</td>
                            </tr>
                            <tr>
                                <th><i class="fas fa-truck fa-2x text-primary"></i></th>
                                <td><strong>Gratis verzending vanaf €50,-</strong> <br>
                                    (België vanaf €100,-)
                                </td>
                            </tr>
                            <tr>
                                <th><i class="fas fa-wine-glass-alt fa-2x text-primary"></i></th>
                                <td>Proefgarantie</td>
                            </tr>
                            <tr>
                                <th><i class="fas fa-home fa-2x text-primary"></i></th>
                                <td>Ophalen in Amsterdam mogelijk</td>
                            </tr>
                            <tr>
                                <th><i class="fas fa-trophy fa-2x text-primary"></i></th>
                                <td>Klanten beoordelen ons met een 9.5 / 10</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </aside>
            </section>
        </article>
        <aside v-if="product" class="bg-grey py-8">
            <div class="container mx-auto px-4 lg:px-0">
                <span class="text-2xl">Gerelateerde producten</span>
            </div>
            <div class="container mx-auto lg:flex">
                <product-card v-for="related in product.related" :key="related" :product-id="related" class="lg:w-1/5"></product-card>
            </div>
        </aside>
        <div class="full-page-view has-transition" ref="content" v-if="product" @click.self="toggleSidebar('content')">
            <div class="content" v-html="product.content"></div>
        </div>
    </main>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Product, productModule } from '../store/modules/product.module';
    import AddToCart from './components/product/AddToCart';
    import TextLoader from "./components/TextLoader.vue"
    import ImageLoader from "./components/ImageLoader.vue"
    
    @Component({
        components: { ImageLoader, TextLoader, AddToCart }
    })
    export default class ProductApp extends Vue {
        @Prop()
        productId: number;
        
        product?: Product = null;

        async created() {
            this.product = await productModule.fetchProduct(this.productId);
        }
        
        toggleSidebar(name: string) {
            // @ts-ignore
            this.$refs[name].classList.toggle('active');
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/abstracts/all";
    
    .has-transition {
        transition: all 255ms cubic-bezier(0.2, 0.4, 0.2, 1.0);
    }
    
    .clickable {
        color: $primary;
        text-decoration: underline;
        margin-bottom: 0.75rem;
        display: block;
    }
    
    @media screen and (max-width: map-get($screenSize, sm)) {
        .product-app {
            padding-left: 1rem;
            padding-right: 1rem;
            display: grid;
            grid-template-areas: "thumb content" "thumb content";
            grid-template-columns: 30% 70%;
            grid-gap: 20px;
            
            max-width: calc( 100% - 20px );
            
            & .product-app_thumbnail {
                grid-area: thumb;
            }
            
            & .product-app_content {
                grid-area: content;
        
                & .product-app_title {
                    font-size: map-get($fontSize, 2xl);
                }
                
                & .content {
                    max-height: 6rem;
                    overflow: hidden;
                    position: relative;
                    margin-bottom: 0.75rem;
                    
                    &::after {
                        content: ' ';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to bottom, transparent, $white);
                        top: 0;
                        left: 0;
                    }
                }
    
                & .product-app_price {
                    font-size: map-get($fontSize, 2xl);
                }
                
                & .product-app_attributes {
                    background: $grey;
                    padding: 1rem;
                    margin-bottom: 2rem;
        
                    & .product-app_attributes-table {
                        margin-top: 1rem;
                        width: 100%;
                        text-align: left;
                    }
        
                    & .product-app_attributes-title {
                        color: $black;
                        text-decoration: none;
                    }
                }
            }
            
            & .product-app_aside {
                & .product-app_usp {
                    display: none;
                }
            }
        }
    }

    .full-page-view {
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        background: adjust-color($black, $alpha: decimate(10));
        transform: scale(0, 1);
        transform-origin: left;
        
        &.active {
            transform: scale(1);
        }
    
        & .content {
            width: 75%;
            height: 100%;
            background: $white;
            padding: 2rem;
            overflow-y: scroll;
        }
    }
    
    @screen lg {
        .mobile {
            display: none;
        }
        
        .product-app {
            display: grid;
            grid-template-areas: "thumb thumb content content content content content content";
            grid-template-columns: repeat(8, 1fr);
            
            & .product-app_thumbnail {
                grid-area: thumb;
                max-height: 800px;
            }
            
            & .product-app_content {
                grid-area: content;
                
                display: grid;
                
                grid-template-areas:
                        "title title title title title title title title"
                        "main main main main main aside aside aside";
                grid-template-columns: repeat(8, 1fr);
                grid-column-gap: 20px;
                
                & .product-app_title {
                    grid-area: title;
                    font-size: map-get($fontSize, 3xl);
                }
                
                & .product-app_aside {
                    grid-area: aside;
                    
                    & .product-app_price {
                        font-size: map-get($fontSize, 2xl);
                    }
                }
                
                & .product-app_main {
                    grid-area: main;
                    
                    & .product-app_attributes {
                        background: $grey;
                        padding: 1rem;
                        margin-bottom: 2rem;
                        
                        & .product-app_attributes-table {
                            margin-top: 1rem;
                            width: 100%;
                            text-align: left;
                        }
    
                        & .product-app_attributes-title {
                            color: $black;
                            text-decoration: none;
                        }
                    }
                }
                
                & .product-app_usp
                {
                    margin-top: 1rem;
                    background: $grey;
                    padding: 1rem;
                    margin-bottom: 2rem;
                    display: block;
                    
                    & .product-app_usp-table {
                        margin-top: 1rem;
                        width: 100%;
                        text-align: left;
                        & th {
                            text-align: center;
                            padding: 0.2rem;
                        }
                    }
                }
            }
        }
        
        .full-page-view {
            &.active {
                transform: scale(0);
            }
        }
    }
</style>
