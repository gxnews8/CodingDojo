function Grades(num){
  //90 A, 80 B, 70 C, 60 D, default E
  switch(num){
    case num >= 90 : console.log("A");break;
    case num >= 80 : console.log("B");break;
    case num >= 70 : console.log("C");break;
    case num >= 60 : console.log("D");break;
    default : console.log("E");
  }
}
Grades();
