export function videoShot(id: string, quality: number = 1) {
  var player: HTMLVideoElement | null = <HTMLVideoElement>(
    document.getElementById(id)
  )
  if (!player) {
    return
  }

  player.setAttribute('crossOrigin', 'anonymous')

  const canvas = document.createElement('canvas')
  canvas.width = player.clientWidth * quality
  canvas.height = player.clientHeight * quality

  const content = canvas.getContext('2d')
  if (!content) {
    return
  }

  content.drawImage(player, 0, 0, canvas.width, canvas.height)
  const dataURL = canvas.toDataURL('image/png')

  return dataURL
}
