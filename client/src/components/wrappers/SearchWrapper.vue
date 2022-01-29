<template>
  <div>
    <autocomplete-control
      :items="searchOptions"
      @searchChanged="onChange"
      @searchSelected="onSelect"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AutocompleteControl from '../shared/AutocompleteControl.vue';

export default {
  name: 'SearchWrapper',
  components: {
    AutocompleteControl,
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
