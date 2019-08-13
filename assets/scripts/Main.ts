import Router from "./utils/Router";
import common from "./routes/common";
import postTypeArchiveProduct from "./routes/PostTypeArchiveProduct";

const router = new Router({
    common,
    postTypeArchiveProduct
});

document.addEventListener('DOMContentLoaded', () => router.loadEvents());

/*
TODO: make this function global
 */
function toggleMenu() {
    document
        .querySelector('.menubar')
        .classList
        .toggle('active');
}
