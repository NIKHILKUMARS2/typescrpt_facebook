var Facebook = /** @class */ (function () {
    //optional company
    function Facebook(facebookUserName, gender, dateOfBirth, mobilenumber, address, status, profilePicture, coverpagePicticture, collegeName, schoolName, numberOfSavedImage, numberOfLikedPhotoa, company) {
        var _this = this;
        this.company = company;
        this.getaddress = function () {
            console.log("the address of" + _this.facebookUserName + "is" + _this.address);
        };
        this.setaddress = function (addr) {
            _this.address = addr;
            console.log("the changed address is" + _this.address);
        };
        this.facebookUserName = facebookUserName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.mobilenumber = mobilenumber;
        this.address = address;
        this.status = status;
        this.profilePicture = profilePicture;
        this.coverpagePicticture = coverpagePicticture;
        this.collegeName = collegeName;
        this.schoolName = schoolName;
        this.numberOfSavedImage = numberOfSavedImage;
        this.numberOfLikedPhotoa = numberOfLikedPhotoa;
    }
    return Facebook;
}());
var user = new Facebook("nikhil", "male", "22/11/1995", 90086332788, "bangalore", "single", "some,jpg", "o.jpg", "BMS", "MABL", 5, 10);
user.getaddress();
user.setaddress("delhi");
