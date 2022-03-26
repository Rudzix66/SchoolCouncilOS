( function () {
    const statusBtn = document.querySelectorAll('.status-btn');

    statusBtn.forEach(btn => btn.classList.remove('active'));

    restoreActiveBtn()

    statusBtn.forEach(btn => btn.addEventListener('click', () => {

        btn.classList.add('active')
    
        if(btn.classList.contains('active')) {
            rememberButton(btn.id);
        };

        document.querySelector('body').addEventListener('click', () => {
            btn.classList.remove('active')
        })
    }))

} )();

function rememberButton(button) {
	localStorage.setItem("buttonID", button);
}

function restoreActiveBtn() {
    let buttonID = localStorage.getItem("buttonID");
    document.getElementById(buttonID).classList.add("active");
}