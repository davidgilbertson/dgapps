function setViewportHeight() {
  document.documentElement.style.setProperty(
    "--viewport-height",
    `${window.visualViewport.height}px`,
  );
}

setViewportHeight();
window.addEventListener("pageshow", () => {
  requestAnimationFrame(setViewportHeight);
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) requestAnimationFrame(setViewportHeight);
});
window.visualViewport.addEventListener("resize", setViewportHeight);
window.visualViewport.addEventListener("scroll", setViewportHeight);
window.addEventListener("resize", setViewportHeight);
window.addEventListener("orientationchange", () => {
  requestAnimationFrame(setViewportHeight);
});

for (let i = 1; i < 8; i++) {
  setTimeout(setViewportHeight, i * 100);
}
