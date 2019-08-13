import CamelCase from "./CamelCase";

class Router {
    routes: any;

    constructor(routes: any) {
        this.routes = routes;
    }

    fire(route, event = 'init', args = null) {
        document.dispatchEvent(
            new CustomEvent(
                'routed',
                {
                    bubbles: true,
                    detail: {
                        route,
                        fn: event
                    }
                }
            )
        );

        const fire = route !== ''
            && this.routes[route]
            && typeof this.routes[route][event] === 'function';

        if (fire) {
            this.routes[route][event](args);
        }
    }

    loadEvents() {
        this.fire('common');

        document.body.className
            .toLowerCase()
            .replace(/-/g, '_')
            .split(/\s+/)
            .map(CamelCase)
            .forEach((className: string) => {
                this.fire(className);
                this.fire(className, 'finalize');
            });

        this.fire('common', 'finalize');
    }
}

export default Router;
