const PrivacyPolicy = Vue.component('privacy-policy', {
    template:`
    <div>
    <h3>Privacy Policy</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam corporis dolores, sint debitis voluptatibus necessitatibus, tempore ipsam vitae nam repellat rem fugit ipsa a assumenda. Magnam itaque voluptates ratione. Tempora.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt debitis aliquam ex laborum accusamus sint cum voluptas iste hic?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, iste.</p>
    </div>
    `
})

const About = Vue.component('about', {
    template:`
    <div>
    <h3>Privacy Policy</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam corporis dolores, sint debitis voluptatibus necessitatibus, tempore ipsam vitae nam repellat rem fugit ipsa a assumenda. Magnam itaque voluptates ratione. Tempora.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt debitis aliquam ex laborum accusamus sint cum voluptas iste hic?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, iste.</p>
    </div>
    `
})


const MessageBoard = Vue.component('message-board', {
    props:["title"],
    template: 
    `
    <div>
    <h4> {{title}} </h4>
    <p>Your name : <input type="text" v-model="visitor_name"></p>
    Your message : <input type="text" v-model="visitor_message">
    <button v-on:click="sayHi" >Say HI</button>
    <i class="bi bi-cloud-arrow-up-fill" v-bind:class="savedIconClass"></i>
    <ul>
        <li v-for="message in messages">{{message["visitor_name"]}} : {{message["visitor_message"]}}</li>
    </ul>
    </div>
    `,
    data: function() {
        return { 
            visitor_name:"",
            visitor_message:"",
            savedIconClass : "text-success",
            messages : []
    }
    },
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

const routes = [{
    path : '/',
    component: MessageBoard
},
{
    path : '/about',
    component : About
},
{
    path: '/privacy-policy',
    component : PrivacyPolicy
}
];

const router = new VueRouter({
    routes
})

var app = new Vue({
    el: "#app",
    router : router,
    data : {
        global_count : 0
    },
    methods:{
        add_count: function(){
            this.global_count = this.global_count + 1;
        }
    },
    beforeCreate: function(){
        console.log("beforeCreate");
        console.log(this.global_count);
    },
    created: function(){
        console.log("created");
        console.log(this.global_count)
    },
    beforeMount: function(){
        console.log("beforeMount");
    },
    mounted: function(){
        console.log("mounted");
        console.log(this.$el)
    },
    beforeUpdate: function(){
        console.log("beforeUpdate");
    },
    updated: function(){
        console.log("updated");
    },
     
});
