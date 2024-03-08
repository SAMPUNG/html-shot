# html-shot

Make Image By HTML Element

# 安装

```cmd
npm install @jugar/html-shot
```

# 截图返回URL

```ts
import { videoShot } from '@jugar/html-shot'

videoShot('streamingVideo')
```

# 截图下载

```ts
import { downloadImage, videoShot } from '@jugar/html-shot'

const url = videoShot('streamingVideo')
downloadImage(url)
```
