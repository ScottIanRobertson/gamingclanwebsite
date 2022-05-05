const opennav = document.querySelector(".opennav");
const nav = document.querySelector(".nav");

opennav.addEventListener("click", () => {
  opennav.classList.toggle("active");
  nav.classList.toggle("active");
});

function showHideRow(row) {
  $("#" + row).toggle();
}

function bigImg(x) {
  x.style.height = "120px";
  x.style.width = "120px";
}

function normalImg(x) {
  x.style.height = "60px";
  x.style.width = "60px";
}

function tableSearch() {
  let input, filter, table, tr, td, txtValue;

  //Intialising Variables
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_detail");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }

}