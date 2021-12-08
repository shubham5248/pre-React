export default (userId)=>{
    // let status ="Online";
    // if(userId%2==0){
    //     status :"Online";
    // }
    // else{
    //     status :"Offline";
    // }
    // return status;



     return userId%2 ? "Offline": "Online";

}