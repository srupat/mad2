Vue.component('message-board', {
    props:["title"],
    data: function() {
        return { 
            visitor_name:"",
            visitor_message:"",
            messages : []
    }
    },
    template: 
    `
    <div>
    <h4> {{title}} </h4>
    <p>Your name : <input type="text" v-model="visitor_name"></p>
    Your message : <input type="text" v-model="visitor_message">
    <button v-on:click="sayHi" >Say HI</button>
    <!-- <p>{{visitor_name}} said hi!</p> -->
    <ul>
        <li v-for="message in messages">{{message["visitor_name"]}} : {{message["visitor_message"]}}</li>
    </ul>
    </div>
    `,
    methods:{
        sayHi: function(){

            this.messages.push({ "visitor_name" : this.visitor_name, "visitor_message":this.visitor_message});
            this.visitor_name = ""
            this.visitor_message = ''
            this.$emit("add-to-global-count")
        }
    }, 
    computed:{
        count : function(){
            return this.messages.length;
        }
    }

})

var app = new Vue({
    el: "#app",
    data : {
        global_count : 0
    },
    methods:{
        add_count: function(){
            this.global_count = this.global_count + 1;
        }
    }    
});
