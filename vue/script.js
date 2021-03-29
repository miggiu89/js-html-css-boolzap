var app = new Vue ({
    el : '#root',
    data : {

        

        user:{
            name:'Matteo',
            avatar: 'img/avatar_io.jpg'
        },
    
        
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: moment().calendar(),
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',

                    },
                    {
                        date: moment().calendar(),
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: moment().calendar(),
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date:  moment().calendar(),
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: moment().calendar(),
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: moment().calendar(),
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: moment().calendar(),
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: moment().calendar(),
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: moment().calendar(),
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: moment().calendar(),
                        text: 'Andiamo al mare?',
                        status: 'sent'
                    },
                    {
                        date: moment().calendar(),
                        text: 'Si, ma prima dovrei andare 4 anni in palestra',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Andrea',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: moment().calendar(),
                        text: 'Lo hai visto il suv di Giancarlo?',
                        status: 'sent'
                    },
                    {
                        date: moment().calendar(),
                        text: 'Si, e mi fa schifo',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: moment().calendar(),
                        text: 'Marco ti tradisce....',
                        status: 'sent'
                    },
                    {
                        date: moment().calendar(),
                        text: 'SI LO SO ! Con Carlo per giunta!',
                        status: 'received'
                    }
                ],
            },
        ],
        counter: 0,
        textInput: '',
        names:'',
        valInput:''
        
    },
    methods : {

        chatSmart(index) {
            this.counter = index;
        },
        insertInput(){
            if ( this.textInput.length ){
                this.contacts[this.counter].messages.push( {text: this.textInput, status: 'sent'} );
                this.textInput = '';
                setTimeout(this.Answer,1000);
            }
        },
        Answer(){
            this.contacts[this.counter].messages.push( {text: 'vabbuono', status: 'received'} );
            
        },
        search(){
            this.contacts.forEach((element) => {
                this.names = element.name.toLowerCase();
                element.visible = ( this.names.indexOf(this.valInput.toLowerCase()) > -1 ) ? true : false;
            });
        },
        dropMenu(index){
            this.contacts[this.counter].messages[index].menu = ( this.contacts[this.counter].message[index].menu == 'hidden' ) ?  'show' : 'hidden';
        },
        deleteMessage(index){
            this.contacts[this.counter].messages.splice(index, 1);
        }
    },
    
});