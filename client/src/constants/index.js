import { ShoppingCart, Users, Award, Globe, Target, Heart, Zap, Shield,TrendingUp, ShoppingBag, DollarSign, Search } from 'lucide-react';

export const quickLinks = [
  { title: 'Home', name: 'home', href: '/'},
  { title: 'About Us', name: 'about', href: '/about'},
  // { title: 'Contact', name: 'contact', href: '/contact' },
  { title: 'FAQ', name: 'faq', href: '/faq' }
];

export const Mission=[
 {
   icon: <Target size={28} style={{ color: '#2563eb' }} />,
   title: 'Our Mission',
  text: 'To empower consumers with the tools and information they need to make smart purchasing decisions and save money on every purchase.'
     },
  {
   icon: <Globe size={28} style={{ color: '#2563eb' }} />,
   title: 'Our Vision',
   text: 'To become the world’s most trusted price comparison platform, making online shopping transparent, efficient, and accessible to everyone.'
    }
];

export const Values=[
  { icon: <Heart size={24} style={{ color: '#2563eb' }} />, title: 'Customer First', text: 'Every decision we make is centered around providing the best experience for our users.' },
  { icon: <Shield size={24} style={{ color: '#2563eb' }} />, title: 'Trust & Transparency', text: 'We believe in honest, transparent practices and building long-term trust with our community.' },
  { icon: <Zap size={24} style={{ color: '#2563eb' }} />, title: 'Innovation', text: 'We continuously innovate to provide faster, better, and more accurate price comparisons.' },
  { icon: <Users size={24} style={{ color: '#2563eb' }} />, title: 'Community', text: 'We’re building a community of smart shoppers who help each other find the best deals.' }
 ]

    export const WhyCompra=[
          {
            title: 'Smart Price Comparison',
            desc: 'Compare prices across Amazon and Flipkart to find the best deal instantly.'
          },
          {
            title: 'Fast & Reliable',
            desc: 'Built with performance in mind to deliver results quickly and smoothly.'
          },
          {
            title: 'Independent Project',
            desc: 'Created out of passion to make online shopping smarter and more transparent.'
          }
        ]


export const Features=[
  {
    title:'Real-time Prices',
    desc:'Get the latest prices updated in real-time from multiple platforms.',
    icon:TrendingUp,
    color:'bg-gradient-blue '
  },
  {
    title:'Best Deals',
    desc:'Discover the lowest prices and exclusive deals across platforms.',
    icon:DollarSign,
    color:' bg-gradient-green'
  },
   {
    title:'Smart Shopping',
    desc:'Make informed decisions with detailed product comparisons.',
    icon:ShoppingBag,
    color:'bg-gradient-purple'
  }
];

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Search Product',
    desc: 'Enter the product name or browse through categories to find what you\'re looking for.',
    gradient: 'linear-gradient(to right, #3b82f6, #9333ea)'
  },
  {
    step: 2,
    title: 'Compare Prices',
    desc: 'View real-time prices, ratings, and offers from Amazon and Flipkart side by side.',
    gradient: 'linear-gradient(to right, #22c55e, #3b82f6)'
  },
  {
    step: 3,
    title: 'Save Money',
    desc: 'Choose the best deal and click to buy directly from your preferred platform.',
    gradient: 'linear-gradient(to right, #a855f7, #ec4899)'
  }
];
