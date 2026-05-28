Vue.component('order-form', {
    template: '#tpl-order',
    props: ['paketList', 'pengirimanList', 'upbjjList', 'existingTrackings'],
    data() {
        return {
            form: {
                nim: '',
                nama: '',
                ekspedisi: '',
                paketKode: '',
                tanggalKirim: new Date().toISOString().split('T')[0] // local time default
            },
            selectedPaketDetail: null
        };
    },
    // WATCHER 2: Memantau perubahan pilihan paket untuk memunculkan detail dan harga
    watch: {
        'form.paketKode': function(newKode) {
            this.selectedPaketDetail = this.paketList.find(p => p.kode === newKode);
        }
    },
    computed: {
        generateDONumber() {
            const year = new Date().getFullYear();
            let seq = this.existingTrackings.length + 1;
            let paddedSeq = seq.toString().padStart(3, '0');
            return `DO${year}-${paddedSeq}`;
        }
    },
    methods: {
        submitOrder() {
            if(!this.form.nim || !this.form.nama || !this.form.paketKode) {
                return alert('Lengkapi data terlebih dahulu!');
            }
            
            const newDO = {
                id: this.generateDONumber,
                data: {
                    nim: this.form.nim,
                    nama: this.form.nama,
                    status: "Diproses",
                    ekspedisi: this.form.ekspedisi,
                    tanggalKirim: this.form.tanggalKirim,
                    paket: this.form.paketKode,
                    total: this.selectedPaketDetail.harga,
                    perjalanan: [
                        { waktu: new Date().toLocaleString(), keterangan: "Pesanan dibuat" }
                    ]
                }
            };
            this.$emit('new-order', newDO);
            alert('DO Berhasil dibuat: ' + newDO.id);
            // Reset form
            this.form.nim = ''; this.form.nama = ''; this.form.paketKode = '';
        }
    }
});