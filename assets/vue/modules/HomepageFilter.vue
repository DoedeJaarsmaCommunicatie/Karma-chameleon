<template>
    <form role="search" class="homepage-filter" method="get" action="/winkel/">
        <h3 :data-title="title" :title="title" class="homepage-filter_title">{{ title }}</h3>
        
        <div class="custom-input">
            <span class="selected" @click="toggleList">
                Een {{ activeCategory.title }}
            </span>
            
            <ul class="options" ref="categoriesList">
                <li
                        v-for="(item, key) in categories"
                        :key="key"
                        :data-key="key"
                        class="option"
                        data-param="product-categorie"
                        :data-value="item.slug"
                        @click.exact.prevent="setActiveCategory(key)"
                        :class="{ current: activeCategory.slug === item.slug }"
                >
                    {{ item.title }}
                </li>
            </ul>
    
            <input type="hidden" :value="activeCategory.slug" name="product-category">
        </div>
        
        <div class="custom-input">
            <span class="selected" @click="toggleList">
                Voor &euro; {{ activePrice.title }}
            </span>
            
            <ul class="options" ref="pricesList">
                <li
                        v-for="(item, key) in prices"
                        :key="key"
                        :data-key="key"
                        class="option"
                        data-param="product-price"
                        :data-value="item.slug"
                        @click.exact.prevent="setActivePrice(key)"
                        :class="{ current: activePrice.slug === item.slug }"
                >
                    {{ item.title }}
                </li>
            </ul>
        </div>
        
        <button
                type="submit"
                role="button"
                class="homepage-filter_button"
        >
            {{ buttonText }}
        </button>
    </form>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import * as _ from 'lodash';
    
    @Component
    export default class HomepageFilter extends Vue {
        @Prop({default: 'Ik ben op zoek naar:'})
        title: string;
        
        @Prop({default: 'Toon resultaat', type: String})
        buttonText: string;
        
        categories: Array<Category> = [
            {
                title: 'Rode wijn',
                slug: 'rode-wijn',
                active: false,
            },
            {
                title: 'Witte wijn',
                slug: 'witte-wijn',
                active: true,
            },
            {
                title: 'Mousserende wijn',
                slug: 'mousserende-wijn',
                active: false,
            },
            {
                title: 'Rose wijn',
                slug: 'rose-wijn',
                active: false,
            },
            {
                title: 'Dessert wijn',
                slug: 'dessert-wijn',
                active: false,
            },
        ];
        
        prices: Array<Price> = [
            { title: 'alle prijzen', slug: '*', active: true, },
            { title: '5 - 10', slug: '5-10', active: false},
            { title: '10 - 15', slug: '10-15', active: false},
            { title: '15 - 25', slug: '15-25', active: false},
            { title: '25+', slug: '25', active: false},
        ];
        
        get activeCategory(): Category {
            return this.categories[_.findIndex(this.categories, c => c.active === true)];
        }
        
        get activePrice(): Price {
            return this.prices[_.findIndex(this.prices, p => p.active === true)];
        }
        
        setActiveCategory(key: number): void {
            let category = this.categories[key];
            if (this.activeCategory.slug !== category.slug) {
                this.categories[_.findIndex(this.categories, c => c.active === true)].active = false;
                category.active = true;
            }
            
            this.closeAllLists();
        }
        
        setActivePrice(key: number): void {
            let price = this.prices[key];
            if (this.activePrice.slug !== price.slug) {
                this.prices[_.findIndex(this.prices, p => p.active === true)].active = false;
                price.active = true;
            }
            this.closeAllLists();
        }
        
        closeAllLists(): void {
            (<HTMLElement>this.$refs['categoriesList']).classList.remove('active');
            (<HTMLElement>this.$refs['pricesList']).classList.remove('active');
        }
        
        // noinspection JSMethodCanBeStatic
        toggleList(ev): void {
            let parent = ev.target.parentElement as HTMLElement;
            let target = parent.querySelector('.options');
            
            ev.target.classList.toggle('active');
            target.classList.toggle('active');
        }
    }
    
    export interface Category {
        slug: string;
        title: string;
        active: boolean;
    }
    export interface Price {
        slug: string;
        title: string;
        active: boolean;
    }
</script>

<style scoped>
    .homepage-filter {
        background: theme('colors.primary');
        padding: 15px 10px;
        text-align: center;
        
        & .homepage-filter_title {
            color: theme('colors.white');
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        & .homepage-filter_button {
            color: theme('colors.black');
            background: theme('colors.white');
            width: 100%;
            padding: 10px 0;
            cursor: pointer;
            transition: all 325ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
    
            &:hover {
                background: theme('colors.black');
                color: theme('colors.white');
            }
        }
        
        & .custom-input {
            width: 100%;
            background: color(theme('colors.primary') blend(theme('colors.white') 10%));
            color: theme('colors.white');
            position: relative;
            text-align: center;
            cursor: pointer;
            margin-bottom: 15px;
            transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
            
            &:hover {
                background: color(theme('colors.primary') blend(theme('colors.white') 15%));
            }
            
            
            & .selected {
                display: block;
                padding: 10px 0;
            }
            
            .options {
                position: absolute;
                width: 100%;
                opacity: 0;
                padding: 15px 10px;
                box-shadow: 0 3px 6px color(theme('colors.black') a(20%)), 0 13px 16px color(theme('colors.black') a(15%));
                transition: all 225ms cubic-bezier(0.2, 0.4, 0.0, 0.8);
                transform: scale(1, 0);
                transform-origin: center top;
                top: calc(100% + 10px);
                left: 0;
                z-index: 10;
                
                &.active {
                    opacity: 1;
                    background: color(theme('colors.primary') blend(theme('colors.white') 15%));
                    transform: scale(1, 1);
                    transform-origin: center top;
    
                }
                
                & .option {
                    margin: 5px 0;
                    border-bottom: 1px solid color(theme('colors.primary') a(90%));
                    
                    &.current {
                        color: color(theme('colors.grey'));
                        cursor: not-allowed;
                    }
                }
            }
        }
    }
</style>
