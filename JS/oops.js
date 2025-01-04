// class Building {
//     constructor(l,w) {
//         this.length=l;
//         this.width=w;
//     }


//     //methods

//     area(){
//         console.log("Area of Building is: ",this.length*this.width);
        
//     }

// }

// const b1 = new Building(10,20);
// b1.area();

// const b2 = new Building(50,30);
// b2.area();


// class News {
//     constructor(n,p,s) {
//         this.name=n;
//         this.price=p;
//         this.area=s;
//     }

//     News () {
//         console.log(this.name,this.price);
        
//     }


// }

// const n1 = new News("TheHindu");
// n1.News();

// const n2 = new News(12);
// n2.News();

// const n3 = new News("surat");
// n3.News();

//parent class
// class student {
//     constructor(r,n,a){
//         this.roll_no=r;
//         this.name=n;
//         this.age=a;
//     }

//     basic_info (){
//         console.log("Roll no: ",this.roll_no);
//         console.log("Name: ",this.name);
//         console.log("Age: ",this.age);
        
//     }

// }

// //child class
// class course extends student {
//     constructor(r,n,a,cn,d,f){
//         super(r,n,a)
//         this.course_name=cn;
//         this.duration=d;
//         this.fees=f;

//     }

//     course_info(){
//         this.basic_info();
//         console.log("course name: ",this.course_name);
//         console.log("duration: ",this.duration);
//         console.log("fees: ",this.fees);
        
        
        
//     }

// }

// const str = new course (1002,"bipin",33,"Full_stack","12 months","$300");
// str.course_info();


//parent class

// class Author {
//     constructor(an,c,m){
//         this.author_name=an;
//         this.city=c;
//         this.mobile=m;
//     }
// }

// //child class
// class Book extends Author {
//     constructor(an,c,m,bn,p){
//         super(an,c,m)
//         this.book_name=bn;
//         this.price=p;

//     }

//     info(){
//         console.log("book name: ",this.book_name);
//         console.log("price: ",this.price);
//         console.log("Author name: ",this.author_name);
        
        
        
        
//     }

// }

// const str = new Book ("jay vasavada","surat","8469747294","sardar",500);

// str.price=1000;
// str.info();


// class Employee {
//     id;
//     name;
//     #salary; 
//     #insentive;                          //private

//     constructor(i,n,s){
//         this.id=i;
//         this.name=n;
//         this.#salary=s;
//     }

//     set insentive(inte){
//         this.#insentive=inte;
//     }

//     get insentive(){
//         return this.#insentive;
//     }

//     getinfo(){
//         console.log("Employee id: ",this.id);
//         console.log("Employee name: ",this.name);
//         console.log("Employee salary: ",this.#salary);
        
        
        
//     }
// }
// const e1 = new Employee(101,'bipin',2000);

// e1.salary=50000;                  //error
// e1.getinfo();
// e1.insentive=2000;
// console.log("insentive: ",e1.insentive);


// class School {
//     #registration_no;
//     name;
//     address;
//     no_staff;
//     #mobile;
//     #email;

//     constructor(r,n,a,s,m,e){
//         this.#registration_no=r;
//         this.name=n;
//         this.address=a;
//         this.no_staff=s;
//         this.#mobile=m;
//         this.#email=e;
//     }

//     set mobile(mob){
//         this.#mobile=mob;
//     }
//     get mobile(){
//         return this.#mobile;
//     }


//     set email(em){
//         this.#email=em;

//     }
//     get email(){
//         return this.#email;
        
//     }

//     schoolinfo(){
//         console.log("Registration no: ",this.#registration_no);
//         console.log("name: ",this.name);
//         console.log("address: ",this.address);
//         console.log("number of staff: ",this.no_staff);
//         console.log("mobile: ",this.#mobile);
//         console.log("email: ",this.#email);
    
        
// //     }
// // }

// // const s1 = new School(1001,"abc","varachha",20,8469747294,"bipinrekha8@gmail.com");

// // s1.registration=2002;
// // s1.mobile=8469747295;
// // s1.email="radadiyabipin5@gmail.com";

// // s1.schoolinfo();
// // console.log("mobile: ",s1.mobile);
// // console.log("email: ",s1.email);

// //Abstraction

// class Shape {
//     constructor(n){
//         this.name=n;
//     }

//    getArea(){
//     throw new Error("you have not access.")
//    } 
// // }

// class circle extends shape {
//     constructor(r){
//         super();
//         this.radius=r;
//     }
    
//    getArea(){
// console.log("Area of circle: ",3.14*this.radius*this.radius);

// } 

// class Rectangle extends shape {
//     constructor(l,w){
//         super();
//         this.length=l;
//         this.width=w;
//     }
    
//    getArea(){
// console.log("Area of Rectangle: ",this.length*this.length);

// } 
// }

// const s1 = new shape ();
// s1.getArea();

// const c1 = new circle (10);
// c1.getArea();

// const r1 = new Rectangle(5,6);
// r1.getArea();

// class Animal {
//     getVoice(){
//         console.log("Animal Voice");
        
//     }
// }
// class Dog  extends Animal{
//     getVoice(){
//         console.log("Dog Voice");
        
//     }
// }
// class Cat extends Animal {
//     getVoice(){
//         console.log("Cat Voice");
        
//     }
// }

// const d = new Dog();
// d.getVoice();