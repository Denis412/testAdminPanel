const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "users", component: () => import("pages/UsersPage.vue") },
      {
        path: "products",
        component: () => import("pages/ProductsPage.vue"),
      },
      {
        path: "categories",
        component: () => import("pages/CategoriesPage.vue"),
      },
      { path: "chats", component: () => import("pages/ChatsPage.vue") },
      { path: "carts", component: () => import("pages/CartsPage.vue") },
      {
        path: "favorites",
        component: () => import("pages/FavoritesPage.vue"),
      },
      {
        path: "messages",
        component: () => import("pages/MessagesPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
