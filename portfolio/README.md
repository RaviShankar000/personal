# 🚀 Modern Portfolio Website

A premium, animated portfolio website inspired by [manishraj.in](https://www.manishraj.in/), built with React, GSAP, Three.js, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)

## ✨ Design Features

### 🎨 **Premium Aesthetic**
- **Dark/Light Theme Toggle** - Alternating sections with dark navy and light blue-gray backgrounds
- **Large Decorative Text** - Massive outlined background text ("HEY, I'M", "ABOUT ME", "TOOLBOX", etc.)
- **Glassmorphism** - Translucent cards with backdrop blur effects
- **Gradient Typography** - Eye-catching purple-to-pink gradient text
- **3D Floating Shapes** - Multiple geometric shapes (dodecahedron, torus, octahedron) floating in the background

### 🎭 **Animations**
- **GSAP Timeline Animations** - Smooth, professional entrance animations
- **Scroll-Triggered Effects** - Content reveals as you scroll
- **Hover Interactions** - Scale, glow, and lift effects on cards
- **Stagger Animations** - Sequential reveal of multiple elements

### 📱 **Responsive Design**
- Fully responsive on all devices (mobile, tablet, desktop)
- Optimized layouts for different screen sizes
- Touch-friendly interactions

## 🛠️ Tech Stack

- **React 19** - Latest UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **GSAP** - Professional-grade animation library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

## 📦 Installation

```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

The dev server will automatically open on an available port (usually 5173-5176). Look for the output:

```
VITE v7.3.1  ready in XXX ms

➜  Local:   http://localhost:XXXX/
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navigation with scroll effects
│   │   ├── Background3D.jsx    # 3D floating geometric shapes
│   │   ├── Hero.jsx            # Hero section with large gradient text
│   │   ├── About.jsx           # About section with numbered cards
│   │   ├── Skills.jsx          # Toolbox section with categorized skills
│   │   ├── Projects.jsx        # Featured works with hover effects
│   │   └── Contact.jsx         # Contact form & social links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & custom animations
├── index.html                  # HTML template with SEO meta tags
└── package.json                # Dependencies
```

## 🎯 Sections Overview

### 1. **Hero Section**
- Large gradient name "RAVI SHANKAR"
- Decorative outline text "HEY, I'M" in background
- Two CTA buttons: "View My Work" and "Let's Talk"
- Animated scroll indicator
- Dark navy gradient background with blue glow

### 2. **About Section**
- Light blue-gray gradient background
- Large "ABOUT ME" watermark text
- Personal statement with gradient accent
- Three numbered cards (01, 02, 03):
  - Full Stack Development
  - UI/UX Design
  - Problem Solving

### 3. **Skills Section (My Toolbox)**
- Dark background with "TOOLBOX" outline text
- Three categorized sections:
  - **Frontend**: React, Next.js, TypeScript, Tailwind CSS, GSAP, Three.js
  - **Backend**: Node.js, Express, MongoDB, PostgreSQL, REST APIs, GraphQL
  - **Tools & Others**: Git, Docker, AWS, Figma, VS Code, Postman
- Glassmorphic cards with gradient skill badges

### 4. **Projects Section (Featured Works)**
- Light background with "PROJECTS" watermark
- Large project cards with:
  - High-quality images with gradient overlays
  - Hover-reveal circular "View" button
  - Project title, description, and tech stack
  - Smooth lift animation on hover

### 5. **Contact Section (Let's Connect)**
- Dark background with "GET IN TOUCH" outline text
- Four social media cards (GitHub, LinkedIn, Twitter, Email)
- Glassmorphic contact form with gradient submit button
- Footer with copyright

## 🎨 Customization Guide

### Update Personal Information

#### 1. **Hero Section** (`src/components/Hero.jsx`)
```javascript
// Line 48-50
<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
  RAVI SHANKAR  // Change to your name
</span>

// Line 56-57
<p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-4">
  Full Stack Developer  // Change to your title
</p>
```

#### 2. **About Section** (`src/components/About.jsx`)
```javascript
// Line 58-61
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight max-w-4xl">
  I'm a passionate developer who loves turning ideas into 
  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> reality through code</span>
</h2>

// Line 62-66
<p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
  Currently focused on building exceptional digital experiences that combine 
  cutting-edge technology with thoughtful design.
</p>

// Line 38-50 - Update focus areas
const focusAreas = [
  {
    number: '01',
    title: 'Your Service 1',
    description: 'Your description'
  },
  // ... add more
];
```

#### 3. **Skills Section** (`src/components/Skills.jsx`)
```javascript
// Line 8-13 - Update skills
const skills = {
  'Frontend': ['Your', 'Skills', 'Here'],
  'Backend': ['Your', 'Skills', 'Here'],
  'Tools & Others': ['Your', 'Tools', 'Here']
};
```

#### 4. **Projects Section** (`src/components/Projects.jsx`)
```javascript
// Line 8-38 - Update projects
const projects = [
  {
    title: 'Your Project Name',
    description: 'Your project description',
    tech: ['React', 'Node.js', 'etc'],
    image: 'https://your-image-url.com',
    link: 'https://your-project-link.com',
    gradient: 'from-blue-600 to-cyan-600'
  },
  // ... add more projects
];
```

#### 5. **Contact Section** (`src/components/Contact.jsx`)
```javascript
// Line 27-48 - Update social links
const socialLinks = [
  {
    name: 'GitHub',
    icon: '💻',
    url: 'https://github.com/yourusername',
    username: '@yourusername'
  },
  // ... update all links
];
```

### Customize Colors

The portfolio uses a sophisticated color palette:

**Dark Sections:**
- Background: `from-slate-950 via-slate-900 to-slate-950`
- Text: `text-white`, `text-gray-300`, `text-gray-400`
- Accents: `from-indigo-400 via-purple-400 to-pink-400`

**Light Sections:**
- Background: `from-slate-50 via-blue-50 to-indigo-50`
- Text: `text-slate-900`, `text-slate-600`
- Accents: `from-indigo-600 to-purple-600`

### Modify 3D Background

Edit `src/components/Background3D.jsx`:

```javascript
// Line 27-60 - Adjust shapes, positions, colors, and speeds
<FloatingShape 
  position={[-4, 2, -3]}  // [x, y, z] position
  geometry={dodecahedron} // Shape type
  color="#4f46e5"         // Color
  speed={0.8}             // Animation speed
/>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Method 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Method 2: Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to app.netlify.com/drop
```

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🎯 Key Design Principles

### 1. **Alternating Themes**
Sections alternate between dark and light backgrounds for visual rhythm:
- Hero: Dark
- About: Light
- Skills: Dark
- Projects: Light
- Contact: Dark

### 2. **Decorative Typography**
Large, outlined background text adds depth and visual interest without overwhelming content.

### 3. **Glassmorphism**
Translucent cards with backdrop blur create a modern, premium feel:
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### 4. **Gradient Accents**
Strategic use of gradients on text and buttons for visual pop:
```css
background: linear-gradient(to right, #4f46e5, #7c3aed);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 5. **Smooth Animations**
GSAP powers professional-grade animations:
```javascript
gsap.fromTo(element, 
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
);
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Port Already in Use
Vite will automatically try the next available port.

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3D Shapes Not Showing
Ensure Three.js dependencies are installed:
```bash
npm install three @react-three/fiber @react-three/drei
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- **Design Inspiration**: [manishraj.in](https://www.manishraj.in/)
- **GSAP** - For amazing animation capabilities
- **Three.js** - For 3D graphics
- **Tailwind CSS** - For rapid UI development
- **Vite** - For blazing fast development experience

## 📧 Contact

**Ravi Shankar**
- GitHub: [@RaviShankar000](https://github.com/RaviShankar000)
- Portfolio: [Live Demo](http://localhost:5176)

---

**Built with ❤️ using modern web technologies**

*Inspired by the premium design of manishraj.in*

*Last Updated: February 2026*
