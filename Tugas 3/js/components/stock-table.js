Vue.component('ba-stock-table', {
    template: '#tpl-stock',
    props: ['items', 'upbjjList', 'kategoriList'],
    data() {
        return {
            filter: { upbjj: '', kategori: '', reorder: false },
            sortKey: '',
            hoveredNote: null,
            formItem: this.getEmptyForm(),
            editIndex: -1
        };
    },
    // WATCHER 1: Dependent option, reset kategori saat UT Daerah berubah
    watch: {
        'filter.upbjj': function(newVal) {
            this.filter.kategori = ''; 
        }
    },
    computed: {
        filteredAndSortedData() {
            let data = this.items;
            
            // Filter UPBJJ
            if (this.filter.upbjj) data = data.filter(item => item.upbjj === this.filter.upbjj);
            // Filter Kategori
            if (this.filter.kategori) data = data.filter(item => item.kategori === this.filter.kategori);
            // Filter Reorder (Qty < Safety atau Qty == 0)
            if (this.filter.reorder) data = data.filter(item => item.qty < item.safety || item.qty === 0);

            // Sorting
            if (this.sortKey) {
                data.sort((a, b) => {
                    let valA = a[this.sortKey];
                    let valB = b[this.sortKey];
                    return valA > valB ? 1 : valA < valB ? -1 : 0;
                });
            }
            return data;
        }
    },
    methods: {
        sortBy(key) { this.sortKey = key; },
        resetFilter() {
            this.filter = { upbjj: '', kategori: '', reorder: false };
            this.sortKey = '';
        },
        getEmptyForm() {
            return { kode: '', judul: '', kategori: '', upbjj: '', lokasiRak: '', harga: 0, qty: 0, safety: 0, catatanHTML: '' };
        },
        saveItem() {
            if(!this.formItem.kode || !this.formItem.judul) return alert('Kode dan Judul Wajib Diisi!');
            
            if (this.editIndex === -1) {
                this.items.push({...this.formItem});
            } else {
                Vue.set(this.items, this.editIndex, {...this.formItem});
                this.editIndex = -1;
            }
            this.formItem = this.getEmptyForm();
        },
        editItem(item, index) {
            this.formItem = {...item};
            this.editIndex = index;
        },
        deleteItem(index) {
            if(confirm('Apakah Anda yakin ingin menghapus bahan ajar ini?')) {
                this.items.splice(index, 1);
            }
        }
    }
});