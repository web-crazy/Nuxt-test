<template>
  <div class="shift-slot-wrapper">
    <div class="slot-header">
      <div class="date"></div>
      <div class="close"></div>
    </div>

    <div class="slot-body">
      <div class="group-field">
        <b-field label="Starttime">
          <b-timepicker
            v-model="startTime"
            placeholder="Select Start Time"
          />
        </b-field>

        <b-field label="Endtime">
          <b-timepicker
            v-model="endTime"
            placeholder="Select End Time"
          />
        </b-field>

        <b-field label="Price">
          <b-input v-model="price" />
        </b-field>
      </div>

      <div class="group-field">
        <b-field class="select-wrapper" label="Type">
          <b-select expanded v-model="type" placeholder="Select Type">
            <option
              v-for="option in types"
              :key="option.id"
              :value="option.id"
            >
              {{ option.title }}
            </option>
          </b-select>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShiftSlot',
  props: {
    date: Date,
    startTime: Date,
    endTime: Date,
    price: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      types: [
        { id: 1, title: 'Consultation' },
        { id: 2, title: 'Meeting' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .shift-slot-wrapper {
    margin-bottom: 20px;

    .slot-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .slot-body {
      padding: 10px 5px;
      background-color: #ddd;

      .group-field {
        display: flex;
        justify-content: space-bwteen;
        align-items: center;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }

        .field {
          margin-bottom: 0;
          padding: 0 5px;
        }

        .select-wrapper {
          width: 100%;
        }
      }
    }
  }
</style>
