var buttonBurger = document.getElementById('nav__burger');

buttonBurger.addEventListener("click", () => 
    window.screen.width > 576 ?
        document.getElementById("mySidenav").style.cssText += `
            width: 430px;
            padding: 39px 26px 0 39px;
            box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);
            };`
        : 
            document.getElementById("mySidenav").style.cssText += `
                width: 100%;
                padding: 39px 26px 0 39px;
                box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);};`);

document.getElementById('closebtn').addEventListener("click", () => document.getElementById("mySidenav").style.cssText += `
    width: 0px;
    padding: 0;
    box-shadow: none;};`);

