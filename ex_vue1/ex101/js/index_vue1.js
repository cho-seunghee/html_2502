var d = document;
var msg = '';

fnS1 = () => {
    const app = Vue.createApp({
        data(){
            return {
                vueClass1:"pinkBG"
            }
        }
    });

    app.mount("#app1")
}

fnS2 = () => {
    const app = Vue.createApp(
        {
            data(){
                return {
                    url:"./images/img_beach3.jpg"
                }
            }
        }
    )

    app.mount("#app2");
}

fnS3 = () => {
    const app = Vue.createApp({
        data() {
         return {
           size: '40px',
           message: "입력입력"
         }
        }
    })
      
    app.mount('#app3');
}

fnS4 = () => {
    const app = Vue.createApp({
        data() {
            return {
                size: '40',
                message: "테스트문자"
            }
        }
    })

    app.mount("#app4");
}

fnS5 = () => {
    const app = Vue.createApp({
        data() {
            return {
                size: 30,
                message: "테스트입니다."
            }
        }
    })

    app.mount("#app5");
}

fnS6 = () => {
    const app = Vue.createApp({
        data() 
        {
            return {
                bgVal: '60'
            }
        }
    })
    
    app.mount("#app6");
}

fnS7 = () => {
    const app = Vue.createApp({
        data() {
            return {
                isImportant: true,
                message: 'test 메시지'
            }
        }
    })

    app.mount("#app7");
}

fnS8 = () => {
    const app = Vue.createApp({
        data() {
            return {
                className : "impClass"
            }
        }
    })

    app.mount("#app8");
}

fnS9 = () => {
    const app = Vue.createApp({
        //비운다.
    })

    app.mount("#app9");
}

fnS10 = () => {
    const app = Vue.createApp({
        data() {
            return {
                isImportant : true
            }
        }
    })

    app.mount("#app10");
}

fnS11 = () => {
    const app = Vue.createApp({
        data() {
            return {
                isImportant : true
            }
        }
    })

    app.mount("#app11");
}

fnS12 = () => {
    const app = Vue.createApp({
        data() {
            return {
                opacityVal : 0.8   
            }
        }
    })

    app.mount("#app12");
}

fnS13 = () => {
    const app = Vue.createApp({
        data () {
            return {
                images1 : [
                    {url: './images/img_beach3.jpg', sel: false},
                    {url: './images/img_kangaroo.jpg', sel: false},
                    {url: './images/img_beach3.jpg', sel: false},
                    {url: './images/img_beach3.jpg', sel: false}
                ]
            }
        },
        methods: {
            select1(i)
            {
                this.images1[i].sel = !this.images1[i].sel;
            }
        }
    })

    app.mount("#app13");
}

fnS14 = () => {
    const app = Vue.createApp({
        data() {
            return {
                isYellow : true
            }
        }
    })

    app.mount("#app14");
}

fnS15 = () => {
    const app = Vue.createApp({
        data() {
            return {
                isYellow: true,
                isImportant: true
            }
        }
    })

    app.mount("#app15");
}

fnS16 = () => {
    const app = Vue.createApp({
        data() {
            return {
                isYellow: true,
                isImportant: true   
            }
        }
    })

    app.mount("#app16");
}