(function () {
    'use strict';
    var links = Array.from(document.querySelectorAll('.top-nav-links a'));
    var sections = links.map(function (link) { return document.querySelector(link.hash); });
    function updateNavigation() {
        var current = sections[0];
        sections.forEach(function (section) {
            if (section && section.getBoundingClientRect().top <= 130) current = section;
        });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
        links.forEach(function (link) {
            var active = link.hash === '#' + current.id;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }
    var scheduled = false;
    window.addEventListener('scroll', function () {
        if (!scheduled) {
            scheduled = true;
            window.requestAnimationFrame(function () { updateNavigation(); scheduled = false; });
        }
    }, { passive: true });
    updateNavigation();
    // Use the public repository API, retaining the verified HTML snapshot on failure.
    document.querySelectorAll('[data-github-repo]').forEach(function (link) {
        var count = link.querySelector('.repo-star-count');
        var badge = link.querySelector('.repo-stars');
        if (!count || !badge) return;
        var controller = new AbortController();
        var timeout = window.setTimeout(function () { controller.abort(); }, 6000);
        var repository = link.dataset.githubRepo.split('/').map(encodeURIComponent).join('/');
        fetch('https://api.github.com/repos/' + repository, {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal
        }).then(function (response) {
            if (!response.ok) throw new Error('Repository statistics unavailable');
            return response.json();
        }).then(function (data) {
            if (!Number.isInteger(data.stargazers_count) || data.stargazers_count < 0) return;
            count.textContent = new Intl.NumberFormat('en', {
                notation: data.stargazers_count >= 1000 ? 'compact' : 'standard',
                maximumFractionDigits: 1
            }).format(data.stargazers_count);
            var description = data.stargazers_count + ' GitHub stars';
            badge.setAttribute('aria-label', description);
            badge.title = description + ' · updated on page load';
        }).catch(function () {
            // Do not replace the last verified count with a misleading zero.
        }).finally(function () { window.clearTimeout(timeout); });
    });
    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        document.querySelectorAll('.bib-toggle[aria-expanded="true"]').forEach(function (button) {
            document.getElementById(button.getAttribute('aria-controls')).hidden = true;
            button.setAttribute('aria-expanded', 'false');
        });
    });
    document.querySelectorAll('.bib-toggle').forEach(function (button) {
        button.addEventListener('click', function () {
            var panel = document.getElementById(button.getAttribute('aria-controls'));
            panel.hidden = !panel.hidden;
            button.setAttribute('aria-expanded', String(!panel.hidden));
        });
    });
    document.querySelectorAll('.copy-bib').forEach(function (button) {
        button.addEventListener('click', async function () {
            var code = button.parentElement.querySelector('code');
            var label = button.querySelector('.copy-label');
            try {
                await Promise.race([
                    navigator.clipboard.writeText(code.textContent),
                    new Promise(function (_, reject) { window.setTimeout(function () { reject(new Error('Clipboard unavailable')); }, 1000); })
                ]);
                label.textContent = 'Copied!';
            } catch (error) {
                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(code);
                selection.removeAllRanges();
                selection.addRange(range);
                var copied = document.execCommand('copy');
                label.textContent = copied ? 'Copied!' : 'Select & copy';
            }
            window.setTimeout(function () { label.textContent = 'Copy'; }, 2200);
        });
    });
})();
