<template>
  <div class="CommandButtons">
    <div class="embed-responsive embed-responsive-16by9">
        <div class="btn-group-vertical btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" @click=reader >
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Start
            </button>
            <button type="button" class="btn btn-secondary">Pause</button>
            <button type="button" class="btn btn-secondary">Restart</button>
            <button type="button" class="btn btn-secondary" v-on:click="greet">{{ message }} and Greet Clicked is {{ greetClicked }}</button>
        </div>
    </div>


    <p>Hi I am sam and I am {{ greetClicked}}</p>

  </div>
</template>

<script>
export default {
  name: "CommandButtons",
  props: {
    source: String,
        },
        data() {
            return {
                message: "This was here first!",
                greetClicked: false
            }
        },
        methods: {
            greet() {
                if (this.greetClicked) {
                    this.message = "True"
                    
                }
                else {
                    this.message = "False"
                }
                this.greetClicked = !this.greetClicked
            },
            reader() {
                this.$emit('reader')
            }


        },
};
</script>