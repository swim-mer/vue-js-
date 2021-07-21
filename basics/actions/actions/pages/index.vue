<template>
    <div>
        <ResponseCode :code="code" v-on:getstate="getCode"/>
    </div>
</template>

<script>
import { state, actions } from '../store/code.js'
import { mapGetters, mapState } from 'vuex'
import ResponseCode from '~/components/ResponseCode'
export default {
    components: { ResponseCode },
    props: {
      code: this.getCode()
    },
    created() {
      console.log('code is ', code)
    },
    methods: {
      getCode() {
        actions.status
        return state.code
      }
    },
    computed: {
      code () {
        actions.status
        return state.code
      }
    }
}
</script>

<style>
</style>