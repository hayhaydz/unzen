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

export {};