/*
 * Smart Chick Egg Incubator
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Sidebar Toggle (Mobile)
    const sidebarToggle = document.querySelector('#sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Initialize Auth Checks
    if (typeof checkAuth === 'function') {
        checkAuth();
    }
});

/* --- Authentication Logic --- */
const AUTH_KEY = 'smart_chick_users';
const CURRENT_USER_KEY = 'smart_chick_current_user';

// Mock API delay helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function signup(name, email, password) {
    let users = JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
    
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Email already exists!' };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
    
    // Auto login after signup
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name, email }));
    return { success: true };
}

async function login(email, password) {
    let users = JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, email: user.email }));
        return { success: true };
    }
    return { success: false, message: 'Invalid credentials!' };
}

function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'index.html';
}

function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    const path = window.location.pathname;
    
    // Pages that require auth
    const guardedPages = ['dashboard.html'];
    // Pages that are guest only
    const guestPages = ['login.html', 'signup.html'];

    const isGuarded = guardedPages.some(p => path.includes(p));
    const isGuest = guestPages.some(p => path.includes(p));

    if (isGuarded && !currentUser) {
        window.location.href = 'login.html';
    } else if (isGuest && currentUser) {
        window.location.href = 'dashboard.html';
    }

    // Update UI for logged in user
    if (currentUser) {
        const usernameDisplay = document.getElementById('username-display');
        if (usernameDisplay) usernameDisplay.textContent = currentUser.name;
    }
}
