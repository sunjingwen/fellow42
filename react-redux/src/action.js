export const add = (num) => {
  console.log('add-action');
  return {
    type: 'COUNT_ADD',
    num
  }
}
export const reduce = () => {
  return {
    type: 'COUNT_REDUCE'
  }
}

export const addStr = (str) => {
  return {
    type: 'ADD_STR',
    str
  }
}


