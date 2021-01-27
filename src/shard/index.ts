export function warn(msg: string, ...args: any[]) {
  const warnArgs = [`[Outil warn]: ${msg}`, ...args]
  console.warn(...warnArgs)
}

export function error(msg: string, ...args: any[]) {
  const errorArgs = [`[Outil error]: ${msg}`, ...args]
  console.error(...errorArgs)
}

export function info(msg: string, ...args: any[]) {
  const infoArgs = [`[Outil info]: ${msg}`, ...args]
  console.info(...infoArgs)
}
