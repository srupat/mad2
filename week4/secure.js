
var app = new Vue({
    el:"#app",
    data:{
        message:""
    },
    methods:{
        isOklower : function(){
            var lowerCaseLetters = /[a-z]g/;
            if (message.value.match(lowerCaseLetters)){
                return true;
            }
            return false;
        }
    }

})