const MyUrl = new URL('http:9080//mywebsite.com/abc.html?uname=anand&pass=12345');

//Serialized URL
// console.log(MyUrl.href);

//Host (root domain)
// console.log(MyUrl.hostname);

//Path name
// console.log(MyUrl.pathname);
//Serialized Query
// console.log(MyUrl.search)
//Params object
console.log(MyUrl.searchParams)