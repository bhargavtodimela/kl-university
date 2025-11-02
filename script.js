function loadSite(url) {
  const iframe = document.getElementById('siteFrame');
  const encoded = encodeURIComponent(url);
  iframe.src = `https://curly-wave-fd0d.bhargavtodimela4.workers.dev/?url=${encoded}`;
}
