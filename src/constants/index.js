import {shieldTick, support, truckFast } from "../assets/icons";
// import { HPhero1, HPhero2,HPhero3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailHP1, thumbnailHP2, thumbnailHP3 } from "../assets/images";
import { HPhero1, HPhero2, HPhero3, product1, product2, product3, product4, product5,customer1, customer2,customer3, customer4,customer5 } from "../assets/images";


export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  {href: '#services', label: "Services"},
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

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Salman Shaikh',
    rating: 4.8,
    feedback: "Absolutely love the product! The quality and design blew me away. Will definitely order again."
  },
  {
    imgURL: customer2, 
    customerName: 'Sophia Martinez',
    rating: 5.0,
    feedback: "Everything arrived perfectly and works like a charm. I highly recommend it to everyone!"
  },
  {
    imgURL: customer3,
    customerName: 'Agha Bilal',
    rating: 5.0,
    feedback: "Amazing experience from start to finish. Customer service was top-notch and delivery was super fast!"
  },
  {
    imgURL: customer4,
    customerName: 'Rohit Sharma',
    rating: 4.7,
    feedback: "High-quality product and excellent support. I couldn’t be happier with my purchase!"
  },
  {
    imgURL: customer5,
    customerName: 'Minahil Afridi',
    rating: 4.9,
    feedback: "The product is fantastic! It’s exactly what I needed and the attention to detail is impressive."
  },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Beats Studio Pro", link: "/" },
            { name: "Powerbeats Pro 2", link: "/" },
            { name: "Beats Flex", link: "/" },
            { name: "Beats Fit Pro", link: "/" },
            { name: "Powerbeats Fit", link: "/" },
            { name: "Beats Pill", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Refund policy", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment options", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@beatsbydre.com", link: "https://mail.google.com/mail/u/0/?to=salmanzulfiqar04@gmail.com&fs=1&tf=cm" },
            { name: "+923357947721", link: "tel:+923357947721" },
        ],
    },
];

export const socialMedia = [
  { name: "LinkedIn", icon: "FaLinkedin", link: "https://linkedin.com/in/salmanzulfiqarshaikh" },
  { name: "GitHub", icon: "FaGithub", link: "https://github.com/salmanzulfiqarshaikh" },
  { name: "Instagram", icon: "FaInstagram", link: "https://instagram.com/salmanzulfiqar_" },
];
