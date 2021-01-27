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

## [MIT](/LICENSE)