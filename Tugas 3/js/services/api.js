const ApiService = {
    async fetchBahanAjar() {
        try {
            const response = await fetch('data/dataBahanAjar.json');
            if (!response.ok) throw new Error("Gagal mengambil data");
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};