<template>
  <section class="section">
    <div class="filter-wrapper">
      <div class="title">Filter</div>
      <div class="filter">
        <div class="description">Filter on Price</div>
        <b-slider
          v-model="numbers"
          :min="0"
          :max="500"
          :step="5"
        />
      </div>
    </div>

    <div class="shift-wrapper">
      <div class="shift-header">
        <div class="title">Shifts</div>
        <b-button type="is-dark" @click="addShift">ADD SHIFT</b-button>
      </div>

      <div class="card-wrapper" v-for="(shift, index) in shifts" :key="index">
        <shift-card
          :title="shift.title"
          :description="shift.title"
          :slots="shift.slots"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SET_EDIT_ACTION, SET_CURRENT_SHIFT } from '../constants/mutation-types'
import ShiftCard from '../components/ShiftCard'

export default {
  name: 'HomePage',
  components: {
    ShiftCard
  },
  data () {
    return {
      numbers: [0, 70]
    }
  },
  computed: {
    ...mapState(['shifts'])
  },
  methods: {
    ...mapMutations([SET_EDIT_ACTION, SET_CURRENT_SHIFT]),
    addShift () {
      this[SET_EDIT_ACTION]()
    }
  }
}
</script>

<style lang="scss" scoped>
  .section {
    padding-left: 100px;
    padding-right: 100px;
  }

  .filter-wrapper {
    margin-bottom: 30px;

    .title {
      font-size: 30px;
    }

    .filter {
      display: flex;
      align-items: center;

      .description {
        margin-right: 40px;
        white-space: nowrap;
      }

      .b-slider {
        width: 500px;
      }
    }
  }

  .shift-wrapper {
    .shift-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-wrapper {
      margin-bottom: 20px;
    }
  }
</style>
