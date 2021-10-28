<template>
    <div>
        {{ num1 }} {{ opr }} {{ num2 }} = {{ result }}
    </div>
</template>
<script>
export default {
    props : {
        num1 : {
            type : Number,
            default : 0,
        },
        num2 : {
            type : Number,
            default : 0,
        },
        opr : {
            type : String,
            default : '+',
        }
    },
    computed : {
        result() {
            console.log(typeof this.num1);
            console.log(typeof this.num2);
            let result = this.num1;
            switch(this.opr) {
                case '-' :
                    result -= this.num2;
                    break;
                case '*' : 
                    result *= this.num2;
                    break;
                case '/' : 
                    result /= this.num2;
                    break;
                default :
                    result += this.num2;

            }
            return result;
        }
    }
}
</script>