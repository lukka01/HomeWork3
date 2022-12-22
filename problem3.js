//  console.log([] && "John");  // john. რადგან ორივე value არის true და ენდ ოპერატორი
// ბოლო values ბეჭდავს თუ ორივე სწორია

//  console.log(null && "John");   // null. რადგან პირველივე ოპერატორი მნიშვნელობა არის false.

//  console.log(0 && -0);  // 0. ვინაიდან ორივე მნიშვნელობა falsea , აბრუნებს პირველს.

//  console.log(Infinity && -Infinity);  // -infinity . რადგან ორივე  არის true და დააბრუნებს ბოლოს.

//  console.log([] || "John");  //[]  პირველივე  true არის და or ოპერატორი აბრუნებს პირველივე
// ჭეშმარიტ მნიშვნელობიანს.

//  console.log(null || "John");  // "John" . რადგან პირველი მნიშვნელობა  არის false, მეორე ჭეშმარიტი.

//  console.log(0 || -0); // -0 რადგან თუ ორივე falsea დააბრუნებს პირველ მნიშვნელობას.

//  console.log(Infinity || -Infinity); //Infinity რადგან ორივე მათგანს აქვს true მნიშვნელობა
// და პირველს დალოგავს.

