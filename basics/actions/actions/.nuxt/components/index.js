import { wrapFunctional } from './utils'

export { default as ResponseCode } from '../../components/ResponseCode.vue'

export const LazyResponseCode = import('../../components/ResponseCode.vue' /* webpackChunkName: "components/response-code" */).then(c => wrapFunctional(c.default || c))
