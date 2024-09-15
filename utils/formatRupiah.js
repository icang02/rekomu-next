export default function formatRupiah(amount) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // jumlah desimal
  });

  return formatter.format(amount);
}