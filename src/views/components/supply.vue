<template>
  <div class="home">
    <div class="details-container">
      <div class="sub-title">
        <span>标识码：{{curCode}}</span>
        <span class="icon" @click="giveBack"></span>
      </div>
      <div class="details">
        <div class="orderreal">
						<div class="ordertitle-box">
							<div class="ordertitle">订单号：{{chainInfo.order_no_data.length ? chainInfo.order_no_data[0].data.value : ''}}</div>
              <div class="chaintype">{{codeType==='inchain' ? '进口' : '出口'}}</div>
						</div>
            <view class="orderdate">
							订单日期：{{chainInfo.order_time_data.length ? chainInfo.order_time_data[0].data.value : ''}}
						</view>
            <div class="chainstartend">
							<div class="progress" :class="progressIcon">
								<div class="placebox">
									<span class="spann">{{chainInfo.shipment_place_data.length ? chainInfo.shipment_place_data[0].data.value : ''}}</span>
									<p class="pn">始发港</p>
								</div>
								<div class="placebox">
									<span class="spann">{{chainInfo.destination_country_code_data.length ? chainInfo.destination_country_code_data[0].data.value : ''}}</span>
									<p class="pn">目的港</p>
								</div>
							</div>
						</div>
						<div class="ordermessage">
							<div class="messagebox">
								<div class="messagename">
									提货单号
								</div>
								<div class="messagetitle">
									{{chainInfo.bill_No_data.length ? chainInfo.bill_No_data[0].data.value : ''}}
								</div>
							</div>
							<div class="messagebox">
								<div class="messagename">
									货物数据
								</div>
								<div class="messagetitle">
									{{chainInfo.cargo_data_data.length ? chainInfo.cargo_data_data[0].data.value : ''}}
								</div>
							</div>
						</div>
					</div>
        <div class="status-details">
          <div class="sub-details-title">在途跟踪</div>
          <div style="display:flex;">
            <div class="orderline" v-for="(val,k) in curPathData" :key="k">
              <div class="status-detail-item" v-for="(item,index) in val" :key="index" :class="item.time ? 'active' : 'inactive dark'">
                <div class="arraw-box" v-if="!(index===0 && k==='line1')">
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
import { ElMessage } from 'element-plus'
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
  codeType:'',
  curPathData:[],
  progressIcon:'',
      curCode: "",
    	chainInfo: {
					order_no_data: [],
					order_time_data: [],
					shipment_place_data: [],
					destination_country_code_data: [],
					bill_No_data: [],
					cargo_data_data: []
				},
				outchainPathData: { //供应链出口进度
					line1: [{
						name: "揽收提货",
						time: "",
						icon: 'tihuo'
					}, {
						name: "到达货站",
						time: "",
						icon: 'daodahuozhan'
					}, {
						name: "开始清关",
						time: "",
						icon: 'kaishiqingguan'
					}, {
						name: "清关结束",
						time: "",
						icon: 'jieshuqingguan'
					}],
					line2: [{
						name: "干线出发",
						time: "",
						icon: 'ganxianchufa'
					}, {
						name: "干线到达",
						time: "",
						icon: 'ganxiandaoda'
					}, {
						name: "快递配送",
						time: "",
						icon: 'kuaidipeisong'
					}, {
						name: "签收",
						time: "",
						icon: 'qianshou'
					}]
				},
				inchainPathData: { //供应链进口进度
					line1: [{
						name: "海外揽收",
						time: "",
						icon: 'haiwailanshou'
					}, {
						name: "海外出库",
						time: "",
						icon: 'haiwaichuku'
					}, {
						name: "干线出发",
						time: "",
						icon: 'ganxianchufa'
					}, {
						name: "干线到达",
						time: "",
						icon: 'ganxiandaoda'
					}],
					line2: [{
						name: "开始清关",
						time: "",
						icon: 'kaishiqingguan'
					}, {
						name: "清关结束",
						time: "",
						icon: 'jieshuqingguan'
					}, {
						name: "快递配送",
						time: "",
						icon: 'kuaidipeisong'
					}, {
						name: "签收",
						time: "",
						icon: 'qianshou'
					}]
				}
});
watch(()=>user.result.handle, (newValue, oldValue) => {
  if((newValue && newValue.indexOf('inchain') !== -1 || newValue.indexOf('outchain') !== -1) && user.result && Object.keys(user.result).length){
    state.codeType=user.result.handle.indexOf('inchain')!==-1 ? 'inchain' : 'outchain'
    //标识码
      state.curCode = user.result.handle.split("/")[0];
    //订单号
    state.chainInfo.order_no_data = user.result.value.filter((item) => {
      return item.type === 'order_no'
    })
    //订单日期
    state.chainInfo.order_time_data = user.result.value.filter((item) => {
      return item.type === 'order_time'
    })
    //始发港
    state.chainInfo.shipment_place_data = user.result.value.filter((item) => {
      return item.type === 'shipment_place'
    })
    //目的港
    state.chainInfo.destination_country_code_data = user.result.value.filter((item) => {
      return item.type === 'destination_country_code'
    })
    //提货单号
    state.chainInfo.bill_No_data = user.result.value.filter((item) => {
      return item.type === 'bill_No'
    })
    //货物数据
    state.chainInfo.cargo_data_data = user.result.value.filter((item) => {
      return item.type === 'cargo_data'
    })
    
    let chainPath=''
    if(user.result.handle.indexOf('inchain')!==-1){
      //进口
      chainPath='inchainPathData'
      //海外揽收
      let overseas_collection_delivery_data = user.result.value.filter((item) => {
        return item.type === 'overseas_collection'
      })
      state[chainPath].line1[0].time = overseas_collection_delivery_data.length ? overseas_collection_delivery_data[0].data.value : ''
      state[chainPath].line1[0].time = state[chainPath].line1[0].time.replace(/-/g, ".")
      //海外出库
      let overseas_out_stock_data = user.result.value.filter((item) => {
        return item.type === 'overseas_out_stock'
      })
      state[chainPath].line1[1].time = overseas_out_stock_data.length ? overseas_out_stock_data[0].data.value : ''
      state[chainPath].line1[1].time = state[chainPath].line1[1].time.replace(/-/g, ".")
      //干线出发
      let trunk_departure_data = user.result.value.filter((item) => {
        return item.type === 'trunk_departure'
      })
      state[chainPath].line1[2].time = trunk_departure_data.length ? trunk_departure_data[0].data.value : ''
      state[chainPath].line1[2].time = state[chainPath].line1[2].time.replace(/-/g, ".")
      //干线到达
      let trunk_arrival_data = user.result.value.filter((item) => {
        return item.type === 'trunk_arrival'
      })
      state[chainPath].line1[3].time = trunk_arrival_data.length ? trunk_arrival_data[0].data.value : ''
      state[chainPath].line1[3].time = state[chainPath].line1[3].time.replace(/-/g, ".")
      //开始清关
      let clearance_start_data = user.result.value.filter((item) => {
        return item.type === 'clearance_start'
      })
      state[chainPath].line2[0].time = clearance_start_data.length ? clearance_start_data[0].data.value : ''
      state[chainPath].line2[0].time = state[chainPath].line2[0].time.replace(/-/g, ".")
      //清关结束
      let clearance_end_data = user.result.value.filter((item) => {
        return item.type === 'clearance_end'
      })
      state[chainPath].line2[1].time = clearance_end_data.length ? clearance_end_data[0].data.value : ''
      state[chainPath].line2[1].time = state[chainPath].line2[1].time.replace(/-/g, ".")					
      
      //快速配送
      let express_delivery_data = user.result.value.filter((item) => {
        return item.type === 'express_delivery'
      })
      state[chainPath].line2[2].time = express_delivery_data.length ? express_delivery_data[0].data.value : ''
      state[chainPath].line2[2].time = state[chainPath].line2[2].time.replace(/-/g, ".")
      //签收
      let sign_data = user.result.value.filter((item) => {
        return item.type === 'sign'
      })
      state[chainPath].line2[3].time = sign_data.length ? sign_data[0].data.value : ''
      state[chainPath].line2[3].time = state[chainPath].line2[3].time.replace(/-/g, ".")
    }else if(user.result.handle.indexOf('outchain')!==-1){
      chainPath='outchainPathData'
      //揽收提货
      let collect_take_delivery_data = user.result.value.filter((item) => {
        return item.type === 'collect_take_delivery'
      })
      state[chainPath].line1[0].time = collect_take_delivery_data.length ? collect_take_delivery_data[0].data.value : ''
      state[chainPath].line1[0].time = state[chainPath].line1[0].time.replace(/-/g, ".")
      //到达货站
      let arrive_cargo_station_data = user.result.value.filter((item) => {
        return item.type === 'arrive_cargo_station'
      })
      state[chainPath].line1[1].time = arrive_cargo_station_data.length ? arrive_cargo_station_data[0].data.value : ''
      state[chainPath].line1[1].time = state[chainPath].line1[1].time.replace(/-/g, ".")
      //开始清关
      let clearance_start_data = user.result.value.filter((item) => {
        return item.type === 'clearance_start'
      })
      state[chainPath].line1[2].time = clearance_start_data.length ? clearance_start_data[0].data.value : ''
      state[chainPath].line1[2].time = state[chainPath].line1[2].time.replace(/-/g, ".")
      //清关结束
      let clearance_end_data = user.result.value.filter((item) => {
        return item.type === 'clearance_end'
      })
      state[chainPath].line1[3].time = clearance_end_data.length ? clearance_end_data[0].data.value : ''
      state[chainPath].line1[3].time = state[chainPath].line1[3].time.replace(/-/g, ".")
      //干线出发
      let trunk_departure_data = user.result.value.filter((item) => {
        return item.type === 'trunk_departure'
      })
      state[chainPath].line2[0].time = trunk_departure_data.length ? trunk_departure_data[0].data.value : ''
      state[chainPath].line2[0].time = state[chainPath].line2[0].time.replace(/-/g, ".")
      //干线到达
      let trunk_arrival_data = user.result.value.filter((item) => {
        return item.type === 'trunk_arrival'
      })
      state[chainPath].line2[1].time = trunk_arrival_data.length ? trunk_arrival_data[0].data.value : ''
      state[chainPath].line2[1].time = state[chainPath].line2[1].time.replace(/-/g, ".")										
      
      //快速配送
      let express_delivery_data = user.result.value.filter((item) => {
        return item.type === 'express_delivery'
      })
      state[chainPath].line2[2].time = express_delivery_data.length ? express_delivery_data[0].data.value : ''
      state[chainPath].line2[2].time = state[chainPath].line2[2].time.replace(/-/g, ".")
      //签收
      let sign_data = user.result.value.filter((item) => {
        return item.type === 'sign'
      })
      state[chainPath].line2[3].time = sign_data.length ? sign_data[0].data.value : ''
      state[chainPath].line2[3].time = state[chainPath].line2[3].time.replace(/-/g, ".")
    }

     //progressIcon 进度图标
    	//未出发
      let trunk_departure_data = user.result.value.filter((item) => {
        return item.type === 'trunk_departure'
      })
      let trunk_departure_time = trunk_departure_data.length ? trunk_departure_data[0].data.value : ''
      if(!trunk_departure_time){
        state.progressIcon= 'progress-one'
      }
      //未到达
      let trunk_arrival_data = user.result.value.filter((item) => {
        return item.type === 'trunk_arrival'
      })				
      let trunk_arrival_time = trunk_arrival_data.length ? trunk_arrival_data[0].data.value : ''
      if(!trunk_arrival_time){
        state.progressIcon= 'progress-two'
      }
      //未配送
      let express_delivery_data = user.result.value.filter((item) => {
        return item.type === 'express_delivery'
      })
      let express_delivery_time = express_delivery_data.length ? express_delivery_data[0].data.value : ''
      if(!express_delivery_time){
        state.progressIcon= 'progress-three'
      }
      //未签收
      let sign_data = user.result.value.filter((item) => {
        return item.type === 'sign'
      })
      let sign_time = sign_data.length ? sign_data[0].data.value : ''
      if(!sign_time){
        state.progressIcon= 'progress-four'
      }
      //已签收
      if(sign_time){
        state.progressIcon= 'progress-five'
      }
  }
}, { immediate: true })
  
  watch(()=>state.codeType, (newValue, oldValue) => {
     if(newValue==='inchain'){
        state.curPathData=state.inchainPathData   
      }else{
        state.curPathData=state.outchainPathData   
      }      
  }, { immediate: true })		

let {codeType,curCode, chainInfo, outchainPathData, inchainPathData,curPathData,progressIcon } = toRefs(state);
 onMounted(()=>{
		console.log('supply======');
    
	})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
