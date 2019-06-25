import {
    VuexModule,
    Module, Action, Mutation
} from "vuex-class-modules";
import store from "../store";
import shopios from '../../api/shop';

@Module
export default class ProductModule extends VuexModule {
    product?: Product = null;

    @Mutation
    spreadProduct(product: any): void {
        this.product = {
            id: product.id,
            title: product.name,
            price: product.price,

            stock_status: product.stock_status,
            stock_quantity: product.stock_quantity,

            slug: product.slug,
            status: product.status,

            link: product.permalink,
            content: product.description,
            short_description: product.short_description,

            images: product.images,
            categories: product.categories,
            attributes: product.attributes,
            related: product.related_ids,
        };
    }

    @Action
    async fetchProduct(id: number) {
        const product = (await shopios.get(`products/${id}`)).data;
        this.spreadProduct(product);
        return this.product;
    }
}

export const productModule = new ProductModule({store, name: 'product'});

export interface Product {
    id?: number;
    title?: string;

    price?: number;

    stock_status?: string;
    stock_quantity?: number;

    slug?: string;
    status?: string;
    link?: string;

    content?: string;
    short_description?: string;

    related: Array<Product>;
    images?: Array<ProductImage>;
    categories?: Array<ProductCategory>;
    attributes?: Array<ProductAttribute>;
}

export interface ProductImage {
    src: string;
    alt?: string;
    id?: number;
    name?: string;
}

export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
}

export interface ProductAttribute {
    id: number;
    name: string;
    options: Array<string>;
    position?: number;
    variation?: boolean;
    visible?: boolean;
}
