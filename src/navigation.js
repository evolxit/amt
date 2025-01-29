import ApiService from "./services/ApiService";
import { getPermalink } from "./utils/permalinks";

const categoryData = await ApiService.getCategories();
const categoryList = categoryData.list;

const getLinks = () => {
  let links = [
    {
      text: "All Products",
      href: getPermalink("products"),
    },
    ...categoryList.map((category) => ({
      text: category.name,
      href: "/products?category=" + category.id,
    })),
  ];

  return links;
};

export const headerData = {
  links: [
    {
      text: "home",
      href: "/",
    },
    {
      text: "products",
      links: getLinks(),
    },
    {
      text: "about",
      href: getPermalink("/about"),
    },

    {
      text: "contact",
      href: getPermalink("/contact"),
    },

    {
      text: "blog",
      href: getPermalink("/blogs"),
    },

    {
      text: "documents",
      href: getPermalink("/documents"),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: "",
      links: [
        { text: "Home", href: getPermalink("/") },
        { text: "About", href: getPermalink("/about") },
        { text: "Contact", href: getPermalink("/contact") },
      ],
    },
    {
      title: "",
      links: [
        { text: "Programs", href: getPermalink("/programs") },
        { text: "Activity", href: getPermalink("/activity") },
      ],
    },
    {
      title: "",
      links: [
        { text: "FAQ", href: getPermalink("/faq") },
        { text: "Testimonials", href: getPermalink("/reviews") },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Activity", href: getPermalink("/activity") },
    { text: "Testimonials", href: getPermalink("/reviews") },
  ],
  socialLinks: [
    {
      ariaLabel: "Facebook",
      icon: "tabler:brand-facebook",
      href: "#",
    },
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "#",
    },
    {
      ariaLabel: "Twitter",
      icon: "tabler:brand-twitter",
      href: "#",
    },
    {
      ariaLabel: "Youtube",
      icon: "tabler:brand-youtube",
      href: "#",
    },
  ],
  footNote: "2024 Aung Myittar Co., Ltd. All Rights Reserved",
};
