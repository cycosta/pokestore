export default function freezeScroll(add) {
  if (add) {
    document.querySelector('html').classList.add('freeze-scroll')
  } else {
    document.querySelector('html').classList.remove('freeze-scroll')
  }
}
