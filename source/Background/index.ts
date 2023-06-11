import 'emoji-log';
import {browser} from 'webextension-polyfill-ts';

browser.runtime.onInstalled.addListener((): void => {
  console.emoji('🦄', 'extension installed');
});

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab):void => {
  if (changeInfo.status === "complete") {
    browser.tabs.insertCSS(tabId, {
      code: `
        /* TOP BAR CLEAN CLUTTER | GENERAL LINKS | NOTIFICATIONS | NOTIFICATIONS | */
        header .nOssi, header .rZMhb:nth-of-type(3), header .kG7WW { display: none !important }

        /* HIDE VIEWS AND DOWNLOADS COUNT */
        .bck87{ display: none !important; }
        .Y6uS4.moj5G{ gap: 0px !important; }

        /* HIDE INFO BUTTON */
        #popover-photo-footer-info { display: none !important; }

        /* HIDE MENU STATS BUTTON */
        header #popover-avatar-loggedin-menu ul:first-of-type > li:nth-of-type(3) { display: none !important; }

        /* HIDE PROFILE STATS BUTTON */
        #app > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div > ul > li:last-of-type { display: none !important; }

        /* HIDE WHOLE STATS PAGE */
        ${tab.url?.includes("stats") ? `#app > div > div:nth-of-type(2) > div:nth-of-type(4) { display: none !important; }` : ''}
      `
    });
  }
})