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
            // if (self.validateFields(input) == false) {
            //     error++;
            // }
        });
        // if everything validates, error will be 0 and can continue
        // if (error == 0) {
        //     localStorage.setItem("auth", 1);
        //     this.form.submit();
        // }
    });
}
}
const form = document.querySelector('.loginForm');
if (form) {
    const fields = ["username", "password"];
    const validator = new Login(form, fields);
}