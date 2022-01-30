<template>
  <div>
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      :row-key="rows[rowIdentifer]"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <slot name="row_content" :rowData="props.row"></slot>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'ExpandingRowsControl',
  props: {
    title: {
      type: String,
      required: false,
      default: () => '',
    },
    columns: {
      type: Array,
      required: false,
      default: () => [],
    },
    rows: {
      type: Array,
      required: false,
      default: () => [],
    },
    rowIdentifer: {
      type: String,
      required: false,
      default: () => '',
    },
  },
};
</script>

<style>
.q-table__top,
.q-table__bottom,
thead tr:first-child th {
  background-color: #97ddee;
}
</style>
