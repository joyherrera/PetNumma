function validationForm() {
    let validationCustomer = document.forms["register"]["customer"].value;
    let validationTutor = document.forms["register"]["tutor"].value;
    let validationPhone = document.forms["register"]["phone"].value;
    let validationMail = document.forms["register"]["mail"].value;
    let validationDate = document.forms["register"]["date"].value;
    let validationRadio = document.forms["register"]["radio"].value;
    let validationService = document.forms["register"]["service"].value;
    
    

    if (validationCustomer == "")  {
        alert("O Cliente deve ser preenchido");
        return false;
    }
    if (validationTutor == "")  {
        alert("O Tutor deve ser preenchido");
        return false;
    }
    if (validationPhone == "")  {
        alert("O Telefone deve ser preenchido");
        return false;
    }
    if (validationMail == "")  {
        alert("O E-mail deve ser preenchida");
        return false;
    }
    if (validationDate == "")  {
        alert("A Data deve ser preenchida");
        return false;
    }
    if (validationRadio == "")  {
        alert("O Turno deve ser preenchido");
        return false;
    }
    if (validationService == "")  {
        alert("O Serviço deve ser preenchido");
        return false;
    }
    
    alert("A validação ocorreu de forma correta");

}
function insert() {
    let customer = document.forms["register"]["customer"].value;
    let tutor = document.forms["register"]["tutor"].value;
    let phone = document.forms["register"]["phone"].value;
    let mail = document.forms["register"]["mail"].value;
    let date = document.forms["register"]["date"].value;
    let radio = document.forms["register"]["radio"].value;
    let service = document.forms["register"]["service"].value;
    

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
    <th scope='row'>${customer}</th>
    <td>${tutor}</td>
    <td>${phone}</td>
    <td>${mail}</td>
    <td>${date}</td>
    <td>${radio}</td>
    <td>${service}</td>
    `;
}