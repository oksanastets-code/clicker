console.log('login');

class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }
    validateonSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        let error = 0;
        self.fields.forEach((field) => {
            const input = document.querySelector(`#${field}`);
            console.log(input.value);
            if (self.validateFields(input) == false) {
                error++;
            }
        });
        // if everything validates, error will be 0 and can continue
        if (error == 0) {
        console.log('success');
        //     localStorage.setItem("auth", 1);
        //     this.form.submit();
        }
    });
    }
    validateFields(field) {
    // remove any whitespace and check to see if the field is blank, if so return false
    if (field.value.trim() === "") {
        // set the status based on the field, the field label, and if it is an error message
        this.setStatus(
            field,
            `${field.previousElementSibling.innerText} cannot be blank`,
            "error"
        );
        return false;
    } else {
        if (field.type == "password") {
            if (field.value.length < 8) {
                this.setStatus(
                    field,
                    `${field.previousElementSibling.innerText} must be at least 8 characters`,
                    "error"
                );
                return false;
            } else {
                // set the status based on the field without text and return a success message
                this.setStatus(field, null, "success");
                return true;
            }
        } else {
            // set the status based on the field without text and return a success message
            this.setStatus(field, null, "success");
            return true;
        }
    }
    }
    setStatus(field, message, status) {
        // create variable to hold message
        const errorMessage = field.parentElement.querySelector(".error-message");

        // if success, remove messages and error classes
        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }
        // if error, add messages and add error classes
        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
}
}
const form = document.querySelector('.loginForm');
if (form) {
    const fields = ["username", "password"];
    const validator = new Login(form, fields);
}