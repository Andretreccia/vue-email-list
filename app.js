const app = new Vue ({
    el: '#app',
    data:{
        listaEmail:[
            
        ],
        shoeEmail: false
    },
    methods:{
        richiestaPsw(){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(risposta => {
                this.listaEmail.push(risposta.data.response);
                console.log(risposta.data.response)
            })
        }
    },
    mounted(){
        for (let i=0; i<10; i++) {
            this.richiestaPsw();
        }
    }
})