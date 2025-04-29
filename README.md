# 🟡 MUSTARD

A curated gallery of mustard-colored inspiration.

MUSTARD is a creative and dynamic image gallery that fetches and displays mustard-toned visuals in an animated moodboard layout. Built with modern web technologies like **Next.js**, **Tailwind CSS**, **Zustand**, and **Framer Motion**, it is both a frontend engineering exercise and a design-led project.

> "MUSTARD" started as a passion project to combine aesthetic inspiration with frontend development. It serves as both an MVP and a personal playground for experimentation with modern tools and creative direction.

---

## 📸 Demo

🧪 Live Project: [mustard-iota.vercel.app](https://mustard-iota.vercel.app)  
📁 GitHub Repository: [github.com/mardimanisha/mustard](https://github.com/mardimanisha/mustard)

![MUSTARD Moodboard Screenshot](https://raw.githubusercontent.com/mardimanisha/mustard/main/public/demo-preview.png)

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Learnings](#learnings)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## ✨ Features

- 🔍 **Search bar** with keyword suggestion and mustard tone auto-enhancement
- 🧱 **Infinite scroll** of images with dynamic loading
- ⚡ **Pexels API integration** to fetch curated, color-filtered images
- 🧠 **Global state management** using Zustand
- 🖼️ **Moodboard layout** using CSS Grid or Masonry
- 🎞️ **Smooth animations** with Framer Motion
- 🧑‍💻 Built with best practices in TypeScript and modular component design

---

## 🛠 Tech Stack

| Tech              | Purpose                        |
|------------------|--------------------------------|
| Next.js           | Framework & Routing            |
| TypeScript        | Type Safety                    |
| Tailwind CSS      | Styling                        |
| Zustand           | Global State Management        |
| Framer Motion     | Animations                     |
| Pexels API        | Image Fetching (External API)  |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mardimanisha/mustard.git
cd mustard
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up Environment Variables
Create a .env.local file in the root directory:
```bash
NEXT_PUBLIC_PEXELS_ACCESS_KEY=your_pexels_api_key
```
### 4. Run the App
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

---
## 🧑‍💻 Usage
- Use the search bar to look for keywords (e.g., "flowers"). It will automatically search "flowers mustard" for consistent tone.
- Scroll to view more mustard-themed images.
- Switch between searches to dynamically update the moodboard.

---
## 📁 Folder Structure
```
src/
│
├── app/                 # Next.js routing
│   ├── api/pexels/route.ts      # API route to call Pexels
│
├── components/          # Reusable UI components (Header, SearchBar, Moodboard, etc.)
├── hooks                # Custom React hooks
├── layout               # Layout wrappers and templates 
├── lib                  # Utilities and API clients
├── models               # TypeScript interfaces and schemas
├── store/               # Zustand global state (image state, pagination, query)
├── services/            # Fetch logic using serverless API
```
---
## 🧠 Learnings
This project helped me:
- Integrate external APIs with proper query handling and dynamic search.
- Understand and implement Zustand for lightweight state management.
- Create animated UI/UX using Framer Motion for smooth transitions.
- Handle pagination, error states, and loading indicators effectively.
- Practice modular component structure and clean code organization in a real-world Next.js project.

---

## 🛤️ Future Improvements
- 🔍 Image Modal View: Click an image to view a larger version with metadata.
- 📂 Filters: Support filters like orientation, size, or new color shades.
- 🌒 Dark Mode: Toggle between light and dark themes.
- 🧠 AI Smart Suggestions: Suggest keywords based on search history or image analysis.
- 🧵 User Accounts: Add ability to save favorite images or create moodboards.
- 🪄 Custom API Layer: Wrap Pexels API in a more flexible internal service.

---

## 🤝 Contributing
Contributions are welcome! 🚀
1. **Fork** the repository  
2. **Create a branch**  
   ```bash
   git checkout -b feature-your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch
   ```bash
   git push origin feature-your-feature-name
   ```
5. Open a Pull Request

---

*"Let’s build something amazing together! 💛"*

--- 

## 👩‍💻 Author  
Manisha Mardi  
Frontend Developer \| Builder \| Explorer  
🔗 [Portfolio](https://manishamardi.dev)  
🐦 [@mardimanisha](https://twitter.com/mardimanisha)  
💼 [LinkedIn](https://linkedin.com/in/manishamardi)

---

## 📄 License
This project is licensed under the MIT License.

---

*"If you enjoyed this project or found it useful, please ⭐ the repo and share it with your friends and fellow developers!"*
