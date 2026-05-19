(function () {
    'use strict';

    function getInitialTheme() {
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyThemeClass(theme) {
        var html = document.documentElement;
        html.classList.toggle('dark-mode', theme === 'dark');
        html.classList.toggle('light-mode', theme !== 'dark');
    }

    var initialTheme = getInitialTheme();
    applyThemeClass(initialTheme);

    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var themeToggle = document.getElementById('theme-toggle');
        var themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
        var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        var navLinks = Array.prototype.slice.call(document.querySelectorAll('.top-nav-links a[href^="#"]'));
        var sections = navLinks
            .map(function (link) {
                return document.querySelector(link.getAttribute('href'));
            })
            .filter(Boolean);

        function updateIcon() {
            if (!themeIcon) {
                return;
            }

            themeIcon.textContent = html.classList.contains('dark-mode') ? '☀️' : '🌙';
        }

        function setTheme(theme) {
            applyThemeClass(theme);
            localStorage.setItem('theme', theme);
            updateIcon();
        }

        function toggleTheme() {
            var currentTheme = html.classList.contains('dark-mode') ? 'dark' : 'light';
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        }

        function setActiveNav(targetId) {
            navLinks.forEach(function (link) {
                link.classList.toggle('active', link.getAttribute('href') === '#' + targetId);
            });
        }

        updateIcon();

        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        function handleSystemThemeChange(event) {
            if (!localStorage.getItem('theme')) {
                applyThemeClass(event.matches ? 'dark' : 'light');
                updateIcon();
            }
        }

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handleSystemThemeChange);
        } else if (typeof mediaQuery.addListener === 'function') {
            mediaQuery.addListener(handleSystemThemeChange);
        }

        if (navLinks.length && sections.length) {
            setActiveNav(sections[0].id);

            var observer = new IntersectionObserver(function (entries) {
                var visibleEntries = entries
                    .filter(function (entry) {
                        return entry.isIntersecting;
                    })
                    .sort(function (left, right) {
                        return right.intersectionRatio - left.intersectionRatio;
                    });

                if (visibleEntries.length) {
                    setActiveNav(visibleEntries[0].target.id);
                }
            }, {
                rootMargin: '-18% 0px -58% 0px',
                threshold: [0.15, 0.35, 0.6]
            });

            sections.forEach(function (section) {
                observer.observe(section);
            });
        }
    });
})();
