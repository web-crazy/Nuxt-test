<template>
  <div class="card">
    <div class="header">
      <div class="left">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
      </div>
      <div class="right">
        <b-button type="active" @click="editShift">Edit</b-button>
      </div>
    </div>

    <div class="slots">
      <div class="title">Dates</div>
      <div
        v-for="(slot, index) in slots"
        :key="index"
        class="slot-item"
      >
        <div class="date">{{ slot.date | dateFilter }}</div>
        <div class="start">{{ slot.start | timeFilter }}</div>
        <div class="end">{{ slot.end | timeFilter }}</div>
        <div class="type">{{ slot.type }}</div>
        <div class="price">{{ slot.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_CURRENT_SHIFT, SET_EDIT_ACTION } from '../constants/mutation-types'
export default {
  name: 'ShiftCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Description'
    },
    slots: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations([
      SET_CURRENT_SHIFT,
      SET_EDIT_ACTION
    ]),
    editShift () {
      this[SET_CURRENT_SHIFT]({
        title: this.title,
        description: this.description,
        slots: this.slots
      })
      this[SET_EDIT_ACTION](true)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 30px;
  box-shadow: 0px 6px 20px #000;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    .left {
      .title {
        font-size: 30px;
        margin-bottom: 5px;
      }

      .description {
        font-size: 20px;
      }
    }
  }

  .slots {
    .title {
      font-size: 30px;
      margin-bottom: 5px;
    }

    .slot-item {
      background-color: #888;
      color: white;
      padding: 10px 30px;
      display: flex;
      border-radius: 5px;
      margin-bottom: 10px;

      .date {
        flex-basis: 30%;
      }

      .start {
        flex-basis: 20%;
      }

      .end {
        flex-basis: 20%;
      }

      .type {
        flex-basis: 40%;
      }
    }
  }
}
</style>
