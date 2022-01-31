<!-- Notification control, bind to the apiError from the state, based on quasar framework: https://quasar.dev/vue-components/table#expanding-rows -->

<template>
  <teleport to="body">
    <!--<div v-if="api_error">{{ api_error }}</div>-->
  </teleport>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NotificationControl',
  computed: {
    ...mapState({
      api_error: (state) => state?.weather?.apiError,
    }),
  },
  data() {
    return {
      timeoputID: null,
      notificationTimeout: 5000,
    };
  },
  methods: {
    ...mapActions({
      setApiError: 'weather/SET_API_ERROR',
    }),
  },
  watch: {
    api_error(newErr) {
      if (!newErr) return;

      this.$q.notify({
        progress: true,
        message: newErr,
        color: 'red-12',
        multiLine: true,
        timeout: this.notificationTimeout,
        avatar: 'https://avatars.githubusercontent.com/u/4018803?v=4',
        actions: [
          {
            label: 'Report',
            color: 'yellow',
            handler: () => {
              window.open('mailto:ivan.stojanov1990@gmail.com', 'email');
            },
          },
        ],
      });

      let self = this;
      this.timeoputID = setTimeout(() => {
        self.setApiError(null);
      }, this.notificationTimeout);
    },
  },
};
</script>
