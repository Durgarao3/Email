function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceId = "service_ee4h0u5";
    const templateId = "template_7b0xgga";

    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Email sent successfully!");
        }
    )
    .catch(err => console.log(err));
}