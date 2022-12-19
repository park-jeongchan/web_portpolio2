const form1 = document.querySelectorAll(".form1");
var current_scroll = document.documentElement.scrollTop;
/*
form1[0]:메인
form1[1]:introduce
form1[2]:learn
form1[3]:project
form1[4]:find me?
form1[5]:contact me
*/

function adjust_wheel(top1,top2){
    window.addEventListener("mousewheel",(e) => {
        e.preventDefault();
        if (e.delta < 0) {
          window.scrollTo({ top: form1[top1].offsetTop - 100, left: 0, behavior: "smooth" });
        } else {
          window.scrollTo({
            top: form1[top2].offsetTop - 100,left: 0, behavior: "smooth", });
        }
      },
      { passive: false }
    );
}


// window.addEventListener("mousewheel",(e) => {
//     e.preventDefault();
//     if (current_scroll >= 0 && current_scroll < form1[1].offsetTop - 100) {
//         if (e.delta < 0) {
//             window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//           } else {
//             window.scrollTo({top: form1[1].offsetTop - 100,left: 0, behavior: "smooth", });
//           }
//           return 0;    
//     } else if (current_scroll >= form1[1].offsetTop - 100 && current_scroll < form1[2].offsetTop - 100) {
//         if (e.delta < 0) {
//             window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//           } else {
//             window.scrollTo({top: form1[2].offsetTop - 100,left: 0, behavior: "smooth", });
//           }
//           console.log(2);
//     } else if (current_scroll >= form1[2].offsetTop - 100 && current_scroll < form1[3].offsetTop - 100) {

//     } else if (current_scroll >= form1[3].offsetTop - 100 && current_scroll < form1[4].offsetTop - 100) {

//     } else if (current_scroll >= form1[4].offsetTop - 100 && current_scroll < form1[5].offsetTop - 100) {

//     }
    
//   },
//   { passive: false }
// );


// if (current_scroll >= 0 && current_scroll < form1[1].offsetTop - 100){
//     window.addEventListener("mousewheel",(e) => {
//         e.preventDefault();
//         if (e.delta > 0) {
//           window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//         } else {
//           window.scrollTo({
//             top: form1[1].offsetTop - 100,left: 0, behavior: "smooth", });
//         }
//       },
//       { passive: false }
//     );
//     current_scroll=document.documentElement.scrollTop;
//     console.log(current_scroll);
    
// }else if (current_scroll >= form1[1].offsetTop - 120 && current_scroll < form1[2].offsetTop - 100) {
//     console.log(2);
//     window.addEventListener("mousewheel",(e) => {
//         e.preventDefault();
//         if (e.delta > 0) {
//           window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//         } else {
//           window.scrollTo({
//             top: form1[2].offsetTop - 100,left: 0, behavior: "smooth", });
//         }
//       },
//       { passive: false }
//     );
// }


