# html-shot

Make Image By HTML Element

# 安装

```cmd
npm install @jugar/html-shot
```

# 截图返回URL

```ts
import { videoShot } from '@jugar/html-shot'

const url = videoShot('streamingVideo')
```

# 截图返回URL（图片压缩）

```ts
import { videoShot } from '@jugar/html-shot'

// 缩小五倍
const url = videoShot('streamingVideo'， 0.2)
```

# 截图下载

```ts
import { downloadImage, videoShot } from '@jugar/html-shot'

const url = videoShot('streamingVideo')
downloadImage(url)
```
