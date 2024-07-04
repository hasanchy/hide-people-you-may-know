// content.js
(function() {
    function hidePeopleYouMayKnow() {
      // Find all <span> elements inside <h3> tags with dir="auto"
      const elements = document.querySelectorAll('h3[dir="auto"] > span[dir="auto"]');
      elements.forEach(element => {
        // Check if the element's text is "People You May Know"
        if (element.innerText === 'People You May Know') {
          // Start from the current element and look for parent with 'border-radius' in the style property
          let parent = element;
          while (parent) {
            if (parent.style && parent.style.borderRadius) {
              parent.style.display = 'none';
              break;
            }
            parent = parent.parentElement;
          }
        }
      });
    }
  
    // Initial hiding of the section
    hidePeopleYouMayKnow();
  
    // Hide the section when the DOM changes
    const observer = new MutationObserver(hidePeopleYouMayKnow);
    observer.observe(document.body, { childList: true, subtree: true });
  })();
  