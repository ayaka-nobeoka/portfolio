document.getElementById("formSubmit").addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("contact_name_input");
    const emailInput = document.getElementById("contact_email_input");
    const numberInput = document.getElementById("contact_number_input");

    const errorMessage = document.getElementById('errorMessage');
    const numberErrorMessage = document.getElementById('number_errorMessage');
    const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const emailErrorMessage = document.getElementById('emailErrorMessage');

    let validation = true;

    if(input.value === "") {
        errorMessage.textContent = "必須項目です"
        validation = false;
     // もしinputが空だったらメッセージを表示する
    } else {
        errorMessage.innerHTML = "";
    }

    if (!emailPattern) {
    emailErrorMessage.textContent = "有効なメールアドレスを入力してください";
    validation = false;

    } else {
    emailErrorMessage.textContent = "";
    }

    if(numberInput.value === "") {
        numberErrorMessage.textContent = "必須項目です"
        validation = false;
     // もしinputが空だったらメッセージを表示する
    } else {
        errorMessage.innerHTML = "";
    }

    if (validation){
    console.log("フォームが送信されました。");
     // バリデーションに引っかかった場合は送信させない

    }
});



