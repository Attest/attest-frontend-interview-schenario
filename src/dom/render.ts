export function render(
  html: string,
  effects?: (el: Element) => void,
): (el: Element | null) => void {
  return el => {
    if (el === null) throw new Error('Unable to render to target element')
    el.innerHTML = html
    const child = el.children[0]
    if (effects && child) effects(child)
  }
}
