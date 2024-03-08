const DELAY = 1000

export function downloadImage(url: string) {
  const alink: HTMLAnchorElement = document.createElement('a')
  alink.href = url
  alink.download = `screenshot-${Date.now()}.png`
  alink.click()

  setTimeout(() => {
    alink.remove()
  }, DELAY)
}
