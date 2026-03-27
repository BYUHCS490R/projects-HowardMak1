document.getElementById('myform').addEventListener('submit',function(event) {
            event.preventDefault();

            const fullname = document.getElementById('fname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('pass').value;
            const age = document.getElementById('age').value;

            if (!fullname || !email) {
                alert("you need a name and emaill");
                return;
            }

            if (!age || age <18) {
                alert("you need to be 18");
                return;
            }

            const formdata = {
                name: fullname,
                email: email,
                password: password,
                age: age


            };

            console.log(formdata);
            const xhr = new XMLHttpRequest();
            xhr.open("get", "submit.json", true);
            xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form Submitted Successfully");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    document.getElementById('myform').innerHTML = '';
                    document.getElementById('message').innerHTML = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error Submitting Form");
                }
            };
            xhr.send(JSON.stringify(formdata));

        });