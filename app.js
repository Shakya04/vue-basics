var vm1 = new Vue({ 
    el: '#app',
    data:{
        event:{
            eventDate : 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: 'It is back! This years summer festival will be in the beautiful countryside featuring our best line up ever!'
        },
        newNameText: '',
        guestList: [],
        eventCapacity: 25,
        eventCapacityPercentage : 0
    },
    methods: {
        formSubmitted: function(){
            if(this.newNameText.length > 0){
                this.guestList.push(this.newNameText)
                this.newNameText = '',
                this.eventCapacityPercentage =  this.guestList.length / (this.eventCapacity / 100)
            }
        }
    },
    computed: {
        sortNames: function(){
            return this.guestList.sort()
        }
    }
})

var vm2 = new Vue({
    el:'#navigation',
    data:{
        appName: 'Guest List',
        navLinks:[
            {name: "Home", id:1, url:"https://www.google.com"},
            {name : "Upcoming Events", id:2, url:"https://www.facebook.com"},
            {name: "Guest Benefits", id:3, url:"https://www.instagram.com"},
            {name: "latest News", id:4, url:"https://www.steam.com"}
        ]
    },
    methods:{
        capacityChanged : function(){
            vm1.eventCapacity = 15
        },
        changeTitle: function(){
            this.$refs.name.innerText = 'Title Change'
        } 
    }
})


// var vm3 = new Vue({
//     template: `<h1>Guest Lists</h1>`
// })


vm3.$mount('#navigation')
