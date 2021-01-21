<template>
  <div class="DataEntry">
    <div class="container">
        <div class="row">
            <div class="col-3 text-center">
                <CommandButtons @reader=reader />
                <CodeIssues v-bind:counter="0" />
                <TypeingTracker />
            </div>
            <div class="col-9">
                <iframe :src=source id="myFrame" class="iframe" name="info" seamless="" height="800em" width="100%"></iframe>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CommandButtons from "@/components/CommandButtons.vue";
import CodeIssues from "@/components/CodeIssues.vue";
import TypeingTracker from "@/components/TypeingTracker.vue";


export default {
    components: {
        CommandButtons,
        CodeIssues,
        TypeingTracker,
    },
    data() {
        return {
            source: "https://icons.getbootstrap.com/",
            data: String,
        }
    },
    methods: {
        reader() {
            var iframe = document.getElementById("myFrame");
            var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            console.log(innerDoc.body);
        }
    }

}
</script>

<style scoped>
    .container {
        margin-top: 4em;
    }
</style>