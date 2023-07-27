const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "users",
        name: "users",
        component: () => import("pages/UsersPage.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () => import("pages/ProductsPage.vue"),
      },
      {
        path: "categories",
        name: "categories",
        component: () => import("pages/CategoriesPage.vue"),
      },
      {
        path: "chats",
        name: "chats",
        component: () => import("pages/ChatsPage.vue"),
      },
      {
        path: "carts",
        name: "carts",
        component: () => import("pages/CartsPage.vue"),
      },
      {
        path: "favorites",
        name: "favorites",
        component: () => import("pages/FavoritesPage.vue"),
      },
      {
        path: "messages",
        name: "messages",
        component: () => import("pages/MessagesPage.vue"),
      },
      {
        path: "admin-chats",
        name: "admin-chats",
        component: () => import("pages/AdminChats.vue"),
      },
      {
        path: "admin-chats/:id",
        name: "chat",
        component: () => import("pages/MainChatPage.vue"),
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
