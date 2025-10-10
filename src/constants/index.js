import {shieldTick, support, truckFast } from "../assets/icons";
// import { HPhero1, HPhero2,HPhero3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailHP1, thumbnailHP2, thumbnailHP3 } from "../assets/images";
import { HPhero1, HPhero2, HPhero3, product1, product2, product3, product4, product5 } from "../assets/images";


export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const headphones = [
  {
    bigHP: HPhero1,
  },
  {
    bigHP: HPhero2,
  },
  {
    bigHP: HPhero3,
  },
];

export const statistics = [
  { value: 950, suffix: "k+", label: "Customers" },
  { value: 800, suffix: "+", label: "Shops" },
  { value: 37, suffix: "M+", label: "Followers" },
];

export const products = [
    {
        imgURL: product1,
        name: "Beats Studio Pro",
        rating: 4.8,
        price: "$349.99",
    },
    {
        imgURL: product2,
        name: "Beats Fit Pro",
        rating: 4.6,
        price: "$199.99",
    },
    {
        imgURL: product3,
        name: "Beats Flex",
        rating: 4.9,
        price: "$69.99",
    },
    {
        imgURL: product4,
        name: "Beats Solo 4",
        rating: 4.8,
        price: "$199.99",
    },
    {
        imgURL: product5,
        name: "Beats Pill",
        rating: 4.9,
        price: "$149.99",
    }
];

export const services = [
    {
        imgURL: truckFast,
        label: "Fast & Free Delivery",
        subtext: "Get your gear delivered swiftly — free of charge, right to your door."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Shop confidently with end-to-end encrypted and verified payment options."
    },
    {
        imgURL: support,
        label: "24/7 Customer Care",
        subtext: "Our support team is always ready to help — because your experience matters."
    },
];

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Salman Shaikh',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];

// export const footerLinks = [
//     {
//         title: "Products",
//         links: [
//             { name: "Air Force 1", link: "/" },
//             { name: "Air Max 1", link: "/" },
//             { name: "Air Jordan 1", link: "/" },
//             { name: "Air Force 2", link: "/" },
//             { name: "Nike Waffle Racer", link: "/" },
//             { name: "Nike Cortez", link: "/" },
//         ],
//     },
//     {
//         title: "Help",
//         links: [
//             { name: "About us", link: "/" },
//             { name: "FAQs", link: "/" },
//             { name: "How it works", link: "/" },
//             { name: "Privacy policy", link: "/" },
//             { name: "Payment policy", link: "/" },
//         ],
//     },
//     {
//         title: "Get in touch",
//         links: [
//             { name: "customer@beatsbydre.com", link: "mailto:customer@beatsbydre.com" },
//             { name: "+923357947721", link: "tel:+923357947721" },
//         ],
//     },
// ];

// export const socialMedia = [
//     { src: facebook, alt: "facebook logo" },
//     { src: twitter, alt: "twitter logo" },
//     { src: instagram, alt: "instagram logo" },
// ];
