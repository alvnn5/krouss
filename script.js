function beli(produk, harga) {
    localStorage.removeItem('selectedProduk');
    localStorage.setItem('selectedProduk', JSON.stringify({ produk, harga }));
    window.location.href = 'transaksi.html';
}

function buatPesanan() {
    const nama = document.getElementById('nama').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const date = document.getElementById('date').value;

    if (!nama || !alamat || !date) {
        alert('Silakan lengkapi semua data.');
        return;
    }

    let motorType = '';
    let price = 0;
    
    if (document.getElementById('cooper').checked) {
        motorType = 'Cooper';
        price = document.getElementById('cooper').getAttribute('data-price');
    } else if (document.getElementById('scrambler').checked) {
        motorType = 'Scrambler';
        price = document.getElementById('scrambler').getAttribute('data-price');
    } else if (document.getElementById('boober').checked) {
        motorType = 'Boober';
        price = document.getElementById('boober').getAttribute('data-price');
    } else if (document.getElementById('streetclub').checked) {
        motorType = 'Street Club';
        price = document.getElementById('streetclub').getAttribute('data-price');
    } else {
        alert('Silakan pilih jenis motor.');
        return;
    }

    const orderDate = new Date(date);
    const pickupDate = new Date(orderDate);
    pickupDate.setMonth(orderDate.getMonth() + 1);

    const formattedPickupDate = pickupDate.toISOString().split('T')[0]; 

    const params = new URLSearchParams({
        nama,
        alamat,
        motorType,
        price,
        date,
        pickupDate: formattedPickupDate
    });

    window.location.href = `invoice.html?${params.toString()}`;
}
