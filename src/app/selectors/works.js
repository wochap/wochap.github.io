export function getWorkError ({works}) { // eslint-disable-line
  return works.error ? works.error : false
}

export function getWork ({works}, workSlug) { // eslint-disable-line
  return {
    ...works.data[workSlug]
  }
}

export function getWorks ({works}) { // eslint-disable-line
  // TODO: improve code
  return Object.values(works.data).map(p => p)
}
