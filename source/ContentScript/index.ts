console.log('hello from content script');
console.log(document.getElementsByClassName('XWQyM'));
document.body.addEventListener('DOMNodeInserted', () => {
  console.log(document.getElementsByClassName('XWQyM'));
}, false );
export {};