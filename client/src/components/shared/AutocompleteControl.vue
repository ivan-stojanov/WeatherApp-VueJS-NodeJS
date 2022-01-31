<!-- Global Autocomplete control, decopled from the state -->
<!-- 
It receives:
- (items) number of items to show
- (serverDown) status of the api (flag that helps in closing the loading state, in case of no results)
It emits:
- (searchChanged) - event when search term is changed
- (searchSelected) - event when item is changed
-->
<template>
  <div class="autocomplete">
    <input
      type="text"
      placeholder="Start typing..."
      v-model="searchTerm"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onSelect"
    />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li class="loading" v-if="isLoading">Loading results...</li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchAutocomplete',
  emits: ['searchChanged', 'searchSelected'],
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    serverDown: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      searchTerm: '',
      isLoading: false,
      arrowCounter: -1,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    setResult(result) {
      this.searchTerm = result;
      this.isOpen = false;

      this.$emit('searchSelected', this.searchTerm);
    },
    filterResults() {
      this.results = this.items.filter((item) => {
        return item.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    },
    onChange() {
      this.$emit('searchChanged', this.searchTerm);

      this.isLoading = true;
      this.filterResults();
      this.isOpen = true;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onSelect() {
      this.$emit('searchSelected', this.searchTerm);

      this.searchTerm = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
  },
  watch: {
    items: function (newValue, oldValue) {
      if (newValue.length !== oldValue.length || newValue.length == 0) {
        this.results = newValue;
        this.isLoading = false;
      }
    },
    serverDown: function (newValue) {
      if (newValue) {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 180px;
  max-height: 250px;
  border: 1px solid #eeeeee;
  overflow: auto;
  position: absolute;
  z-index: 1;
  background-color: white;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
