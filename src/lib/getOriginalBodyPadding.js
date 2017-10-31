export default function () {
  return parseInt(
    window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0,
    10,
  )
}
