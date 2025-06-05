
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
            TodoApp: {
                path: "app/componets/todo/main",
                url: "/todo-app"
            },
            TaskList: {
                path: "app/componets/todo/task",
                url: "/task-list"
            }
        },
        lazyInitial: {}
    }
}



