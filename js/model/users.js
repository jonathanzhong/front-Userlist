/**
 * Created by yonglin1 on 8/18/15.
 */
app.factory('Users', function() {

    function Users() {
        this.userlist = [
            {id:1, fName:'Hege', lName:"Pege", gender:"Male", age:"27" },
            {id:2, fName:'Kim',  lName:"Pim", gender:"Female", age:"35" },
            {id:3, fName:'Sal',  lName:"Smith", gender:"Female", age:"29" },
            {id:4, fName:'Jack', lName:"Jones", gender:"Male", age:"50" },
            {id:5, fName:'John', lName:"Doe", gender:"Male", age:"56" },
            {id:6, fName:'Peter',lName:"Pan", gender:"Male", age:"12" },
            {id:7, fName:'Sal',  lName:"Smith", gender:"Female", age:"29" },
            {id:8, fName:'Jack', lName:"Jones", gender:"Male", age:"50" },
            {id:9, fName:'John', lName:"Doe", gender:"Male", age:"56" },
            {id:10, fName:'Peter',lName:"Pan", gender:"Male", age:"12" },
            {id:11, fName:'Sal',  lName:"Smith", gender:"Female", age:"29" },
            {id:12, fName:'Jack', lName:"Jones", gender:"Male", age:"50" },
            {id:13, fName:'John', lName:"Doe", gender:"Male", age:"56" },
            {id:14, fName:'Peter',lName:"Pan", gender:"Male", age:"12" },
            {id:15, fName:'Sal',  lName:"Smith", gender:"Female", age:"29" },
            {id:16, fName:'Jack', lName:"Jones", gender:"Male", age:"50" },
            {id:17, fName:'John', lName:"Doe", gender:"Male", age:"56" },
            {id:18, fName:'Peter',lName:"Pan", gender:"Male", age:"12" },
            {id:19, fName:'Sal',  lName:"Smith", gender:"Female", age:"29" },
            {id:20, fName:'Jack', lName:"Jones", gender:"Male", age:"50" },
            {id:21, fName:'John', lName:"Doe", gender:"Male", age:"56" },
            {id:22, fName:'Peter',lName:"Pan", gender:"Male", age:"12" }
        ];
    };

    Users.prototype.creatUser = function(num1, first, last, sex, num2) {
        var newUser = {id: num1, fName: first, lName: last, gender: sex, age: num2};
        this.userlist.push(newUser);
    };


    Users.prototype.saveUser = function(id ,fName, lName, gender, age) {
        this.userlist[id-1].fName = fName;
        this.userlist[id-1].lName = lName;
        this.userlist[id-1].gender = gender;
        this.userlist[id-1].age = age;
        alert("You have changed the user!");
    };

    Users.prototype.deleteUser = function(id) {
        this.userlist.splice(id-1, 1);
        for(var i = id-1; i < this.userlist.length; i++) {
          this.userlist[i].id = this.userlist[i].id - 1;
        }
    };

    return Users;
});