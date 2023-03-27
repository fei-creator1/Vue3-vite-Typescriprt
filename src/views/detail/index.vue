<template>
	<div class="">
		 <div class="top-container">
      <div class="title">工业互联网标识解析平台</div>
      <div class="system-list">
        <div class="system-item" v-if="user.role==='ADMIN' || user.role==='USER' || user.role==='USER1'">
          <div class="icon order-icon"></div>
          <div class="system-name">订单管理系统</div>
        </div>
        <div class="system-item" v-if="user.role==='ADMIN' || user.role==='USER' || user.role==='USER2'">
          <div class="icon logistics-icon"></div>
          <div class="system-name">物流车管理系统</div>
        </div>
        <div class="system-item" v-if="user.role==='ADMIN' || user.role==='USER' || user.role==='USER3'">
          <div class="icon chain-icon"></div>
          <div class="system-name">供应链管理系统</div>
        </div>
      </div>
      <div class="identity-resolution">
        <div class="query-box">
            <input v-model="state.handle" placeholder="请输入标识解析码" />
        </div>
        <div class="search-btn" @click="handleSearch">
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <component :is="childName" :handle="state.resultHandle" @giveBack="handleClose" />	
	</div>
</template>

<script setup lang="ts" name="detail">
import Logistics from "../components/logistics.vue";
import Order from "../components/order.vue";
import Supply from "../components/supply.vue";
import { userStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
import { log, debug } from "util";
import { computed } from "vue";
const user = userStore()
let router = useRouter()
const state = reactive({
	handle:'',
  resultHandle:'',
  result:{}
});
  onBeforeMount(()=>{
			// 获取当前路由实例参数
			let id=router.currentRoute.value.params.id
			if(id){
				handleSearch(id)
			}else{
				router.back()
			}			
	})

const childName=computed(()=>{
  let name =state.resultHandle.indexOf('car') !== -1 ? Logistics : state.resultHandle.indexOf('order') !== -1 ? Order : state.resultHandle.indexOf('inchain') !== -1 || (state.resultHandle.indexOf('outchain') !== -1) ? Supply : ''
  return name
})
//标识码查询
const handleSearch = async (id ?:string): void => {
  let handle=typeof id=='string' ? id : state.handle
  //校验
  if(!handleCheck(handle)) return
    let accessTokenExpiration = user.accessTokenExpiration
    let expirationTime=(new Date(accessTokenExpiration)).getTime()
    let nowTime=(new Date()).getTime()
    let remainTime=expirationTime-nowTime
     // 过期前5分钟刷新token
    if(remainTime > 0 && remainTime < 5*60*1000 ){
      user.setRefreshToken().then(()=>{
         getDetail(handle)
      })      
    }else{
      getDetail(handle)
    } 
}
const getDetail = (handle:string) => {
  user.getInfoByCode(handle).then( (res)=> {
				if(res.data){
					state.resultHandle=res.data.handle
					state.result=res.data
				}				
    }).catch(err => {
      ElMessage.error(err)
    })
}

//校验
const handleCheck = (handle:string) => {
  let text='您好,请填写对应的标识码'
  if (!handle) {
    ElMessage.error("您好,请输入标识码!");
    return false
  }
  if(user.role==='USER1'){
    if(handle.indexOf('order')===-1){
      ElMessage.error(text);
      return false
    }
  }
  if(user.role==='USER2'){
    if(handle.indexOf('car')===-1){
      ElMessage.error(text);
      return false
    }
  }
  if(user.role==='USER3'){
    if(handle.indexOf('inchain')===-1 && handle.indexOf('outchain')===-1){
      ElMessage.error(text);
      return false
    }
  }   
  return true   
};

const handleClose=(val)=>{
  // console.log(val.value);  
  router.back()
}
</script>

<style scoped lang="scss">
.top-container {
  width: 100%;
  height: 374px;
  background: url(../../assets/images/header-bg.png) no-repeat;
  background-size: cover;
  position: relative;
  .title {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #ffffff;
  }
  .system-list {
    display: flex;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    width: 500px;
    justify-content: space-around;

    .system-item {
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 26px;
        height: 26px;
        background-size: contain !important;
      }
      .order-icon {
        background: url(../../assets/images/order.png) no-repeat;
      }
      .logistics-icon {
        background: url(../../assets/images/logistics.png) no-repeat;
      }
      .chain-icon {
        background: url(../../assets/images/chain.png) no-repeat;
      }
      .system-name {
        font-family: PingFangSC-Medium, PingFang SC;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
  .identity-resolution {
    width: 800px;
    height: 56px;
    display: flex;
    position: absolute;
    left: 50%;
    top: 63%;
    transform: translate(-50%, -50%);
    .query-box {
      width: 700px;
      height: 100%;
      input {
        width: 100%;
        height: 54px;
        outline: none;
        border: none;
        border-radius: 4px;
        padding-left: 22px;
      }
      input::-webkit-input-placeholder {
        /* WebKit browsers */
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #d4d4d4;
      }
      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #d4d4d4;
      }
      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #d4d4d4;
      }
      input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #d4d4d4;
      }
    }
    .search-btn {
      flex: 1;
      background: #b5081b;
      height: 56px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        background: url(../../assets/images/search.png) no-repeat;
        width: 32px;
        height: 32px;
        background-size: contain;
      }
    }
  }
}
</style>
