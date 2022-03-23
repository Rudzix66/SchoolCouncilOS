const statusBtn = document.querySelectorAll('.status-btn');


statusBtn.forEach(btn => btn.addEventListener('click', () => {
    document,querySelector('body').addEventListener('click', () => {
        btn.classList.remove('active')
    })
    btn.classList.toggle('active')
}))