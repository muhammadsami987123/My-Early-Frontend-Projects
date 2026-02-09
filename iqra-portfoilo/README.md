# Iqra Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases a web developer's skills, projects, and provides a contact form for potential clients or employers.

## Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Modern UI**: Clean, professional design with a feminine theme
- **Dark Mode Support**: Automatically adapts to user's system preferences
- **Project Showcase**: Displays projects with details and links
- **Contact Form**: Functional contact form for inquiries
- **Optimized Performance**: Fast loading times and smooth animations

## Tech Stack

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/iqra-portfolio.git
   cd iqra-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
iqra-portfolio/
├── public/            # Static assets
│   └── images/        # Images used in the website
├── src/               # Source code
│   ├── app/           # Next.js app directory
│   │   ├── about/     # About page
│   │   ├── contact/   # Contact page
│   │   ├── projects/  # Projects page
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   └── components/    # Reusable components
│       ├── Footer.tsx # Footer component
│       └── Navbar.tsx # Navigation component
├── tailwind.config.ts # Tailwind CSS configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Customization

### Changing Content

- Update the personal information in the about page
- Add your own projects in the projects page
- Update contact information in the contact page

### Changing Colors

The color scheme can be modified in the `tailwind.config.ts` file. The current theme uses a feminine color palette with pink and purple accents.

### Adding Pages

To add new pages, create a new directory in the `src/app` directory with a `page.tsx` file.

## Deployment

This website can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Click "Deploy"

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
