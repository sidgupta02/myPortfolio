# 💼 Developer Portfolio

A modern and interactive personal portfolio website built with **React** and **Tailwind CSS**. It showcases my skills, projects, and contact information with smooth animations, minimal UI, and dynamic interactions.

## 🚀 Features

- Smooth scroll navigation bar with active section highlighting
- Responsive and animated "Skills" section with hover-based tech orbit
- Clean and modern project showcase layout
- Functional contact form using **EmailJS** (no backend required!)
- Dark theme UI with glowing highlights and shadows

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Email Integration:** EmailJS (send form data directly from frontend)
- **Animations & UI Enhancements:** Custom CSS transitions, box shadows, hover effects
- **Icons & Visuals:** Lucide Icons / Custom SVGs

## 📬 Contact Form Workflow

The contact form is built using React’s `useRef()` hook and integrated with **EmailJS**. When a user submits the form, the data is sent directly to your configured email address via EmailJS, eliminating the need for a backend server.

```js
emailjs.sendForm("service_id", "template_id", form.current, "public_key");
```

> Replace `service_id`, `template_id`, and `public_key` in `Contact.jsx` with your actual EmailJS credentials.

## 📦 Installation

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
npm install
npm run dev
```

## 📁 Folder Structure

```
/client
  ├── /components
  ├── /assets
  ├── App.jsx
  ├── index.css
  └── main.jsx
```

