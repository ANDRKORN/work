import { createSelector } from 'reselect'

const selectCell = state => state;


export const selectSubtotal = createSelector([
    selectCell,
    (state, id) => id,
    (state, cd) => cd,
], (items, cd, index) => {
    console.log(items)
    console.log(cd)
    console.log(index)
})


