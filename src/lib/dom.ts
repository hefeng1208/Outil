import { error } from '../shard'

export const scrollIntoView = (
  selector: string,
  options: ScrollIntoViewOptions = { behavior: 'smooth' }
): void => {
  if (!selector) {
    return error('argument is invalid')
  }
  try {
    const SelectedHTMLElement = document.querySelector(selector) as HTMLElement
    SelectedHTMLElement.scrollIntoView(options)
  } catch {
    return error('argument is invalid')
  }
}
