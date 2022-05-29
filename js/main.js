
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

// Xử lý các hiệu ứng trong content bằng javascript:

// Hieu ung cuon chuot

    document.addEventListener("DOMContentLoaded",function() {
        let navbar = document.querySelector('.menu');
        let mount_position = "lessthan100px";

        let product_adv = document.querySelector('.product_adv')
        let banner_position = product_adv.offsetTop;
        let position_info = "below";

        let displayRange = 600;                                        // Set khoảng cách hiển thị đối với banner được chọn
        let lowerLimit = banner_position + displayRange;

        let elementLoad = document.querySelector('.el6');            // phần tử được load lên phần content của web        
        let elementStatus = "below";
        let toSlide = 300;                                             // Setup khoảng cách hiệu ứng
        let elementLocation = elementLoad.offsetTop - 300 ;        // khoảng cách trượt của phần tử
        
        window.addEventListener('scroll',function(){                   // tac dong voi thanh menu
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
                                        
        window.addEventListener('scroll',function(){ 
            // for ( l = 0; l < elementLoad.length; l++ ) {                         
            if  (this.window.pageYOffset > elementLocation ) {                
                    if (elementStatus == "below") {
                        elementStatus = "upper";
                        elementLoad.classList.add('show_El');
                    }
                }
            }
          )  
        })
        // else if (this.window.pageYOffset < banner_position ) {
        //     if (position_info == "upper") {
        //         position_info = "below";
        //         product_adv.classList.remove('show_El');                   
    })
    // Xu ly hieu ung cho slide
    document.addEventListener("DOMContentLoaded",function() {
        let button1 = document.querySelectorAll('.slide_play ul li');
        let slideElement = document.querySelectorAll('.slides ul li');
            for (let m = 0; m < button1.length; m++) {
                button1[m].addEventListener("click",function(){
                for ( n = 0; n < button1.length; n++){
                    button1[n].classList.remove('button_active');
                    }
                    this.classList.add('button_active');
                    let btn_active = this;
                    let posi_btn = 0;
                    for ( posi_btn = 0; btn_active = btn_active.previousElementSibling; posi_btn++ ) {}
                          // vong lap xac dinh vi tri cua nut dc click thong qua ham phia tren
                    for (let p = 0; p < slideElement.length; p++) {
                        slideElement[p].classList.remove("active1");
                        slideElement[posi_btn].classList.add("active1");
                    }                
                })
            }      
    })