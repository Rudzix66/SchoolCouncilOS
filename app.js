( function () {
    const statusBtn = document.querySelectorAll('.status-btn');
    statusBtn.forEach(btn => btn.classList.remove('active'))

    const userStatus = localStorage.getItem('userStatus');

    statusBtn.forEach(btn => btn.addEventListener('click', () => {

        if(!localStorage.getItem('userStatus')) {
            localStorage.setItem('userStatus', btn.dataset.status)

        } else if(localStorage.getItem('userStatus')) {
            if(userStatus === btn.dataset.status) {
                btn.classList.add('active')
            }      
        }

        document.querySelector('body').addEventListener('click', () => {
            btn.classList.remove('active')
            localStorage.setItem('userStatus', btn.dataset.status)
        })

        btn.classList.toggle('active')
    }))


} )();