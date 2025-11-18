// Theme toggle functionality
(function() {
    'use strict';
    
    // 获取保存的主题或系统偏好
    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // 如果没有保存的主题，使用系统偏好
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // 应用主题（不依赖DOM元素，用于初始化）
    function setThemeClass(theme) {
        const html = document.documentElement;
        if (theme === 'dark') {
            html.classList.add('dark-mode');
            html.classList.remove('light-mode');
        } else {
            html.classList.add('light-mode');
            html.classList.remove('dark-mode');
        }
    }
    
    // 初始化主题（在DOM加载前执行，避免闪烁）
    const initialTheme = getInitialTheme();
    setThemeClass(initialTheme);
    
    // DOM加载完成后设置按钮和事件
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('.theme-icon');
        const html = document.documentElement;
        
        // 更新图标
        function updateIcon() {
            if (html.classList.contains('dark-mode')) {
                themeIcon.textContent = '☀️';
            } else {
                themeIcon.textContent = '🌙';
            }
        }
        
        // 应用主题（完整版本，包括图标更新）
        function setTheme(theme) {
            if (theme === 'dark') {
                html.classList.add('dark-mode');
                html.classList.remove('light-mode');
                themeIcon.textContent = '☀️';
            } else {
                html.classList.add('light-mode');
                html.classList.remove('dark-mode');
                themeIcon.textContent = '🌙';
            }
            localStorage.setItem('theme', theme);
        }
        
        // 切换主题
        function toggleTheme() {
            const currentTheme = html.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        }
        
        // 初始化图标
        updateIcon();
        
        // 监听系统主题变化（仅在用户未手动设置时）
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // 如果用户没有手动设置过主题，则跟随系统
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
        
        // 绑定点击事件
        themeToggle.addEventListener('click', toggleTheme);
    });
})();

