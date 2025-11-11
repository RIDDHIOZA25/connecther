# ConnectHer Website Setup Guide

## 🚀 Quick Start

1. **Add Your Logo Files**
   - Place `logo-horizontal.png` (or .svg) in the `assets/` folder
   - Place `favicon.png` (or .ico) in the `assets/` folder
   - Update the file extensions in `index.html` if using different formats

2. **Add Google Form URL**
   - Open `index.html`
   - Find `[GOOGLE_FORM_URL_PLACEHOLDER]` in the waitlist section
   - Replace it with your actual Google Form URL
   - Example: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform`

3. **Update Content**
   - Replace all placeholder text in `index.html`:
     - `[Your Tagline Here]` - Page title
     - `[Your description here]` - Meta description
     - `[Your Main Headline Here]` - Hero headline
     - `[Your compelling subtitle...]` - Hero subtitle
     - `[What ConnectHer Solves]` - Value proposition title
     - `[Brief description...]` - Value proposition description
     - `[Benefit 1/2/3 Title]` - Benefit card titles
     - `[Description of benefit...]` - Benefit descriptions
     - `[Join the waitlist description...]` - Waitlist description
     - `[Location]` - Launch location
     - `[Bonus Name]` - Free bonus name
     - `[relevant comparison]` - Waitlist note comparison
     - `[Founder quote...]` - Founder quote text
     - `[Founder Name]` - Founder name

4. **Test the Website**
   - Open `index.html` in a browser
   - Test the waitlist button link
   - Check responsive design on mobile and desktop
   - Verify all images load correctly

## 📁 File Structure

```
connecther/
├── index.html          # Main HTML file
├── styles.css          # All styles (brand colors, typography, layout)
├── script.js           # JavaScript for interactivity
├── assets/             # Brand assets folder
│   ├── logo-horizontal.png
│   ├── favicon.png
│   └── README.md
├── README.md           # Project README
└── SETUP.md            # This file
```

## 🎨 Brand Guidelines Implementation

### Colors (from brand guidelines):
- Purple: `#410088` - Primary brand color
- Light Purple: `#905CFF` - Secondary color
- Lila: `#AF88FF` - Accent color
- Blue: `#92D2D8` - Accent color
- Beige: `#F7F5ED` - Background accent
- Orange: `#FF8600` - Accent color

### Typography:
- **Merriweather** - Headlines (h1, h2, h3)
- **Manrope** - Body text, buttons, navigation

### Logo Usage:
- Horizontal logo: Primary logo for navigation and footer
- Wordmark: Favicon (minimum height: 5mm per brand guidelines)

## 🔧 Customization

### Changing Colors:
- All colors are defined as CSS variables in `styles.css` (root section)
- Update the `:root` variables to change colors globally

### Adding Sections:
- Follow the existing section structure in `index.html`
- Use the same class naming conventions
- Maintain consistent spacing and styling

### Responsive Breakpoints:
- Mobile: `< 480px`
- Tablet: `481px - 768px`
- Desktop: `> 768px`

## 📝 Deployment

### Option 1: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select main branch and / (root) folder
4. Your site will be live at `https://[username].github.io/connecther`

### Option 2: Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be live instantly
3. Custom domain can be added in settings

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## ✅ Checklist Before Launch

- [ ] Logo files added to assets folder
- [ ] Google Form URL added
- [ ] All placeholder content replaced
- [ ] Images load correctly
- [ ] Waitlist button links to Google Form
- [ ] Mobile responsive design tested
- [ ] All brand colors correct
- [ ] Typography (fonts) load correctly
- [ ] Favicon displays in browser tab
- [ ] No console errors
- [ ] SEO meta tags updated

## 🆘 Troubleshooting

### Images not loading:
- Check file paths in `index.html`
- Ensure files are in the `assets/` folder
- Verify file names match exactly (case-sensitive)

### Google Form not opening:
- Verify the Google Form URL is correct
- Test the URL in a browser first
- Ensure the form is set to "Anyone with the link can view"

### Fonts not loading:
- Check internet connection (Google Fonts requires internet)
- Verify font names in `index.html` match Google Fonts
- Check browser console for errors

## 📞 Support

For issues or questions, refer to the brand guidelines document or contact the development team.

