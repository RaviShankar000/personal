# Personal Portfolio Website

A modern, animated personal portfolio website inspired by professional developer portfolios. Features smooth animations, responsive design, and interactive elements.

## ✨ Features

- **Modern Design**: Clean, professional UI with gradient accents
- **Smooth Animations**: Scroll animations, parallax effects, and interactive hover states
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Sections**:
  - Hero section with animated introduction
  - Services/Skills showcase
  - About Me section
  - Skills with categories
  - Projects portfolio
  - Experience timeline
  - Certificates
  - Contact information
- **Interactive Elements**:
  - Smooth scroll navigation
  - Mobile hamburger menu
  - 3D card hover effects
  - Custom cursor (desktop)
  - Scroll progress indicator
  - Animated marquee text
- **Performance Optimized**: Fast loading with CSS animations and intersection observers

## 🚀 Quick Start

1. **Clone or download this repository**
   ```bash
   cd Personal_portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Customize your content**
   - Edit `index.html` to add your personal information
   - Update colors in `styles.css` (check the `:root` variables)
   - Add your own images and project details

## 📝 Customization Guide

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #111111;       /* Secondary background */
    --accent-color: #3b82f6;       /* Primary accent color */
    --accent-hover: #2563eb;       /* Hover state color */
}
```

### Update Personal Information
In `index.html`, replace:
- **Your Name**: Search for "YOUR NAME" and replace with your actual name
- **Email**: Update the contact email address
- **Social Links**: Add your GitHub, LinkedIn, Twitter, etc.
- **Projects**: Update project cards with your actual projects
- **Skills**: Modify the skills sections with your tech stack
- **Experience**: Add your work experience and education
- **Certifications**: List your certifications and credentials

### Add Your Photo
Replace the profile placeholder:
```html
<!-- Find this in the About section -->
<div class="profile-placeholder">
    <span>Your Photo</span>
</div>

<!-- Replace with -->
<img src="your-photo.jpg" alt="Your Name">
```

### Add Project Images
Replace project placeholders:
```html
<!-- Find project placeholders -->
<div class="project-placeholder">Project 1</div>

<!-- Replace with -->
<img src="project-image.jpg" alt="Project Name">
```

## 📁 File Structure

```
Personal_portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎨 Sections Overview

1. **Hero Section**: Eye-catching introduction with animated text
2. **Services**: Showcase what you can do (4 service cards)
3. **About**: Tell your story
4. **Skills**: Display your technical skills in 3 categories
5. **Works**: Feature your best projects
6. **Experience**: Timeline of your work history and education
7. **Certificates**: Display your certifications and achievements
8. **Contact**: Multiple ways for people to reach you
9. **Footer**: Copyright and back to top button

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript (Vanilla)**: No frameworks, pure JS
- **Google Fonts**: Inter font family

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ⚡ Performance Tips

- Add `loading="lazy"` to images for lazy loading
- Compress images before uploading
- Consider using WebP format for images
- Minify CSS and JS for production

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📸 Adding Real Images

To add your real images:

1. Create an `assets` or `images` folder
2. Add your images to the folder
3. Update the `src` attributes in HTML:
   ```html
   <img src="assets/profile.jpg" alt="Your Name">
   ```

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings > Pages
3. Select main branch
4. Your site will be live at `https://yourusername.github.io/Personal_portfolio`

### Netlify
1. Drag and drop your folder to Netlify
2. Or connect your GitHub repo
3. Site will be live instantly

### Vercel
1. Import your GitHub repo
2. Deploy with one click
3. Get automatic deployments on push

## 💡 Tips for Customization

1. **Colors**: Use a color palette generator like [Coolors](https://coolors.co/)
2. **Fonts**: Explore [Google Fonts](https://fonts.google.com/) for alternatives
3. **Icons**: Add [Font Awesome](https://fontawesome.com/) or [Lucide](https://lucide.dev/) for icons
4. **Images**: Use [Unsplash](https://unsplash.com/) for placeholder images
5. **Gradients**: Try [CSS Gradient](https://cssgradient.io/) for custom gradients

## 📄 License

Feel free to use this template for your personal portfolio. No attribution required.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Made with ❤️ and lots of coffee ☕**

Happy coding! 🚀
