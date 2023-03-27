<template>
  <div class="home">
    <div class="details-container">
      <div class="sub-title">
        <span>标识码：{{curCode}}</span>
        <span class="icon" @click="giveBack"></span>
      </div>
      <div class="details">
        <div class="left-logo">
          <div class="name">车牌号：{{car_no_data.length ? car_no_data[0].data.value : ''}}</div>
          <div class="logo-box">
            <div class="logo"></div>
          </div>
        </div>
        <div class="status-details">
          <div class="sub-details-title">在途跟踪</div>
          <div style="display:flex;">
            <div class="orderline">
              <div class="status-detail-item" v-for="(item,index) in carPathData" :key="index" :class="item.time ? 'active' : 'inactive dark'">
                <div class="arraw-box" v-if="(index!==0)">
                  <svg class="custom-icon" width="24px" height="24px"  aria-hidden="true" :fill="item.time ? '#C01315' : '#333'">
                      <use xlink:href="#custom-icon-youbeifen"></use>
                  </svg>
                </div>
                <div class="linebox">
                    <svg width="48px" height="48px"  aria-hidden="true" :fill="item.time ? '#C01315' : '#333'">
                      <use :xlink:href="`#custom-icon-${item.icon}`"></use>
                    </svg>
                  <div class="iconname">{{item.name}}</div>
                  <div class="icontime">{{item.time}}</div>
                </div>               
              </div>
            </div>
          </div>           	
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/user";
import { Share } from '@element-plus/icons-vue'
const user = userStore();
let router = useRouter()
// props的使用
// 1 规定传递数据的类型
interface Props {
  handle ?: string
}
// 2 defineProps: 接收父组件传递的数据
const props = defineProps<Props>()
// console.log(props.handle);

// emit的使用
// 1 传值
const rValue = ref('give back')
// 2 定义回传的方法 defineEmits
const emit = defineEmits(['giveBack'])

const giveBack = () => {
	emit('giveBack', rValue)
}

const state = reactive({
  curCode: "",
  car_no_data: "",
  carPathData: [
    {
      //车辆管理进度
      name: "待提货",
      time: "",
      icon: "daitihuo"
    },
    {
      name: "提货中",
      time: "",
      icon: "tihuozhong"
    },
    {
      name: "已提货",
      time: "",
      icon: "tihuo"
    }
  ]
});
watch(()=>user.result.handle, (newValue, oldValue) => {
  if(newValue && newValue.indexOf('car') !== -1 && user.result && Object.keys(user.result).length){
//标识码
state.curCode = user.result.handle.split("/")[0];
//车牌号
state.car_no_data = user.result.value.filter(item => {
  return item.type === "car_number";
});
//待提货
let to_pick_up_data = user.result.value.filter(item => {
  return item.type === "to_pick_up";
});
state.carPathData[0].time = to_pick_up_data.length
  ? to_pick_up_data[0].data.value
  : "";
state.carPathData[0].time = state.carPathData[0].time.replace(/-/g, ".");
//提货中
let pick_up_data = user.result.value.filter(item => {
  return item.type === "pick_up";
});
state.carPathData[1].time = pick_up_data.length
  ? pick_up_data[0].data.value
  : "";
state.carPathData[1].time = state.carPathData[1].time.replace(/-/g, ".");
//已提货
let picked_up_data = user.result.value.filter(item => {
  return item.type === "picked_up";
});
state.carPathData[2].time = picked_up_data.length
  ? picked_up_data[0].data.value
  : "";
state.carPathData[2].time = state.carPathData[2].time.replace(/-/g, ".");
  }
}, { immediate: true })
 let { curCode, car_no_data, carPathData } = toRefs(state);
 onMounted(()=>{
		console.log('car======');
    
	})

</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .left-logo {
      border: 1px solid #c9cbcf;
      border-radius: 8px;
      height: 265px;
      width: 386px;
      margin-left: 387px;
      .name {
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-size: 16px;
        font-weight: 800;
        color: #000000;
        margin-left: 24px;
        margin-top: 16px;
      }
      .logo-box {
        height: 146px;
        width: 253px;
        background: rgba(215, 215, 216, 0.28);
        border-radius: 4px;
        margin-left: 24px;
        margin-top: 24px;
        padding-top: 27px;
        .logo {
          background: url(../../assets/images/car.png) no-repeat;
          background-size: contain;
          width: 169px;
          height: 92px;
          margin-left: 42px;
        }
      }
    }
}
</style>
