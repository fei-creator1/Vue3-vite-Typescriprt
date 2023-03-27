<template>
   <div class="modal" v-if="user.showLoginModal">
      <div class="mask" @click="handleClose"></div>
      <div class="container">
        <div class="logo"></div>
        <div class="title">工业互联网标识解析平台登录</div>
        <el-form ref="refForm" label-width="0" :model="form" class="input-container" size="large">
          <el-form-item prop="username" class="input-box" :rules="[{ required: true, message: '用户名不能为空!' }]">
            <el-input v-model="form.username" :input-style="inputStyle" placeholder="用户名">
              <template #prefix>
                <el-icon size="33px" color="#99999D">
                  <SvgIcon iconName="user"></SvgIcon>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" class="input-box password-box" :rules="[{ required: true, message: '密码不能为空!' }]">
            <el-input v-model="form.password" showPassword placeholder="密码">
              <template #prefix>
                 <el-icon size="33px" color="#99999D">
                  <SvgIcon iconName="lock"></SvgIcon>
                </el-icon>
              </template>
              <!-- <template #suffix>
                <el-icon size="33px">
                  <SvgIcon
                    :iconName="form.showPassword ? 'eye-open' : 'eye-close'"
                    @click="form.showPassword = !form.showPassword"
                  ></SvgIcon>
                  <View />
                </el-icon>
              </template> -->
            </el-input>
          </el-form-item>
        </el-form>
        <div class="remember-password">
          <input type="checkbox" id="remember" class="remember" value="first_checkbox" />
          <label for="remember">记住密码</label>
        </div>
        <div class="btn">
          <div class="login" @click="handleLogin">登录</div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessage,ElMessageBox } from 'element-plus'
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
const rValue = ref('closeLogin')
// 2 定义回传的方法 defineEmits
const emit = defineEmits(['closeLogin'])

const handleClose = () => {
	emit('closeLogin', rValue)
}

interface LoginForm {
  username: string
  password: string
  remember: boolean
  showPassword: boolean
}

const refForm = ref<ComponentPublicInstance<FormInstance> | null>(null)
const form = reactive<LoginForm>({
  username: '',
  password: '',
  showPassword: false,
  remember: true
})

const inputStyle = reactive({
  border:'none'
})

//登录
const handleLogin = (): void => {
  if (!refForm.value) return
  refForm.value.validate((valid, fields) => {
    if (!valid) return false
    user.login(form.username, form.password).then( ()=> {
       ElMessage.success('登录成功')
       user.setLoginModal(false)
    }).catch(err => {
      ElMessage.error(err)
    })
  })
};
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    opacity: 0.5;
  }
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 408px;
    height: 486px;
    background: #ffffff;
    border-radius: 4px;
    .logo {
      width: 151px;
      height: 45px;
      margin: 35px auto;
      background: url(../../assets/images/modal-logo.png) no-repeat;
      background-size: contain;
    }
    .title {
      font-family: PingFang-SC-Bold, PingFang-SC;
      width: 100%;
      margin-top: 13px;
      text-align: center;
      font-weight: bold;
      color: #323233;
      font-size: 16px;
    }
    .input-container {
      margin-top: 28px;
      width: 100%;
      text-align: center;

      .input-box {
        width: 328px;
        height: 48px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 24px;
        border: 1px solid #d3d5d9;
        display: flex;
        justify-content: center;
        align-items: center;
        &:first-child{
          margin-bottom: 18px;
        }
        /* 利用穿透，设置input边框隐藏 */
        :deep(.el-input__wrapper) {
          border: none; 
          box-shadow: none;
          background-color: transparent;
        }
        :deep(.el-form-item__error){ 
          padding-top:6px;
        }
        &.password-box{
           :deep(.el-input__password){ 
              width: 20px !important;
             height: 20px !important;
             svg{
                width: 20px !important;
                height: 20px !important;
             }
          }           
        }
      }
      .password-box {
        margin-top: 16px;
        .icon {
          width: 33px;
          height: 33px;
          background: url(../../assets/images/password.png) no-repeat;
          background-size: contain;
        }
      }
      .user-box {
        margin-top: 16px;
        .icon {
          width: 33px;
          height: 33px;
          background: url(../../assets/images/user.png) no-repeat;
          background-size: contain;
        }
      }
      input {
        outline: none;
        border: none;
        margin-left: 15px;
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

    .remember-password {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 20px;
      margin-left: -40px;
      font-size: 12px;
      label{
        padding-left:2px;
      }
    }
    .btn {
      width: 100%;
      .login {
        background: #b5081b;
        margin: 48px auto;
        width: 328px;
        height: 48px;
        text-align: center;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        line-height: 48px;
        cursor: pointer;
        border-radius: 24px;
      }
    }
  }
}
</style>
