<template>
    <main>
        <article :data-id="product.id" v-if="product" class="container mx-auto lg:py-12 product-app">
            <img :src="product.images[0].src" class="product-app_thumbnail">
            <section class="product-app_content">
                <h1 class="product-app_title mb-4">{{ product.title }}</h1>
                <main class="product-app_main">
                    <div class="product-app_attributes">
                        <strong>Kenmerken</strong>
                    
                        <table class="product-app_attributes-table">
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
                    </div>
                
                    <div v-html="product.content" class="content"></div>
                </main>
                <aside class="product-app_aside">
                    <h2 class="product-app_price">&euro; {{ product.price }}</h2>
                    <form class="product-app_add-to-card"></form>
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
        <aside v-if="product" class="bg-grey">
            <div class="container mx-auto flex">
                <product-card v-for="related in product.related" :key="related" :product-id="related" class="lg:w-1/5"></product-card>
            </div>
        </aside>
    </main>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Product, productModule } from '../store/modules/product.module'
    
    @Component
    export default class ProductApp extends Vue {
        @Prop()
        productId: number;
        
        product?: Product = null;

        async created() {
            this.product = await productModule.fetchProduct(this.productId);
        }
    }
</script>

<style scoped>
    @screen lg {
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
                    font-size: theme('fontSize.3xl');
                }
                
                & .product-app_aside {
                    grid-area: aside;
                }
                
                & .product-app_main {
                    grid-area: main;
                    
                    & .product-app_attributes {
                        background: theme('colors.grey');
                        padding: 1rem;
                        margin-bottom: 2rem;
                        
                        & .product-app_attributes-table {
                            margin-top: 1rem;
                            width: 100%;
                            text-align: left;
                        }
                    }
                }
                
                & .product-app_usp {
                    margin-top: 1rem;
                    background: theme('colors.grey');
                    padding: 1rem;
                    margin-bottom: 2rem;
                    
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
    }
</style>
