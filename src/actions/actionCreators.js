// increment
export function increment(i) {
  return {
    type: 'INCREMENT_LIKES',
    index: i
  }
}
// add prediction
export function addPrediction(showId, author, prediction) {
  return {
    type: 'ADD_PREDICTION',
    showId,
    author,
    prediction
  }
}
// remove prediction
export function removePrediction(showId, i) {
  return {
    type: 'REMOVE_PREDICTION',
    i,
    showId
  }
}
