export default link => {
  const element = window.document.createElement('a');
  element.href = link;
  return window.location.host !== element.host;
};
