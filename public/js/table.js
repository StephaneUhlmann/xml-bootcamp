//https://simonplend.com/how-to-use-fetch-to-post-form-data-as-json-to-your-api/
//POST method to add barber users to the database
async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });

        console.log({ responseData });
    } catch (error) {
        console.error(error);
    }
}

const elForm = document.getElementById("form");
elForm.addEventListener("submit", handleFormSubmit);


//https://howtocreateapps.com/fetch-and-display-json-html-javascript/
//GET all data from the colection services 
fetch('/services')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

//https://stackoverflow.com/questions/52587801/use-api-response-in-a-table
//Method that recieves the data and creates a table in the frontend    
function appendData(data) {
    document.getElementById('table-rows').innerHTML = data.map((item) => {
        return '<tr><td>' + item.barbername + '</td><td>' + item.service + '</td><td>' + item.price + '</td><td><input id=' + item._id + ' type="button" value="X" onclick="deleteRow(this)"></td></tr>';
    }).join('');
}

//https://stackoverflow.com/questions/3623110/get-an-elements-id
//Delete row function and DELETE API request
function deleteRow(btn) {
    fetch('/services/' + btn.id, { method: 'DELETE' })
        .then(() => this.setState({ status: 'Delete successful' }));

    if (typeof (btn) == "object") {
        $(btn).closest("tr").remove();
    } else {
        return false;
    }
}

//https://www.youtube.com/watch?v=2p39swI3_Rs
        //Method to calculate the total bill
        function calcTotalBill() {
            var table = document.getElementById("barbertable"), sumVal = 0;

            for (var i = 1; i < table.rows.length; i++) {
                sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
            }
            document.getElementById("totalBill").value = sumVal;
        }

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



