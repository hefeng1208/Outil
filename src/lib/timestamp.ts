import { DateTime } from 'luxon'
import { error } from '../shard'

export function formatTimestamp(time: number | string): string {
  let hostTime = time
  let timestamp = ''
  if (typeof hostTime === 'number') {
    hostTime = String(time)
  }
  if (!hostTime) {
    error('The input timestamp is invalid')
    return ''
  }
  try {
    timestamp = DateTime.fromISO(hostTime).toFormat('yyyy-MM-dd HH:mm:ss')
  } catch {
    error('The input timestamp is invalid')
  }
  return timestamp
}
