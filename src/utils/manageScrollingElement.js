const freezeStyle = {
  overflow: 'hidden',
  width: '100%'
};

const unfreezeStyle = {
  overflow: 'auto',
  width: 'auto'
};

const freezeScroll = (style = freezeStyle) => {
  const bodyEl = document.body;
  const currentScrollTop = document.documentElement.scrollTop;
  window.LAST_SCROLL_TOP = currentScrollTop;
  Object.assign(freezeStyle, { top: `-${currentScrollTop}px` });
  Object.assign(bodyEl.style, style);
};

const unfreezeScroll = (style = unfreezeStyle) => {
  const bodyEl = document.body;
  Object.assign(bodyEl.style, style);
  document.documentElement.scrollTop = window.LAST_SCROLL_TOP;
};

export { freezeScroll, unfreezeScroll };
