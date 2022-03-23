( function () {
    const statusBtn = document.querySelectorAll('.status-btn');

    statusBtn.forEach(btn => btn.addEventListener('click', () => {
        document.querySelector('body').addEventListener('click', () => {
            btn.classList.remove('active')
        })

        btn.classList.toggle('active')
        localStorage.setItem('userStatus', btn.dataset.status)

        const userStatus = localStorage.getItem('userStatus');

        if(userStatus === 'status-1' && btn.dataset.status === 'status-1') {
            btn.classList.add('active')
        }
        if(userStatus === 'status-2' && btn.dataset.status === 'status-2') {
            btn.classList.add('active')
        }
        if(userStatus === 'status-3' && btn.dataset.status === 'status-3') {
            btn.classList.add('active')
        }

    }))


} )();