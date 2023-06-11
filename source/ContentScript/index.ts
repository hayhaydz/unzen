// console.log(document.getElementsByClassName('XWQyM'));
// document.body.addEventListener('DOMNodeInserted', () => {
//   console.log(document.getElementsByClassName('XWQyM'));
// }, false );

// MORE RELIABLE BUT PERFORMANCE COSTLY
// let menuContainer = document.getElementById("popover-avatar-loggedin-menu");
// let menuButton = menuContainer?.getElementsByTagName("button");

// menuContainer?.addEventListener('DOMNodeInserted', () => {
//   let menuLinks = menuContainer?.getElementsByTagName("a");
//   if(!menuLinks) return
//   for(let i = 0; i < menuLinks.length; i++) {
//     console.log(menuLinks[i].href)
//     if(menuLinks[i].href.includes("stats")) {
//       console.log('stats link found')
//       menuLinks[i].style.display = 'none'
//     }
//   }
// }, false );

const removeElementByInnerHTMLValue = (parentElement: HTMLElement): void => {
  const childElements = parentElement.querySelectorAll(':scope > *');

  for (let i = childElements.length - 1; i >= 0; i--) {
    const element = childElements[i] as HTMLElement;

    if(element.style.display === "none") {
      continue;
    }

    switch (element.innerHTML) {
      case 'Unsplash+':
      case 'Sponsored': {
        let parent;
        if (element.innerHTML === 'Sponsored') {
          parent = element.closest('div > figure');
          parent = parent && parent.parentElement;
        } else {
          parent = element.closest('figure');
        }

        if (parent) {
          parent.dataset.removed = '';
          parent.style.display = 'none';
          // parent.style.opacity = '0';
        }
        break;
      }

      default:
        removeElementByInnerHTMLValue(element);
        break;
    }
  }
};

const parentElement = document.getElementsByClassName('mItv1');
if (parentElement) {
  document.body.addEventListener('DOMNodeInserted', (event) => {
    let el = (event.target as HTMLElement).closest('figure');
    if(el === null) el = (event.target as HTMLElement).querySelector('figure');
    if(el) removeElementByInnerHTMLValue(el);
  }, false );
}

export {};