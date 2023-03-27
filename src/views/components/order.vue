<template>
  <div class="home">
    <div class="details-container">
      <div class="sub-title">
        <span>标识码：{{curCode}}</span>
        <span class="icon" @click="giveBack"></span>
      </div>
      <div class="details">
        <div class="orderreal">
						<div class="ordertitle">
							订单号：{{orderInfo.order_no_data.length ? orderInfo.order_no_data[0].data.value : ''}}
						</div>
						<div class="orderstartend">
							<div class="datastart">
								{{orderInfo.departure_date_data.length ? orderInfo.departure_date_data[0].data.value : ''}}出港
							</div>
							<div class="placestartend">
								<div class="placebox">
									<span class="spann">{{orderInfo.departure_port_data.length ? orderInfo.departure_port_data[0].data.value : ''}}</span>
									<p class="pn">始发港</p>
								</div>
								<div class="transportbox">
										航班号{{orderInfo.flight_no_data.length ? orderInfo.flight_no_data[0].data.value : ''}}
									</div>
								<div class="placebox">
									<span class="spann">{{orderInfo.destination_port_data.length ? orderInfo.destination_port_data[0].data.value : ''}}</span>
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
									{{orderInfo.bill_No_data.length ? orderInfo.bill_No_data[0].data.value : ''}}
								</div>
							</div>
							<div class="messagebox">
								<div class="messagename">
									货物数据
								</div>
								<div class="messagetitle">
									{{orderInfo.cargo_data_data.length ? orderInfo.cargo_data_data[0].data.value : ''}}
								</div>
							</div>
						</div>
					</div>
        <div class="status-details">
          <div class="sub-details-title">在途跟踪</div>
          <div style="display:flex;">
            <div class="orderline" v-for="(val,k) in orderPathData" :key="k">
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
import { stat } from "fs";
let router = useRouter()
const user = userStore();

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
    id:'',
    curCode: "",
  	orderInfo: {
        order_no_data: [],
        departure_date_data: [],
        departure_port_data: [],
        destination_port_data: [],
        flight_no_data: [],
        bill_No_data: [],
        cargo_data_data: [],
      },
      codeData:[],//返回未处理的数据
      orderPathData: { //订单管理进度
        line1: [ {
          name: "已订舱",
          time: "",
          icon: 'yidingcang'
        },{
          name: "已提货",
          time: "",
          icon: 'tihuo'
        },{
          name: "已入库",
          time: "",
          icon: 'yiruku'
        },{
          name: "已报关",
          time: "",
          icon: 'yibaoguan'
        }],
        line2: [{
          name: "已出库",
          time: "",
          icon: 'yichuku'
        }, {
          name: "已中转",
          time: "",
          icon: 'yizhongzhuan'
        }, {
          name: "安检完成",
          time: "",
          icon: 'anjian'
        }, {
          name: "已打板",
          time: "",
          icon: 'daban1'
        }],
        line3: [{
          name: "已出运",
          time: "",
          icon: 'yichuyun'
        }]
      }
});
 
watch(()=>user.result.handle, (newValue, oldValue) => {
  if(newValue && newValue.indexOf('order') !== -1 && user.result && Object.keys(user.result).length){
     //标识码
  state.curCode = user.result.handle.split("/")[0];
	//订单号
 state.orderInfo.order_no_data = user.result.value.filter((item) => {
    return item.type === 'order_no'
  })

  //出港日期
 state.orderInfo.departure_date_data = user.result.value.filter((item) => {
    return item.type === 'departure_date'
  })
  //始发港
 state.orderInfo.departure_port_data = user.result.value.filter((item) => {
    return item.type === 'departure_port'
  })
  //目的港
 state.orderInfo.destination_port_data = user.result.value.filter((item) => {
    return item.type === 'destination_port'
  })
  //航班号
 state.orderInfo.flight_no_data = user.result.value.filter((item) => {
    return item.type === 'flight_no'
  })
  //提货单号
 state.orderInfo.bill_No_data = user.result.value.filter((item) => {
    return item.type === 'bill_No'
  })
  //货物数据
 state.orderInfo.cargo_data_data = user.result.value.filter((item) => {
    return item.type === 'cargo_data'
  })
 	//已订舱
  let book_space_data = user.result.value.filter((item) => {
    return item.type === 'book_space'
  })
  state.orderPathData.line1[0].time = book_space_data.length ? book_space_data[0].data.value : ''
  state.orderPathData.line1[0].time = state.orderPathData.line1[0].time.replace(/-/g, ".")
  //已提货
  let pick_cargo_data = user.result.value.filter((item) => {
    return item.type === 'pick_cargo'
  })
  state.orderPathData.line1[1].time = pick_cargo_data.length ? pick_cargo_data[0].data.value : ''
  state.orderPathData.line1[1].time = state.orderPathData.line1[1].time.replace(/-/g, ".")
  //已入库
  let in_stock_data = user.result.value.filter((item) => {
    return item.type === 'in_stock'
  })
  state.orderPathData.line1[2].time = in_stock_data.length ? in_stock_data[0].data.value : ''
  state.orderPathData.line1[2].time = state.orderPathData.line1[2].time.replace(/-/g, ".")
  //已报关
  let declare_data = user.result.value.filter((item) => {
    return item.type === 'declare'
  })
  state.orderPathData.line1[3].time = declare_data.length ? declare_data[0].data.value : ''
  state.orderPathData.line1[3].time = state.orderPathData.line1[3].time.replace(/-/g, ".")
  //已出库
  let out_stock_data = user.result.value.filter((item) => {
    return item.type === 'out_stock'
  })
  state.orderPathData.line2[0].time = out_stock_data.length ? out_stock_data[0].data.value : ''
  state.orderPathData.line2[0].time = state.orderPathData.line2[0].time.replace(/-/g, ".")
  //已中转
  let transfer_data = user.result.value.filter((item) => {
    return item.type === 'transfer'
  })
  state.orderPathData.line2[1].time = transfer_data.length ? transfer_data[0].data.value : ''
  state.orderPathData.line2[1].time = state.orderPathData.line2[1].time.replace(/-/g, ".")
  //安检完成
  let cargo_station_check_data = user.result.value.filter((item) => {
    return item.type === 'cargo_station_check'
  })
  state.orderPathData.line2[2].time = cargo_station_check_data.length ? cargo_station_check_data[0].data.value : ''
  state.orderPathData.line2[2].time = state.orderPathData.line2[2].time.replace(/-/g, ".")
  //已打版
  let punch_board_data = user.result.value.filter((item) => {
    return item.type === 'punch_board'
  })
  state.orderPathData.line2[3].time = punch_board_data.length ? punch_board_data[0].data.value : ''
  state.orderPathData.line2[3].time = state.orderPathData.line2[3].time.replace(/-/g, ".")
  //已出运
  let shipment_data = user.result.value.filter((item) => {
    return item.type === 'shipment'
  })
  state.orderPathData.line3[0].time = shipment_data.length ? shipment_data[0].data.value : ''
  state.orderPathData.line3[0].time = state.orderPathData.line3[0].time.replace(/-/g, ".")
  }
}, { immediate: true })
 
  let {curCode, orderInfo, codeData, orderPathData } = toRefs(state);
  onMounted(()=>{
		console.log('order======');
	})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
