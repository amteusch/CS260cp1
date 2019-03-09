let app = new Vue({
  el: '#app',
  data: {
    number: '',
    addedName: '',
    addedSuggestion: '',
    suggestions: {},
  },
  methods: {
   addSuggestion() {
     if (!(this.number in this.suggestions))
        Vue.set(this.suggestions, this.number, new Array); //creating new property and want Vue to track it: use this syntax
     this.suggestions[this.number].push({
        author: this.addedName,
        text: this.addedSuggestion,
        date: new moment(),
      });
      this.addedName = '';
      this.addedSuggestion = '';
      this.addedDate = '';
    },
  }
});
