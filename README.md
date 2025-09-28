# Logistics-development-M-5

A modern logistics website built with React, Vite, and Tailwind CSS.

## 📋 Project Overview

This is a multi-page responsive website featuring:
- Home page with hero section and services overview
- Services page with detailed offerings
- About page with company information
- Contact page with form and office locations

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **React Router** - Page navigation
- **Lucide React** - Icons 

## 🚀 Getting Started

### Installation

1. **Clone the project**
   ```bash
   git clone [repository-url]
   cd logistics-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Go to `http://localhost:5173`

### Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable components
│ ├── about/ # About page components
│ ├── contact/ # Contact page components
│ ├── Home/ # Homepage components
│ ├── layout/ # Layout components
│ │ └── TopHeader.jsx # Top header component
│ ├── service/ # Service-related components
│ └── ui/ # UI reusable components
│ ├── Button.jsx # Reusable button
│ ├── FeedbackCard.jsx # Customer feedback card
│ ├── Heading.jsx # Reusable heading
│ ├── OfferCard.jsx # Offer display card
│ ├── Paragraph.jsx # Paragraph component
│ └── WorkCard.jsx # Work showcase card
├── pages/ # Route pages
│ ├── About.jsx # About page
│ ├── Contact.jsx # Contact page
│ ├── ErrorPage.jsx # 404 error page
│ ├── Home.jsx # Homepage
│ └── Service.jsx # Service page
├── router/ # React router setup
├── utils/ # Utility functions/hooks
│ ├── Countup.jsx # Counter animation utility
│ └── WindowSize.jsx # Window size custom hook
├── App.jsx # Root App component
├── index.css # Global styles
└── main.jsx # Entry point
```

## 🎨 Design Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Clean and professional look
- **Interactive Elements** - Hover effects and animations
- **Consistent Branding** - Custom color scheme (Black + Lime Green)
- **Reusable & Scalable Components** – Modular, maintainable, and easily extendable code structure that supports project growth without major refactoring.
- **Pixel-Perfect UI** – Built from Figma with strict attention to detail.  
- **Responsive Design** – Optimized layouts for desktop, tablet, and mobile devices.  
- **Tailwind CSS Utility-First Styling** – Faster development with consistent design tokens.  
- **Performance Optimized** – Code splitting and lightweight icon system.

## 📱 Pages

1. **Home** - Hero section, stats, services preview, testimonials
2. **Services** - Detailed service offerings and process
3. **About** - Company story, values, team, timeline
4. **Contact** - Contact form, office locations, business info

## 🔧 Key Components

### Button Component
```jsx
<Button type="primary" to="/">
  Get Started
</Button>
```

<!-- ### Navigation  -->
- Responsive navbar with mobile menu 
- Active page highlighting
- Smooth navigation between pages

## 💡 What I Learned

- Building responsive layouts with Tailwind CSS
- Creating reusable React components
- Implementing React Router for navigation
- Managing component state and props
- Following clean code practices
- Pixel-perfect design implementation

## 🎯 Project Goals Achieved

- ✅ Pixel-perfect design matching Figma mockups 
- ✅ Fully responsive across all devices
- ✅ Clean, maintainable code structure
- ✅ Reusable component architecture
- ✅ Smooth user experience with animations
- ✅ Professional-grade code quality

<!-- ## 🚀 Future Improvements

- Add form validation and submission
- Implement a backend API
- Add loading states and error handling
- Include unit tests
- Add accessibility improvements -->

## 🤝 Acknowledgments

<!-- - Thanks to my supervisor for guidance and feedback -->
<!-- - Company development team for code review -->
- Design team for providing Figma mockups

---

<!-- **Developed by**: [Your Name]   
**Date**: [Current Date] -->