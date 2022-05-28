
// Hieu ung menu tren thanh navbar
    document.addEventListener("DOMContentLoaded",function() {

        let onclick_mount = document.getElementsByClassName("click1");
        let get_data = document.getElementsByClassName("display_menu");

        for (let i = 0; i < onclick_mount.length; i++) {
                onclick_mount[i].onclick = function() {

                    if (this.classList[1] == "violet"){

                        this.classList.remove('violet');
                        let data_display = this.getAttribute('data-appear');
                        let element_display = document.getElementById(data_display);
                        element_display.classList.remove('out_menu1');

                        }    
                        else {

                        for (let j = 0; j < onclick_mount.length; j++) {
                            onclick_mount[j].classList.remove('violet');
                        }
                            this.classList.toggle('violet');
                            let data_display = this.getAttribute('data-appear');
                            let element_display = document.getElementById(data_display);

                            for (let i = 0; i < onclick_mount.length; i++) {
                                get_data[i].classList.remove('out_menu1');
                            }
                            element_display.classList.toggle('out_menu1');
                    }
                } 
            }
    },false)


// Hieu ung cuon chuot
    document.addEventListener("DOMContentLoaded",function() {
        let navbar = document.querySelector('.menu');
        let mount_position = "lessthan100px";

        let product_adv = document.querySelector('.product_adv')
        let banner_position = product_adv.offsetTop;
        let position_info = "below";

        let displayRange = 300;         // khoảng cách hiển thị đối với banner được chọn
        let lowerLimit = banner_position + displayRange;

        window.addEventListener('scroll',function(){   //tac dong voi thanh menu
            if  (this.window.pageYOffset > 100) {
                if (mount_position == "lessthan100px") {
                    mount_position = "greaterthan100px";
                    navbar.classList.add('navbar-change');
                }

            } 
            else if (this.window.pageYOffset < 100 ) {
                if (mount_position == "greaterthan100px") {
                    mount_position = "lessthan100px";
                    navbar.classList.remove('navbar-change');
                }
            }
        })

        window.addEventListener('scroll',function(){    //tac dong voi banner ben cot noi dung ben phai
            if  ((this.window.pageYOffset > banner_position) && (this.window.pageYOffset < lowerLimit)) {
                if (position_info == "below") {
                    position_info = "showing";
                    product_adv.classList.add('stop_banner');
                }

            } 
            else if ((this.window.pageYOffset < banner_position ) || (this.window.pageYOffset > lowerLimit)){
                if (position_info == "showing") {
                    position_info = "below";
                    product_adv.classList.remove('stop_banner');
                }
            }
        })
    })