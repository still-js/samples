
        /**
         * Don't change the constante name as it'll impact on the component routing
         */
        
export const stillRoutesMap = {
    viewRoutes: {
        regular: {
            HomeComponent: {
                path: "app/home",
                url: "/my-home-page"
            },
            PersonList: {
                path: "app/components/person",
                url: "/person-list"
            },
            TaskList: {
                path: "app/components/todo",
                url: "/task-list"
            },
            TodoApp: {
                path: "app/components/todo",
                url: "/todo-app"
            }
        },
        lazyInitial: {}
    }
}



