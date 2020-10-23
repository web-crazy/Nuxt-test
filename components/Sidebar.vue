<template>
  <b-sidebar
    right
    fullheight
    position="static"
    type="is-light"
    :open="true"
  >
    <div class="contents">
      <div class="all">
        <div class="title">
          {{ edit ? 'Edit' : 'Add' }}
        </div>

        <b-field label="Title">
          <b-input v-model="title" />
        </b-field>

        <b-field label="Description">
          <b-input v-model="description" type="textarea" />
        </b-field>

        <b-field label="Select a date">
          <b-datepicker
            v-model="dates"
            placeholder="Click to select..."
            multiple
          />
        </b-field>

        <shift-slot
          v-for="(slot, index) in currentShift.slots"
          :key="index"
          :date="slot.date"
          :start-time="slot.start"
          :end-time="slot.end"
          :price="slot.price"
          :type="slot.type"
        />
      </div>

      <div class="actions">
        <b-button type="active" @click="deleteShift">DELETE</b-button>
        <b-button type="is-dark" @click="saveShift">SAVE</b-button>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {
  UPDATE_SHIFT,
  DELETE_SHIFT,
  ADD_SHIFT,
  SET_CURRENT_SHIFT,
  SET_EDIT_ACTION
} from '../constants/mutation-types'
import ShiftSlot from './ShiftSlot.vue'

export default {
  name: 'Sidebar',
  components: {
    ShiftSlot
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['edit', 'currentShift']),
    dates: {
      set (dates) {
        const slots = dates.map(date => ({
          date,
          start: new Date(),
          end: new Date(),
          price: '',
          type: null
        }))
        this[SET_CURRENT_SHIFT]({ slots })
      },
      get () {
        return this.currentShift.slots.map(slot => slot.date)
      }
    },
    title: {
      set (value) {
        this[SET_CURRENT_SHIFT]({ title: value })
      },
      get () {
        return this.currentShift.title
      }
    },
    description: {
      set (value) {
        this[SET_CURRENT_SHIFT]({ description: value })
      },
      get () {
        return this.currentShift.description
      }
    }
  },
  methods: {
    ...mapMutations([
      UPDATE_SHIFT,
      DELETE_SHIFT,
      ADD_SHIFT,
      SET_CURRENT_SHIFT,
      SET_EDIT_ACTION
    ]),
    deleteShift () {
      this[DELETE_SHIFT](this.currentShift.id)
      const emptyShift = { slots: [], title: '', description: '' }
      this[SET_CURRENT_SHIFT](emptyShift)
    },
    saveShift () {
      if (this.edit) {
        this[UPDATE_SHIFT]()
      } else {
        this[ADD_SHIFT]()
      }

      const emptyShift = { slots: [], title: '', description: '' }
      this[SET_CURRENT_SHIFT](emptyShift)
    }
  }
}
</script>

<style lang="scss" scoped>
.b-sidebar {
  &::v-deep {
    .sidebar-content {
      width: 400px;
    }
  }
}
.contents {
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .actions {
    display: flex;
    justify-content: space-between;

    button {
      width: 150px;
    }
  }
}
</style>
