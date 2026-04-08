 document.addEventListener("DOMContentLoaded", function () {
            const birthdayInput = document.getElementById("date");
            const ageInput = document.getElementById("age");

            console.log(birthdayInput, ageInput);

            birthdayInput.addEventListener("change", function () {
                if (!this.value) return;

                const birthDate = new Date(this.value);
                const today = new Date();

                let age = today.getFullYear() - birthDate.getFullYear();

                const m = today.getMonth() - birthDate.getMonth();

                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                ageInput.value = age;

                console.log("Age calculated:", age);
            });
        });
        
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

            if (!age || age <16) {
                alert("you need to be at least 16");
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
            xhr.open("get", "form.json", true);
            xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form Submitted Successfully");
                    window.location.href = "table.html";
                    console.log(response);
                    document.getElementById('myform').innerHTML = '';
                    document.getElementById('message').innerHTML = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error Submitting Form");
                }
            };
            xhr.send(JSON.stringify(formdata));

        });