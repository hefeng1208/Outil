# xtoolkits
This is a collection of commonly used tools

## Installation

> npm install xtoolkits

> yarn add xtoolkits

## Example

```javascript
import { byByteConvertUnit } from 'xtoolkits'

const bytes = 1024000
const unit = 1024 // default 1024
const fractionDigits = 2 // default 2

byByteConvertUnit(bytes,unit,fractionDigits) // 1000.00KB

```
## APIs

|  API   | description  |
|  ----  | ----  |
| byByteConvertUnit  | Change unit according to byte |
| formatTimestamp  | Convert to local time based on timestamp |
| spreadNumber  | 将数字展开,返回奇数 spreadNumber(6) => 1,3,5 |
| isIpv4  | 验证是否是ipv4 |
| isIpv6  | 验证是否是ipv6 |
| isCidrV4  | 验证是否是带子网掩码的ipv4 |
| isCidrV6  | 验证是否是带子网掩码的ipv6 |
| isV4CidrIp  | 验证是否是ipv4,支持子网掩码验证 |
| isV6CidrIp  | 验证是否是ipv6,支持子网掩码验证 |
| scrollIntoView  | [scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) |

## [MIT](/LICENSE)