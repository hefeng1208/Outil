export function warn(msg: string, ...args: any[]) {
  const warnArgs = [`[xtoolkits warn]: ${msg}`, ...args]
  console.warn(...warnArgs)
}

export function error(msg: string, ...args: any[]) {
  const errorArgs = [`[xtoolkits error]: ${msg}`, ...args]
  console.error(...errorArgs)
}

export function info(msg: string, ...args: any[]) {
  const infoArgs = [`[xtoolkits info]: ${msg}`, ...args]
  console.info(...infoArgs)
}
