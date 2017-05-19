export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'ADD_FAV':
      // console.log(action, "Im an add")
      return [...state, action.favMovie ]
    case 'REMOVE_FAV':
      // console.log(action, "Im a remove")
      // return [...state,]
    default:
      return state;
  }
}
