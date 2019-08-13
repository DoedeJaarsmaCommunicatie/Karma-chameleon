import FilterOpener from "./common/FilterOpener";
import MenuOpener from "./common/MenuOpener";

export default {
    init() {
        FilterOpener();
        MenuOpener.addEvent();

        window['toggleMenu'] = MenuOpener.toggleMenu;
    },

    finalize() {}
}
