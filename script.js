(function ()
{
    const form = document.querySelector(".form");


    form.addEventListener("submit", function (evt)
    {
        evt.preventDefault();
        const successState = document.querySelector(".success__state--hidden");
        const errorState = document.querySelector(".error__state");

        const email = evt.target.elements['email'].value;
        const user__email = document.querySelector(".user__email");

        
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const valid = re.test(email);



        if (email === "" || valid === false)
        {
            errorState.style.visibility = "visible";
            
            return
        }
        
        form.reset();
        
        errorState.style.visibility = "hidden";
        
        form.setAttribute("class", "form--hidden");
        
        successState.setAttribute("class", "success__state fade__in");
        
        user__email.innerText = email;
    });
})();