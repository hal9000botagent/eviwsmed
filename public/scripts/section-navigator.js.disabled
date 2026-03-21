// Section Navigator for Stacking Scroll Pattern (Function Health Style)
// Only runs on Starlight article pages, not landing page

document.addEventListener('DOMContentLoaded', () => {
  // Only run on Starlight pages (not landing page)
  const isStarlightPage = document.querySelector('.sl-markdown-content');
  if (!isStarlightPage) return;

  const mainContent = document.querySelector('.sl-markdown-content');
  if (!mainContent) return;

  // Extract all h2 headings (major sections)
  const headings = Array.from(mainContent.querySelectorAll('h2'));
  if (headings.length === 0) return;

  // Create section navigator
  const navigator = document.createElement('nav');
  navigator.className = 'section-navigator';
  navigator.setAttribute('aria-label', 'Sections');

  const navList = document.createElement('ul');
  
  headings.forEach((heading) => {
    // Ensure heading has an ID
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.setAttribute('data-section', heading.id);
    
    li.appendChild(link);
    navList.appendChild(li);
  });

  navigator.appendChild(navList);

  // Insert navigator into layout
  const contentWrapper = document.querySelector('.content-panel') || mainContent.parentElement;
  if (contentWrapper) {
    // Wrap content in new grid container
    const container = document.createElement('div');
    container.className = 'sl-container';
    
    contentWrapper.parentNode.insertBefore(container, contentWrapper);
    container.appendChild(navigator);
    container.appendChild(contentWrapper);
    contentWrapper.classList.add('content-wrapper');
  }

  // IntersectionObserver for active state
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = navigator.querySelector(`a[data-section="${id}"]`);
      
      if (entry.isIntersecting) {
        // Remove active from all
        navigator.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        // Add to current
        if (link) link.classList.add('active');
      }
    });
  }, observerOptions);

  headings.forEach(heading => observer.observe(heading));

  // Smooth scroll on click
  navList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without jump
        history.pushState(null, null, `#${targetId}`);
      }
    }
  });
});
