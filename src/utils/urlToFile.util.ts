/**
 *
 * @param  url accepts base64 , remote file url of any type
 * @param  filename returns the filename provided by the user. eg: yourimage.png , yourfile.txt
 * @param  mimeType eg: jpeg/image , txt/plain
 * @returns
 */
export const urltoFile = (url: any, filename: string, mimeType: string) => {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer()
    })
    .then(function (buf) {
      return new File([buf], filename, {type: mimeType})
    })
}
