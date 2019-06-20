import {
    VuexModule,
    Module, Action, Mutation
} from "vuex-class-modules";
import store from "../store";
import axios from '../../api/shop';

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

            slug: product.slug,
            status: product.status,

            link: product.permalink,
            content: product.description,

            images: product.images,
            categories: product.categories,
            attributes: product.attributes,
            related: product.related_ids,
        };
    }

    @Action
    async fetchProduct(id: number) {
        const product = (await axios.get(`products/${id}`)).data;
        this.spreadProduct(product);
        console.log(product);
        return this.product;
    }
}

export const productModule = new ProductModule({store, name: 'product'});

export interface Product {
    id?: number;
    title?: string;

    price?: number;

    stock_status?: string;

    slug?: string;
    status?: string;
    link?: string;

    content?: string;


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
