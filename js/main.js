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