import {
    VuexModule,
    Module, Action, Mutation,
} from "vuex-class-modules";
import store from '../store';
import ajaxios from "../../api/ajax";

@Module
export default class KiyohModule extends VuexModule {
    kiyoh?: Kiyoh = null;

    @Mutation
    spreadKiyoh(k: any): void {
        this.kiyoh = {
            score: k.total_score,
            total_reviews: k.total_reviews,
            url: k.kiyoh_url,
            reviews: k.reviews
        };
    }

    @Action
    async fetchData() {
        const k = (await ajaxios.get('?action=fetch_kiyoh')).data.data;
        this.spreadKiyoh(k);
        return this.kiyoh;
    }
}

export const kiyohModule = new KiyohModule({store, name: 'kiyoh'});

export interface Kiyoh {
    score: number|string;
    total_reviews: number|string;

    url: string;

    reviews: Array<{
        pro: string
    }>
}
