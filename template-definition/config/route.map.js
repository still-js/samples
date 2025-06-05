
        /**
         * Don't change the constante name as it'll impact on the component routing
         */
        
export const stillRoutesMap = {
    viewRoutes: {
        regular: {
            HomeComponent: {
                path: "app/home",
                url: "/HomeComponent"
            },
            TopMenu: {
                path: "app/components/parts",
                url: "/top-menu"
            },
            AlternateMenu: {
                path: "app/components/parts",
                url: "/alternate-menu"
            },
            Footer: {
                path: "app/components/parts",
                url: "/footer"
            },
            Component1: {
                path: "app/components/other",
                url: "/1"
            },
            Component2: {
                path: "app/components/other",
                url: "/2"
            }
        },
        lazyInitial: {}
    }
}



