function bukutamu() {
    var Nama = document.getElementById("Nama").value;
    var Email = document.getElementById("Email").value;
    var Komentar = document.getElementById("Komentar").value;

    if (Nama == "") {
        alert("Nama harus diisi");
    } else if (Email == "") {
        alert("Email harus diisi");
    } else if (Komentar == "") {
        alert("Komentar harus diisi");
    } else {
        console.log(Nama);
        document.getElementById("list").innerHTML = `
        <hr>
        <table>
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td>`+ Nama + `</td>
            </tr>

            <tr>
                <td>Email</td>
                <td>:</td>
                <td>`+ Email + `</td>
            </tr>
            
            <tr>
                <td>Komentar</td>
                <td>:</td>
                <td>`+ Komentar + `</td>
            </tr>


        </table>

        `;
    }


}