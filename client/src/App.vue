<template>
  <div>
    <homepage />
    <notification-control />
  </div>
</template>

<script>
import Homepage from './components/pages/Homepage.vue';
import NotificationControl from './components/shared/NotificationControl.vue';

export default {
  name: 'App',
  components: {
    Homepage,
    NotificationControl,
  },
};
</script>

<style></style>
