# Task-3-SITTA-UT-Application
# SITTA Teaching Materials System - Universitas Terbuka

A simple *Single Page Application* (SPA) web application for stock management, Delivery Order (DO) tracking, and creating teaching material orders for Universitas Terbuka students.

This application is built using Vue.js 2 (via CDN) with a *Component-Based Architecture* without build tools (Node.js/Webpack), making it very lightweight and easy to learn.

## 🚀 Main Features

1. **📦 Teaching Materials Stock (CRUD & Filter)**
   - Displays the list of teaching materials.
   - Filter by UT-Region and Category.
   - *Sorting* feature by Title, Price, and Qty.
   - Visual Indicators (Badges) for stock status (Safe, Low, Empty) with a *Hover Tooltip* feature.
   - Add/Edit/Delete stock data forms.

2. **🚚 DO Tracking**
   - Search delivery status using the DO Number or Student ID (NIM).
   - Displays the delivery journey history (Tracking history).

3. **📝 Create New Order**
   - Form for creating a new Delivery Order.
   - *Auto-generate* DO Number based on the current year and sequence.
   - Automatic total price calculation based on the selected package.
   - Data is automatically integrated into the Tracking system after submission.

## 🛠️ Technologies Used

- **HTML5 & CSS3** (Custom styling, no external CSS framework)
- **JavaScript (ES6)**
- **Vue.js v2** (Imported via CDN)
- **Fetch API** (For simulating data fetching from a local Mock JSON)

## 📂 Directory Structure

```text
├── assets/
│   └── css/style.css            # Application styling
├── data/
│   └── dataBahanAjar.json       # Mocking Data API (Static database)
├── js/
│   ├── components/              # Vue Components
│   │   ├── do-tracking.js
│   │   ├── order-form.js
│   │   ├── status-badge.js
│   │   └── stock-table.js
│   ├── services/
│   │   └── api.js               # Service API Fetcher
│   └── app.js                   # Main Vue Instance & Filters
└── index.html                   # Entry point
```
## ⚙️ How to Run the Application

Because this application uses `fetch()` to retrieve the local `dataBahanAjar.json` file, it cannot be run by simply double-clicking on the `index.html` file as it will be blocked by the browser's CORS (Cross-Origin Resource Sharing) policies. You must run it using a Local Web Server.

**Option 1: Using VS Code (Recommended)**
1. Open this project folder in Visual Studio Code.
2. Install the extension **Live Server** extension.
3. Right-click on the `index.html` file and select **"Open with Live Server"**.
4. The browser will automatically open at `http://127.0.0.1:5500`.

**Option 2: Using Python**
If you already have Python installed on your computer, open the terminal/CMD inside this project folder and run:
`python -m http.server 8000`
Then open your browser at `http://localhost:8000`

**Option 3: Using Node.js**
Open the terminal/CMD inside this project folder and run:
`npx http-server`

## 👨‍💻 Author
Developed by Ignatius Wilhelmus Kim Kerans for a Web-Based Programming Assignment / Project at Universitas Terbuka.
