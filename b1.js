function addItem(event) {
    event.preventDefault();
    let add = document.getElementById("addItemInput").value;
    if (add.length > 10) {
      document.write("khong hop le");
    } else document.write("hop le");
  }