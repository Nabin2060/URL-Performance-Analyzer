# 🌐 URL Performance Analyzer

A React-based web app that analyzes the performance of any given URL using the Google PageSpeed Insights API. It shows load time, page size, and number of requests. The project follows clean, modular structure with responsive design using Tailwind CSS.

---

## Features

- ✅ Analyze any URL for:
  - ⏱️ Load Time
  - 📦 Total Page Size
  - 🔁 Number of HTTP Requests
- 📱 Fully responsive design (mobile-first)
- 🧩 Built with React Functional Components & Hooks
- 📦 Tailwind CSS used for modern styling
- 🔐 API key hidden using `.env`
- 🚀 Hosted on Vercel

---

## ⚙️ How to Set Up

### 1. Clone the Repository

git clone https://github.com/Nabin2060/URL-Performance-Analyzer.git

2.  Install Dependencies

npm install

3. Get Your Google API Key
   Go to: Google Cloud Console
   Select or create a project

Go to: APIs & Services > Library

Search for PageSpeed Insights API and enable it

Go to: APIs & Services > Credentials

Create an API Key and copy it

4. Add Your API Key to .env
   Create a .env file in the project root:

.env

VITE_PSI_API_KEY=your_google_api_key_here

5. Run the App

   npm run dev

## 🌍 Test URLs

Use these to test performance:

✅ https://hamropatro.com

❌ Avoid blocked URLs like https://google.com , youtube

🔗 Live Demo
🌐 https://your-live-link.vercel.app

## 🧠 AI Tools Used

### 1. **ChatGPT**

Used for:

- Structuring application logic
- API integration flow
- Writing code snippets & documentation

**Sample Prompt Used:**

Suggest sample testing URLs that can be used safely with Google PageSpeed API.
How to parse and extract load time, page size, and number of requests from the PageSpeed Insights API response?
Convert fetch to Axios with .env API key

---

### 2. **Cursor AI**

Used for:

- Tailwind-based UI styling
- Component structure refactoring
- Real-time AI-driven code improvements

**Cursor Commands Used:**
Improve this card’s design using Tailwind CSS
Apply modern font and spacing settings
Replace all <div> with semantic HTML if possible

## ©️ License & Credits

Made with ❤️ by Nabin Adhikari
© 2025 Nabin Adhikari | All Rights Reserved
📧 Email: adhikarinabin2060@gmail.com
