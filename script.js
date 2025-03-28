window.onload = function(){
    const aboutsection = document.getElementById("about");
    if (aboutsection){
        aboutsection.classList.add("active");
    }
}

const links = document.querySelectorAll("nav a");

const sections = document.querySelectorAll(".all-link")

links.forEach(link =>{
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        const targetId = link.getAttribute
        ("data-target");

        sections.forEach(section => section.classList.remove("active"))
        links.forEach(link => link.classList.remove("active-link"));

        document.getElementById(targetId).classList.add("active");
        link.classList.add("active-link");
    })
})

document.getElementById("download-btn").addEventListener("click", ()=>{
    const fileUrl = "file:///M:/Intern%20Design/Personal%20Portfolio%20Project/Muskan%20Shaikh%20CV/Muskan%20Shaikh%20CV.pdf"
    const fileName = "Muskan.Shaikh.CV";

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
})