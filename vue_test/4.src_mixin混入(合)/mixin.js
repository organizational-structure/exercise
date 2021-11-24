export const mixin ={
    data() {
        return {
            x=10,
            b=20
        }
    },
    methods: {
        showName(){
            console.log(this.name)
        }
    }
}