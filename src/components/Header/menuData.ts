import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "pages",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Shop Grid 1",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Shop Grid 2",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Login",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Register",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Error",
        newTab: false,
        path: "/error",
      },
      
    ],
  },
  {
    id: 7,
    title: "blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Blog Lists",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Blog Grid",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
      
    ],
  },
  {
    id: 8,
    title: "FAQ's",
    newTab: false,
    path: "/faq",
  },

];

export const topMenuData: Menu[] = [
  {
    id: 1,
    title: "About",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "My Account",
    newTab: false,
    path: "/signin",
  },
  {
    id: 3,
    title: "Wishlist",
    newTab: false,
    path: "/wishlist",
  },
 
  {
    id: 4,
    title: "Checkout",
    newTab: false,
    path: "/checkout",
  },
  
];

export const subTopMenuData: Menu[] = [
  {
    id: 1,
    title: "Share Location",
    newTab: false,
    path: "/",
  },
  
  {
    id: 2,
    title: "Language",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 76,
        title: "English",
        newTab: false,
        path: "/",
      },
      {
        id: 77,
        title: "Hindi",
        newTab: false,
        path: "/",
      },
      {
        id: 78,
        title: "Marathi",
        newTab: false,
        path: "/",
      },
      
    ],
  },
  {
    id: 3,
    title: "Currency",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 79,
        title: "INR",
        newTab: false,
        path: "/",
      },
      {
        id: 80,
        title: "USP",
        newTab: false,
        path: "/",
      },
      
      
    ],
  },
];