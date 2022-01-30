<template>
  <div class="row items-start q-gutter-md">
    <q-card class="my-card">
      <slot name="card_header">
        <q-card-actions>
          <q-btn flat icon="event" />
          <div flat><slot name="date"></slot></div>
        </q-card-actions>
      </slot>
      <q-card-section horizontal>
        <slot name="card_img"></slot>
        <q-card-section>
          <slot name="card_content"></slot>
        </q-card-section>
      </q-card-section>
      <q-separator />
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardControl',
};
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>
