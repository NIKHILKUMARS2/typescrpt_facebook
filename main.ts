class Facebook{
    public facebookUserName:string;
    gender:string;
    dateOfBirth:string;
    mobilenumber:number;
    private address:string;
    status:string;
    profilePicture:string;
    coverpagePicticture:string;
    collegeName:string;
    schoolName:string;
    numberOfSavedImage:number;
    numberOfLikedPhotoa:number;
    //optional company
    
    

constructor(facebookUserName:string,gender:string,dateOfBirth:string,mobilenumber:number,
    address:string,
    status:string,
    profilePicture:string,
    coverpagePicticture:string,
    collegeName:string,
    schoolName:string,
    numberOfSavedImage:number,
    numberOfLikedPhotoa:number,
    public company?:string){

        this.facebookUserName=facebookUserName;
        this.gender=gender;
        this.dateOfBirth=dateOfBirth;
        this.mobilenumber=mobilenumber;
        this.address=address;
        this.status=status;
        this.profilePicture=profilePicture;
        this.coverpagePicticture=coverpagePicticture;
        this.collegeName=collegeName;
        this.schoolName=schoolName;
        this.numberOfSavedImage=numberOfSavedImage;
        this.numberOfLikedPhotoa=numberOfLikedPhotoa;


}


getaddress=()=>{
    console.log("the address of"+this.facebookUserName+"is"+this.address);
}
setaddress=(addr:string)=>{
    this.address=addr;
    console.log("the changed address is"+this.address);
}

}

let user=new Facebook("nikhil","male","22/11/1995",90086332788,"bangalore","single","some,jpg","o.jpg","BMS","MABL",5,10);
user.getaddress();
user.setaddress("delhi");
