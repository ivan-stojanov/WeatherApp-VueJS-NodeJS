<template>
  <card-control>
    <template v-slot:card_header>Check the weather by location:</template>
    <template v-slot:card_img></template>
    <template v-slot:card_content>
      <autocomplete-control
        :items="searchOptions"
        @searchChanged="onChange"
        @searchSelected="onSelect"
      />
    </template>
  </card-control>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AutocompleteControl from '../shared/AutocompleteControl.vue';
import CardControl from '../shared/CardControl.vue';

export default {
  name: 'SearchWrapper',
  components: {
    AutocompleteControl,
    CardControl,
  },
  computed: {
    ...mapGetters({
      searchOptions: 'weather/SEARCH_OPTIONS',
    }),
  },
  methods: {
    ...mapActions({
      setSearchOptions: 'weather/SET_SEARCH_OPTIONS',
      setSelectedLocation: 'weather/SET_SELECTED_LOCATION',
    }),
    onChange(searchTerm) {
      this.setSearchOptions(searchTerm);
    },
    onSelect(searchTerm) {
      this.setSelectedLocation(searchTerm);
      this.setSearchOptions([]);
    },
  },
};
</script>
