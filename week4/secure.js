
var app = new Vue({
    el:"#app",
    data:{
        password:""
    },
    methods:{
        lower : function(){
            let lowerCaseLetters = /[a-z]/g;
            if(this.password.match(lowerCaseLetters)){
                return "btn-success";
            }
            return "";
        },
        upper : function(){
            let upperCaseLetters = /[A-Z]/g;
            if(this.password.match(upperCaseLetters)){
                return "btn-success";
            }
            return "";
        },
        num : function(){
            let numbers = /[0-9]/g;
            if(this.password.match(numbers)){
                return "btn-success";
            }            
            return "";
        },
        special : function(){
            let specialChars = /\W|_/g;
            if(this.password.match(specialChars)){
                return "btn-success";
            }
            return "";
        }
    }

})