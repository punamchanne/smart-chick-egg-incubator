# 🐣 Smart Chick Egg Incubator

Welcome to **Smart Chick**, a modern, IoT-enabled dashboard for monitoring and controlling egg incubators. This project provides a beautiful, responsive frontend interface that can be easily connected to an ESP32 microcontroller.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS-blue)

## ✨ Features

- **Real-Time Monitoring**: Live visualization of Temperature and Humidity.
- **Smart Alerts**: Visual warnings (Red pulse) when conditions are unsafe.
- **Device Control**: Toggle switches for Heater, Fan, Humidifier, and Tray Rotation.
- **Authentication**: Built-in Signup/Login system using `localStorage` (no database required).
- **Responsive Design**: Works perfectly on Desktop, Tablet, and Mobile.
- **Glassmorphism UI**: Modern, clean, and premium aesthetics.

## 🚀 How to Run Requirements

You don't need to install anything complex. This is a pure **HTML/CSS/JS** project.

### Method 1: Python (Easiest)
If you have Python installed:

1.  Open your terminal/command prompt.
2.  Navigate to the project folder.
3.  Run:
    ```bash
    python -m http.server 8000
    ```
4.  Open your browser and visit: `http://localhost:8000`

### Method 2: VS Code Live Server
1.  Open the project in **VS Code**.
2.  Install the "Live Server" extension.
3.  Right-click on `index.html` and select **"Open with Live Server"**.

### Method 3: Direct File Open
You can simply double-click `index.html` to open it in your browser.
*(Note: Some browser security features might block local storage interactions in this mode, so a local server is recommended).*

## 📱 Mobile Responsiveness

The dashboard is fully optimized for mobile devices.
- **Sidebar**: Becomes a slide-out drawer on smaller screens.
- **Grid System**: Cards stack vertically for easy reading.
- **Touch-Friendly**: Large buttons and toggles.

## 🔌 Connecting to an ESP32

The dashboard is ready to fetch data from an API. See `GUIDE.md` for detailed instructions on how to program your ESP32 to serve JSON data to this dashboard.

---

**Happy Hatching!** 🐥
