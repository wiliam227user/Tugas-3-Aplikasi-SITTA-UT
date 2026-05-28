// Konsep Filter Data
Vue.filter('currency', function (value) {
    if (!value) return '';
    return 'Rp ' + Number(value).toLocaleString('id-ID');
});

Vue.filter('satuanFormat', function (value) {
    return value + ' (buah)';
});

Vue.filter('dateFormat', function (value) {
    if (!value) return '';
    const date = new Date(value);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
});

new Vue({
    el: '#app',
    data: {
        tab: 'stok',
        state: {
            stok: [],
            upbjjList: [],
            kategoriList: [],
            paket: [],
            pengirimanList: [],
            tracking: []
        }
    },
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            const data = await ApiService.fetchBahanAjar();
            if (data) {
                this.state.stok = data.stok;
                this.state.upbjjList = data.upbjjList;
                this.state.kategoriList = data.kategoriList;
                this.state.paket = data.paket;
                this.state.pengirimanList = data.pengirimanList;
                
                // Normalisasi Data Object DO JSON menjadi Array yang mudah diproses
                let normalizedTracking = [];
                data.tracking.forEach(item => {
                    let key = Object.keys(item)[0];
                    normalizedTracking.push({ id: key, data: item[key] });
                });
                this.state.tracking = normalizedTracking;
            }
        },
        handleNewOrder(newOrder) {
            this.state.tracking.push(newOrder);
            this.tab = 'tracking'; // Otomatis pindah ke tab tracking
        }
    }
});