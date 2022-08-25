import axios from "axios";
export default function getData(Number){
        
        return new Promise(async(resolve,reject)=>{
            const { data:users } = await axios("https://jsonplaceholder.typicode.com/users/"+Number);
            const { data:posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+Number+"&&id=1");
            users.posts = posts;
            resolve(users);
        });

};

// getComments()
// .then((data)=> console.log(data))
// .catch((e) => console.log(e));
