import { DateTime } from 'luxon'
import { error } from '../shard'
import { v4 as isCidrV4, v6 as isCidrV6 } from 'is-cidr'
import { v4 as isIpv4, v6 as isIpv6 } from 'is-ip'

/**
 * 将时间戳转为北京时间
 * @param time
 */
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
    const { fromISO } = DateTime
    timestamp = fromISO(hostTime).toFormat('yyyy-MM-dd HH:mm:ss')
  } catch {
    error('The input timestamp is invalid')
  }
  return timestamp
}

/**
 * 将输入的字符按进制向上转化
 * @param bytes
 * @param unit
 * @param fractionDigits
 */
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
    return (bytes / Math.pow(unit, i)).toFixed(fractionDigits) + sizes[i]
  } else {
    return '-'
  }
}

/**
 * 验证带子网掩码的ipv4类的IP是否合法
 * @param ip
 */
export const isV4CidrIp = (ip: string): boolean => isIpv4(ip) || isCidrV4(ip)

/**
 * 验证带子网掩码的ipv6类的IP是否合法
 * @param ip
 */
export const isV6CidrIp = (ip: string): boolean => isIpv6(ip) || isCidrV6(ip)

/**
 * 1. isIpv4,isIpv6 验证是否是ipv4,ipv6
 * 2. isCidrV4,isCidrV6 只验证带掩码的ipv4和ipv6地址,不带子网掩码验证不通过
 */
export { isIpv4, isIpv6, isCidrV4, isCidrV6 }

/**
 * 将数字展开,返回奇数 spreadNumber(6) => 1,3,5
 * @param num 输入一个整数
 * @param arr
 * @returns string
 */
export function spreadNumber(num: number, arr: [] = []): string {
  if (!num) {
    error('argument is invalid')
    return ''
  }

  // 如果是偶数,减1
  if (num % 2 === 0) {
    num = num - 1
  }
  // 如果为奇数 存起来
  if (num % 2 === 1) {
    arr.push(num as never)
    // 如果不为1,继续递归
    if (num !== 1) {
      return spreadNumber(--num, arr)
    }
  }
  return arr.sort().toString()
}
