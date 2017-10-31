import canUseDOM from './inDOM'

let size

export function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth
}

export function scrollbarSize(recalc) {
  if ((!size && size !== 0) || recalc) {
    if (canUseDOM) {
      const scrollDiv = document.createElement('div')

      scrollDiv.style.position = 'absolute'
      scrollDiv.style.top = '-9999px'
      scrollDiv.style.width = '50px'
      scrollDiv.style.height = '50px'
      scrollDiv.style.overflow = 'scroll'

      document.body.appendChild(scrollDiv)
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
    }
  }

  return size
}

export function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null
}

export function conditionallyUpdateScrollbar() {
  const scrollbarWidth = scrollbarSize()
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L420
  const fixedContent = document.querySelectorAll('.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed')[0]
  const bodyPadding = fixedContent ? parseInt(
    fixedContent.style.paddingRight || 0,
    10,
  ) : 0

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth)
  }
}
