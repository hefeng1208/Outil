export function byByteConvertUnit(
  bytes: number,
  unit: number = 1024,
  fractionDigits: number = 2
): string {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (bytes === 0) {
    return `${bytes} B`
  }

  if (!Number.isNaN(bytes)) {
    if (bytes < 0) {
      return `${bytes} B`
    }
    const i = Math.floor(Math.log(bytes) / Math.log(unit))
    return (bytes / Math.pow(unit, i)).toFixed(fractionDigits) + ' ' + sizes[i]
  } else {
    return '-'
  }
}
