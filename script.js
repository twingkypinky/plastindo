// Get the modal
var openModal = document.getElementById("bukaModal");
var balasModal = document.getElementById("balasModal");

// Get the button that opens the modal : edit section
var btn1 = document.getElementById("openBtn1");
var btn2 = document.getElementById("openBtn2");
var btn3 = document.getElementById("openBtn3");
var balasBtn = document.getElementById("balasBtn1");

// Get the span button
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];


// When the user clicks the button, open the modal 
btn1.onclick = function() {
  openModal.style.display = "block";
  document.getElementById("text1").innerText="Telah dibaca";
  var myStatus = document.getElementById("myStatus1");
  myStatus.style.backgroundColor="#6BA422";
}
btn2.onclick = function(){
  openModal.style.display="block";
  document.getElementById("text2").innerText="Telah dibaca";
  var myStatus = document.getElementById("myStatus2");
  myStatus.style.backgroundColor="#6BA422";
}
btn3.onclick = function(){
  openModal.style.display="block";
  document.getElementById("text3").innerText="Telah dibaca";
  var myStatus = document.getElementById("myStatus3");
  myStatus.style.backgroundColor="#6BA422";
}
balasBtn.onclick = function(){
  balasModal.style.display="block";
}
// When the user click the <span> (x) button, close the modal
span.onclick=function(){
  openModal.style.display="none";
}
span2.onclick=function(){
  balasModal.style.display="none";
}
//Sweet Alert untuk hapus konten
var hapus1 = document.getElementById('hapusBtn1');
hapus1.addEventListener('click', function(){
  swal({
    title: "Apakah Anda yakin?",
    text: "Setelah dihapus Anda tidak akan dapat mengembalikan ini!",
    icon: "warning",
    successMode: true,
    buttons: {
      cancel:{
        visible: true,
        text: 'Batal',
        className: 'btn btn-danger',
      },
      confirm: {
        text: 'Ya, hapus',
        className: 'btn btn-success',
      },
    },
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Berhasil menghapus pesan.", {
        icon: "success",
        confirm:{
          className: 'btn btn-success',
        }
      });
    } else {
      swal("Gagal menghapus pesan.",{
        icon: "error",
        confirm:{
          className: 'btn btn-success'
        }
      });
    }
  });
});
//Sweet Alert untuk hapus konten
var hapus2 = document.getElementById('hapusBtn2');
hapus2.addEventListener('click', function(){
  swal({
    title: "Apakah Anda yakin?",
    text: "Setelah dihapus Anda tidak akan dapat mengembalikan ini!",
    icon: "warning",
    successMode: true,
    buttons: {
      cancel:{
        visible: true,
        text: 'Batal',
        className: 'btn btn-danger',
      },
      confirm: {
        text: 'Ya, hapus',
        className: 'btn btn-success',
      },
    },
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Berhasil menghapus pesan.", {
        icon: "success",
        confirm:{
          className: 'btn btn-success',
        }
      });
    } else {
      swal("Gagal menghapus pesan.",{
        icon: "error",
        confirm:{
          className: 'btn btn-success'
        }
      });
    }
  });
});
//Sweet Alert untuk hapus konten
var hapus3 = document.getElementById('hapusBtn3');
hapus3.addEventListener('click', function(){
  swal({
    title: "Apakah Anda yakin?",
    text: "Setelah dihapus Anda tidak akan dapat mengembalikan ini!",
    icon: "warning",
    successMode: true,
    buttons: {
      cancel:{
        visible: true,
        text: 'Batal',
        className: 'btn btn-danger',
      },
      confirm: {
        text: 'Ya, hapus',
        className: 'btn btn-success',
      },
    },
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Berhasil menghapus pesan.", {
        icon: "success",
        confirm:{
          className: 'btn btn-success',
        }
      });
    } else {
      swal("Gagal menghapus pesan.",{
        icon: "error",
        confirm:{
          className: 'btn btn-success'
        }
      });
    }
  });
});

// sweet alert untuk membalas pesan
var balas = document.getElementById('balasBtn2');
balas.addEventListener('click', function(){
  swal({
    title: "Pesan berhasil terkirim!",
    icon: "success",
    successMode: true,
    buttons: {
      confirm: {
        text: 'Ok',
        className: 'btn btn-success',
      },
    },
  })
});

//sweet alert untuk logout
var logout = document.getElementById("btnLogout");
logout.onclick = function() {
  swal({
    title: "Apakah Anda Yakin Memilih Logout?",
    text: "Setelah logout anda perlu login kembali!",
    icon: "warning",
    successMode: true,
    buttons: {
      cancel:{
        visible: true,
        text: 'Batal',
        className: 'btn btn-danger',
      },
      confirm: {
        text: 'Logout',
        className: 'btn btn-success',
        
      },
    },
  })
  .then((willDelete) => {
    if (willDelete) {
      swal({
        title: "Anda Berhasil Logout!",
        icon: "success"
    }).then(function() {
        window.location = "Admin-Login.html";
    });
    } else {
      modal.style.display = "none";
    }
  });
}