    
    let btn = document.getElementById("btn")
    let hasil = document.getElementById("hasil")

    let pendaftaran = document.forms.pendaftaran
    let nama = pendaftaran.elements.nama
    let tmpLahir = pendaftaran.elements.tmplahir
    let tglLahir = pendaftaran.elements.tgllahir
    let email = pendaftaran.elements.email
    let telp = pendaftaran.elements.telp
    let alamat = pendaftaran.elements.alamat
    let askol = pendaftaran.elements.askol
    let ortu = pendaftaran.elements.ortu
    

    

   btn.onclick = function(e){
    e.preventDefault()

        let vlahir = tmpLahir.value +" "+ tglLahir.value

        // let vtmp = tmpLahir.value
        // let vlahir = tglLahir.value
        let vnama = nama.value
        let vemail = email.value
        let vtelp = telp.value
        let valamat = alamat.value
        let vaskol = askol.value
        let vortu = ortu.value

        
        hasil.innerHTML = "Nama Lengkap : " + vnama + "<br>"
                         + "Tempat Tanggal Lahir :  "+ vlahir + "<br>" + "Alamat Email : " + vemail +"<br>" +"Telp : " + vtelp +"<br>" + "Alamat : "+ valamat + "<br>" + "Sekolah Asal :" + vaskol +"<br>"+"Orang Tua/Wali : " + vortu 
       
   }

