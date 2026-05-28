Vue.component('status-badge', {
    template: '#tpl-badge',
    props: ['qty', 'safety'],
    computed: {
        statusData() {
            if (this.qty == 0) return { label: 'Kosong', class: 'badge-danger', icon: '⛔' };
            if (this.qty < this.safety) return { label: 'Menipis', class: 'badge-warning', icon: '⚠️' };
            return { label: 'Aman', class: 'badge-safe', icon: '✅' };
        }
    }
});