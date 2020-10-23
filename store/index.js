import { uuid } from 'uuidv4'
import {
  SET_ALL_SHIFTS,
  SET_CURRENT_SHIFT,
  SET_EDIT_ACTION,
  DELETE_SHIFT,
  UPDATE_SHIFT,
  ADD_SHIFT
} from '../constants/mutation-types'

export const state = () => ({
  shifts: [],
  currentShift: {
    slots: []
  },
  edit: false
})

export const mutations = {
  [SET_ALL_SHIFTS] (state, data) {
    state.shifts = [...data]
  },
  [SET_CURRENT_SHIFT] (state, data) {
    state.currentShift = { ...state.currentShift, ...data }
    state.edit = false
  },
  [SET_EDIT_ACTION] (state, data) {
    state.edit = data
  },
  [DELETE_SHIFT] (state, id) {
    state.shifts = state.shifts.filter(shift => shift.id !== id)
  },
  [UPDATE_SHIFT] (state) {
    const currentShift = state.currentShift
    state.shifts = state.shifts.map((shift) => {
      if (shift.id === currentShift.id) {
        return currentShift
      }
    })
  },
  [ADD_SHIFT] (state) {
    const shift = {
      ...state.currentShift,
      id: uuid()
    }
    state.shifts = [...state.shifts, shift]
  }
}
