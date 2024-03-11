import { videoShot } from '../core/video'

const button = <HTMLButtonElement>document.getElementById('shot')!
const image = <HTMLImageElement>document.getElementById('capture')!
const anchor = <HTMLAnchorElement>document.getElementById('download')!

button.addEventListener('click', () => {
  const url = videoShot('tiny', 0.2)

  if (url) {
    anchor.download = `videoshot-${Date.now()}.png`
    anchor.href = url
    image.src = url
  }
})
