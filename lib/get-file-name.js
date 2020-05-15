module.exports = function getFileName(filePath) {
  const fileBaseName = filePath.split('/').slice(-1)[0]
  return fileBaseName.split('.')[0]
}
