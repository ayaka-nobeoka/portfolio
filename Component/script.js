const top_btn = document.getElementById("button_up");

top_btn.addEventListener("click", () => {
    scroll({top: 0, behavior: "smooth" });
});

document.getElementById("header_about").addEventListener("click", (e)=> {
    e.preventDefault();

    const target = document.getElementById("Works");

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

