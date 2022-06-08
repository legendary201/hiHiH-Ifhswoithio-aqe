my_canvas = document.getElementById("ID");
ctx = my_canvas.getContext('2d');



var last_pos_x, last_pos_y;



my_canvas.addEventListener("touchstart", pointer_touchstart);

function pointer_touchstart(e){

        last_pos_touch_x = e.touches[0].clientX - my_canvas.offsetLeft;
        last_pos_touch_y = e.touches[0].clientY- my_canvas.offsetTop;


}


my_canvas.addEventListener("touchmove", pointer_touchmove);

function pointer_touchmove(e){


        current_pos_touch_x = e.touches[0].clientX - my_canvas.offsetLeft;
        current_pos_touch_y = e.touches[0].clientY- my_canvas.offsetTop;
            
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.moveTo(last_pos_touch_x,last_pos_touch_y);
        ctx.lineTo(current_pos_touch_x,current_pos_touch_y)
        ctx.stroke();

        last_pos_touch_x = current_pos_touch_x;
        last_pos_touch_y = current_pos_touch_y;

}







//Mouse Events

var mouse_Event = "";
my_canvas.addEventListener("mousedown", pointer);

function pointer(e){

        mouse_Event = "Mouse_Down";

        last_pos_x = e.clientX - my_canvas.offsetLeft;
        last_pos_y = e.clientY- my_canvas.offsetTop;

}

my_canvas.addEventListener("mouseup", pointer_up);

function pointer_up(e){

        mouse_Event = "Mouse_up";


}


my_canvas.addEventListener("mouseleave", pointer_leave);

function pointer_leave(e){

        mouse_Event = "Mouse_leave";


}



my_canvas.addEventListener("mousemove", pointer_move);

function pointer_move(e){

       if(mouse_Event == "Mouse_leave") {

        current_pos_x = e.clientX - my_canvas.offsetLeft;
        current_pos_y = e.clientY- my_canvas.offsetTop;
            
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.moveTo(last_pos_x,last_pos_y);
        ctx.lineTo(current_pos_x,current_pos_y)
        ctx.stroke();

        last_pos_x = current_pos_x;
        last_pos_y = current_pos_y;




       }


}







