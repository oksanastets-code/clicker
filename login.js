console.log('login');
const lightbox = document.querySelector('.js-lightbox');
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
        if (error == 0) {
        console.log('success');
        //     localStorage.setItem("auth", 1);
            this.form.submit();
            lightbox.classList.remove('is-open');

        }
    });
    }
    validateFields(field) {
    if (field.value.trim() === "") {
        this.setStatus(
            field,
            `${field.previousElementSibling.innerText} cannot be blank`,
            "error"
        );
        return false;
    } else {
        if (field.id == "email") {
            console.log(field.value);
            const mail = field.value;
            const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            const isMatch = mail.match(regEx);
            console.log(isMatch);
            if (!isMatch) {
                this.setStatus(
                    field,
                    `${field.previousElementSibling.innerText} needs more special symbols`,
                    "error"
                );
                return false;
            } else {
                this.setStatus(field, null, "success");
                return true;
            }
        } else {
            this.setStatus(field, null, "success");
            return true;
        }
    }
    }
    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }
        // add class
        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
}
}
const form = document.querySelector('.loginForm');
if (form) {
    const fields = ["username", "email"];
    const validator = new Login(form, fields);
}