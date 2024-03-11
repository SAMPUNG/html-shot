/** 通过 URL 下载图片 */
export declare function downloadImage(url: string): void

/**
 * 通过 ID 选择 Video 元素，截图返回 URL
 * 可选参数: quality 截图质量，0 ~ 1 之间的值，默认值为 1
 * 按质量参数进行图片压缩，默认不压缩
 */
export declare function videoShot(id: string, quality?: number): string | undefined
