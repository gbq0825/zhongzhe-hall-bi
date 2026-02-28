import Zhongzhe from "../components/zhongzhe/index.vue"
import Undertaking from "../components/zhongzhe/undertaking/index.vue"

export const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "Zhongzhe",
    props: true,
    component: Zhongzhe,
  },
  {
    path: "/undertaking",
    name: "Undertaking",
	props: true,
    component: Undertaking,
  },

];

