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
        return '<tr name=' + item._id + '><td>' + item.barbername + '</td><td>' + item.service + '</td><td>' + item.price + '</td><td><input type="button" value="X" onclick="DeleteRowFunction(this);"></td></tr>';
    }).join('');
}

//https://stackoverflow.com/questions/11553768/remove-table-row-after-clicking-table-row-delete-button
//Method for deleting a row
function DeleteRowFunction(btndel) {
    /* axios.delete('services/'+ id)
        .then(res => {
            console.log(response);
        }) */

    if (typeof (btndel) == "object") {
        $(btndel).closest("tr").remove();
     var id = document.getElementById("key").nodeValue;
     //   let id = $(btndel).closest("key");
      //  var id = btndel.target.closest("[key]").getAttribute("key");
        fetch('/services/' + id, { method: 'DELETE' })
            .then(() => this.setState({ status: 'Delete successful' }));

    } else {
        return false;
    }
}
