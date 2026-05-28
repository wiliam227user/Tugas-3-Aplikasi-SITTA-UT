Vue.component('do-tracking', {
    template: '#tpl-tracking',
    props: ['trackingData'],
    data() {
        return {
            searchQuery: '',
            searchResult: null
        };
    },
    methods: {
        searchDO() {
            if (!this.searchQuery) return;
            // Pencarian berdasarkan ID (DO Number) atau NIM
            this.searchResult = this.trackingData.find(doItem => 
                doItem.id === this.searchQuery || doItem.data.nim === this.searchQuery
            );
            if(!this.searchResult) alert('Data DO tidak ditemukan!');
        },
        clearSearch() {
            this.searchQuery = '';
            this.searchResult = null;
        }
    }
});