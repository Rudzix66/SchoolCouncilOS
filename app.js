( function () {
    const statusBtn = document.querySelectorAll('.status-btn');

    restoreActiveBtn()

    statusBtn.forEach(btn => btn.addEventListener('click', () => {

        statusBtn.forEach(btn => btn.classList.remove('active'));
        
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
    const activeBtn = document.getElementById(buttonID.toString());
    activeBtn.classList.add("active");
}