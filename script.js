document.addEventListener('DOMContentLoaded', () => {
    console.log('Meme World is ready!');
});

function copyToClipboard() {
    const token = document.getElementById("token-placeholder").innerText;
    navigator.clipboard.writeText(token).then(() => {
        const feedback = document.getElementById("copy-feedback");
        feedback.classList.remove("d-none");
        setTimeout(() => {
            feedback.classList.add("d-none");
        }, 2000);
    });
}
document.querySelector('.btn-buy-now').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Redirect to buying platform or instructions!");
    // Uncomment if a link is required to scroll smoothly
    // document.querySelector('#buy-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1); // Remove '#' to get the ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});