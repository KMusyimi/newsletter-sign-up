window.addEventListener("load", function ()
{
    const form = document.querySelector(".form");


    form.addEventListener("submit", handleSubmitEvt);
    function handleSubmitEvt(evt){
        evt.preventDefault();
        const successState = document.querySelector(".success__state--hidden");
        const errorState = document.querySelector(".error__state--hidden");

        const email = evt.target.elements['email'].value;
        const user__email = document.querySelector(".user__email");


        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const valid = re.test(email);



        if (email === "" || valid === false)
        {
            errorState.className = "error__state";
            setTimeout(() => {
                errorState.className = "error__state--hidden";
            }, 5000);

            return
        }

        form.classList.add("form--visually-hidden");
        form.addEventListener("transitionend", () =>
        {
            form.className = "form--hidden";
            successState.classList.add("success__state--visually-hidden");
            setTimeout(() =>
            {
                successState.classList.remove("success__state--hidden");
                setTimeout(() =>
                {
                    successState.classList.remove("success__state--visually-hidden");
                    successState.classList.add("success__state");
                    user__email.innerText = email;
                }, 200);
            }, 20);
        }, { once: true });

        form.reset();
        endSubmitEvt();
    }
    function endSubmitEvt (){
        form.removeEventListener("submit", handleSubmitEvt);
    }
});