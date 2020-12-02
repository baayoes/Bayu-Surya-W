// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#section-"]', {
	speed: 2000,
    speedAsDuration: true,
});



function Kirim() {
    var namalengkap = (document.formulir.txtnamalengkap.value);
    swal({
        title: "Pesan Terkirim!",
        text: "Terima Kasih Telah Mengirim Pesan!",
        icon: "success",
      });
}


