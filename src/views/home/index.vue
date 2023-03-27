<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
    background-color="#076fce" text-color="#e8e5e5" active-text-color="#e8e5e5">
    <SvgIcon iconName="food" style="width: 400px; height: 57.6px;"></SvgIcon>
    <div class="flex-grow" />
    <el-menu-item index="1">产品服务</el-menu-item>
    <el-menu-item index="2">解决方案</el-menu-item>
    <el-menu-item index="3">产业金融</el-menu-item>
    <el-menu-item index="4">检测认证</el-menu-item>
    <el-menu-item index="5">标识解析</el-menu-item>
    <el-menu-item index="6">行业政策</el-menu-item>
    <el-menu-item index="7">生态伙伴</el-menu-item>
    <el-menu-item index="8">产业云图</el-menu-item>
    <el-menu-item index="9">集群业务工作室</el-menu-item>
    <el-menu-item index="10">直播预约</el-menu-item>
  </el-menu>
  <div>
    <video class="video" src="https://gd-casicloud.com/images/banner/foodBanner2.mp4" muted autoplay loop></video>
  </div>
  <!-- 解决方案 -->
  <el-row :gutter="24">
    <el-col :span="8" :offset="4">
      <div class="news-icon"></div>
      <div class="news-title"></div>
      <div class="news-box">
        <!-- <ul id="news-container">
            </ul> -->
        <ul>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="http://www.cnfoodnet.com/index.php?c=show&id=6809">
              预制菜产业呈现蓬勃发展势头
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="samr.gov.cn/zt/spaqzp/" target="_blank">
              食品领域优秀科普作品展播平台
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="new1.html">
              2020调味品产业领袖峰会暨中国调味品协会成立25周年纪念大会在穗召开
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="https://www.samr.gov.cn/xw/tp/202303/t20230313_353733.html">
              2023年特殊食品安全“六个坚持”划重点
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="https://www.samr.gov.cn/xw/zj/202303/t20230317_353909.html">
              特殊食品行业落实“两个责任”座谈会在京举办
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="https://www.samr.gov.cn/xw/mtjj/202303/t20230315_353807.html">
              市场监管总局加强食品安全监管 2022年抽检量达16万余批次
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="https://www.samr.gov.cn/xw/df/202303/t20230315_353810.html">
              多地2022年消费维权数据“出炉”
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text" href="https://www.samr.gov.cn/xw/df/202303/t20230309_353668.html">
              广东省市场监管局部署推进
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text"
              href="https://mbd.baidu.com/newspage/data/landingsuper?pageType=1&context=%7B%22nid%22%3A%22news_8905177228484823800%22,%22sourceFrom%22%3A%22bjh%22%7D">
              汕头再现工人赤脚踩腌菜！
            </a>
          </li>
          <li>
            <div class="icon">
              <img src="@/assets/images/news.png" alt="">
            </div>
            <a class="text"
              href="https://mbd.baidu.com/newspage/data/landingsuper?pageType=1&context=%7B%22nid%22%3A%22news_8948094895265023181%22,%22sourceFrom%22%3A%22bjh%22%7D">
              华熙生物玻尿酸水被质疑背后
            </a>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :span="10">
      <div class="common-icon"></div>
      <div class="common-title"></div>
      <div class="serve-box">
        <div class="top">
          <div class="search-box">
            <input />
            <div class="search-icon">
              <img src="@/assets/images/search.png" alt="">
            </div>
          </div>
        </div>
        <div class="bot">
          <div class="b-top">
            <div class="b-top-left node-management">
              <div class="text" id="snms">
                行业节点管理平台
                <img src="@/assets/images/arrow.png" alt="">
              </div>
              <img class="bg" src="@/assets/images/portfolio-3.png" alt="">
            </div>
            <div class="b-top-right">
              <div class="item bg-1 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
                <div class="icon">
                  <img src="@/assets/images/f1.png" alt="">
                </div>
                <div class="text">生产监造</div>

              </div>

              <div class="item bg-2 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="700ms">
                <div class="icon">
                  <img src="@/assets/images/f2.png" alt="">
                </div>
                <div class="text">食品溯源</div>
              </div>

              <div class="item bg-3 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                <div class="icon">
                  <img src="@/assets/images/f3.png" alt="">
                </div>
                <div class="text">质检报告</div>
              </div>

              <div class="item bg-4 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1100ms">
                <div class="icon">
                  <img src="@/assets/images/f4.png" alt="">
                </div>
                <div class="text">设备维保</div>
              </div>

              <div class="item bg-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1300ms">
                <div class="icon">
                  <img src="@/assets/images/f5.png" alt="">
                </div>
                <div class="text">设备手册</div>
              </div>
              <div class="item bg-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1300ms">
                <div class="icon">
                  <img src="@/assets/images/f5.png" alt="">
                </div>
                <div class="text">轻排产</div>
              </div>
            </div>
          </div>
          <div class="b-bot">
            <div class="item baas">
              <div class="mask-box">

              </div>
              <div class="top">
                <div class="icon">
                  <img src="@/assets/images/blockchain.png" alt="">
                </div>
                <div class="text">区块链BaaS服务</div>
              </div>
              <div class="bot">
                <div class="text">
                  提供区块链baas平台接入服务，开发者可通过该模块实现自身应用与区块链baas的对接
                </div>
              </div>
            </div>
            <div class="item baas">
              <div class="top">
                <div class="icon">
                  <img src="@/assets/images/blockchain.png" alt="">
                </div>
                <div class="text">区块链存证SaaS服务</div>
              </div>
              <div class="bot">
                <div class="text">
                  提供区块链认证查询服务，用户可通过该模块查询某产品或检测报告的上链信息
                </div>
              </div>
            </div>
            <div class="item baas">
              <div class="top">
                <div class="icon">
                  <img src="@/assets/images/blockchain.png" alt="">
                </div>
                <div class="text">区块链工作站</div>
              </div>
              <div class="bot">
                <div class="text">
                  提供区块链技术最新资讯，为开发者和企业用户提供区块链资讯服务
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <!-- 产品服务 -->
  <div class="pt-100 pb-85">
    <div class="container">
      <div class="model-title wow slideInUp method-title" data-wow-delay=".1s">
        <div class="img"></div>
      </div>
      <div class="solution">
        <img src="https://gd-casicloud.com/images/common/solution.png" alt="">
      </div>
    </div>
  </div>
  <div class="case_box">
    <div class="model-title wow slideInUp product-title" data-wow-delay=".1s">
      <div class="img"></div>
    </div>
    <div class="product-container">
      <div class="product-list-box">
        <div class="product-tabs">
          <div class="tab-item design tab-item-select icon-select ">
            <div class="product-icon design-icon"></div>
            <div class="product-name">研发设计</div>
          </div>
          <div class="tab-item supply">
            <div class="product-icon supply-icon"></div>
            <div class="product-name">供应链域</div>
          </div>
          <div class="tab-item sell">
            <div class="product-icon sell-icon"></div>
            <div class="product-name">销售域</div>
          </div>
          <div class="tab-item produce">
            <div class="product-icon produce-icon"></div>
            <div class="product-name">生产域</div>
          </div>
          <div class="tab-item equ">
            <div class="product-icon equ-icon"></div>
            <div class="product-name">设备域</div>
          </div>
          <div class="tab-item quality">
            <div class="product-icon quality-icon"></div>
            <div class="product-name">质量域</div>
          </div>
          <div class="tab-item wms">
            <div class="product-icon wms-icon"></div>
            <div class="product-name">仓储物流</div>
          </div>
          <div class="tab-item energy">
            <div class="product-icon energy-icon"></div>
            <div class="product-name">能源域</div>
          </div>
        </div>
        <div class="product-content">
          <div class="useSys">立即使用</div>
          <div class="product-service-title">
            产品数字化管理与工艺分析应用系统
          </div>
          <div class="product-info">
            <div class="product-brief">
              产品数字化管理与工艺分析应用系统是制造企业实现产品资料统一管理、工艺路线及参数标准化管控的数字化管理工具。具备产品管理、工艺管理、项目管理、试制管理等功能，建立标准化产品研发试制流程，大大提升产品研发效率，有效缩短产品研发周期。同时，基于流程行业/类流程行业特性，实现产品BOM、标准工艺参数管理，与MES/SCADA系统线上协同，实现参数超限实时预警，输出标准工艺参数与实际工艺参数的对比，为产品研发、工艺改进提供有效数据指导。
            </div>
            <div class="product-function">
              <div class="info-label">功能点：</div>
              <div class="function-value">
                <p>1.项目管理</p>
                <p>2.产品管理</p>
                <p>3.工艺管理</p>
                <p>4.试制管理</p>
              </div>
            </div>
            <div class="product-value">
              <div class="info-label">价值：</div>
              <div class="value-value">
                提高产品研发效率：10-20%；
                减少研发成本：5-10%；
                标准化产品工艺资料以及产品BOM，提高企业对产品工艺及物料管理能力。
              </div>
            </div>
          </div>
        </div>
        <div class="product-video">
          <video class="product-video-box" src="https://gd-casicloud.com/images/common/质量溯源系统.mp4" muted autoplay
            loop></video>
        </div>
      </div>
    </div>
  </div>
  <!-- 需求供给 -->
  <div class="supply pb-85 ">
    <div class="container">
      <div class="model-title wow slideInUp supply-title" data-wow-delay=".1s">
        <div class="img"></div>
      </div>
      <div class="supply-row">
        <div class="title">
          <div class="left">
            <div class="line"></div>
            找需求
          </div>
          <a class="right" href="http://etpss.casicloud.com/home/gyl/inquiry/wx/publish.html" target="_blank">我要发需求</a>
        </div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="产品" name="first">
            <div class="list-box list-demand-product">
              <div class="list-item">
                <div class="left">潍坊机器人副钢构制作</div>
                <div class="right">
                  <div class="date">剩余77天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032193126.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">铸造项目打磨修饰</div>
                <div class="right">
                  <div class="date">剩余77天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192838.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">固体垃圾处理</div>
                <div class="right">
                  <div class="date">剩余77天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192862.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">STX打磨补充1</div>
                <div class="right">
                  <div class="date">剩余77天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192934.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">香港天坛大佛维护打磨和安装</div>
                <div class="right">
                  <div class="date">剩余77天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192766.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="能力" name="second">
            <div class="list-box list-demand-ability">
              <div class="list-item">
                <div class="left">电压传感器</div>
                <div class="right">
                  <div class="date">剩余48天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032013562.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">激磁模组生产</div>
                <div class="right">
                  <div class="date">剩余10天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032013554.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">高望钢材</div>
                <div class="right">
                  <div class="date">剩余21天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032012265.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">INDICS平台运营可视化系统建设项目</div>
                <div class="right">
                  <div class="date">剩余1天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032012168.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">首航机械项目屋面防水分包</div>
                <div class="right">
                  <div class="date">剩余52天</div>
                  <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032012143.html"
                    target="_blank">立即报价</a>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- <div class="list-box list-demand-product">
          <div class="list-item">
            <div class="left">潍坊机器人副钢构制作</div>
            <div class="right">
              <div class="date">剩余77天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032193126.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">铸造项目打磨修饰</div>
            <div class="right">
              <div class="date">剩余77天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192838.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">固体垃圾处理</div>
            <div class="right">
              <div class="date">剩余77天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192862.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">STX打磨补充1</div>
            <div class="right">
              <div class="date">剩余77天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192934.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">香港天坛大佛维护打磨和安装</div>
            <div class="right">
              <div class="date">剩余77天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032192766.html"
                target="_blank">立即报价</a>
            </div>
          </div>
        </div> -->
        <!-- 需求-能力 -->
        <!-- <div class="list-box list-demand-ability">
          <div class="list-item">
            <div class="left">电压传感器</div>
            <div class="right">
              <div class="date">剩余48天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032013562.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">激磁模组生产</div>
            <div class="right">
              <div class="date">剩余10天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032013554.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">高望钢材</div>
            <div class="right">
              <div class="date">剩余21天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032012265.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">INDICS平台运营可视化系统建设项目</div>
            <div class="right">
              <div class="date">剩余1天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032012168.html"
                target="_blank">立即报价</a>
            </div>
          </div>
          <div class="list-item">
            <div class="left">首航机械项目屋面防水分包</div>
            <div class="right">
              <div class="date">剩余52天</div>
              <a class="quote" href="http://www.casicloud.com/buy/wx/contactInfo/40000032012143.html"
                target="_blank">立即报价</a>
            </div>
          </div>
        </div> -->
      </div>
      <div class="supply-row">
        <div class="title">
          <div class="left">
            <div class="line"></div>
            找产品
          </div>
          <a class="right" href="http://etpss.casicloud.com/home/cloudmarketing/spfb" target="_blank">我要发产品</a>
        </div>
        <el-tabs v-model="activeName1" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="产品" name="1">
            <div class="list-box list-findProduct-product">
              <div class="list-item">
                <div class="left">高校实验室建设必备品-“LIMS”</div>
                <div class="right">
                  <div class="date">商议</div>
                  <a class="quote" href="http://www.casicloud.com/sell/40000032013106.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">高校实验室管理系统平台</div>
                <div class="right">
                  <div class="date">1251.00元</div>
                  <a class="quote" href="http://www.casicloud.com/sell/40000032013070.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">国保保密柜E3电子密码锁办公文件柜国家保密涉密资料柜加厚全钢大型档案柜通双节凭证文档M103-E3</div>
                <div class="right">
                  <div class="date">1980.00元</div>
                  <a class="quote" href="http://www.casicloud.com/sell/40000032011682.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">国保保密柜E2密码锁办公电子大型文件柜国家保密涉密资料柜加厚全钢档案柜通体文档保险柜M103-E2</div>
                <div class="right">
                  <div class="date">1880.00元</div>
                  <a class="quote" href="http://www.casicloud.com/sell/40000032011665.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">国保保密柜E1电子密码锁办公文件柜小型家用保险柜带抽加厚保险箱全钢制档案柜 带装饰面板M103-E1</div>
                <div class="right">
                  <div class="date">1180.00元</div>
                  <a class="quote" href="http://www.casicloud.com/sell/40000032011646.html" target="_blank">立即报价</a>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="能力" name="2"><!-- 能力 -->
            <div class="list-box list-findProduct-ability">
              <div class="list-item">
                <div class="left">钢材加工</div>
                <div class="right">
                  <div class="date">商议</div>
                  <a class="quote" href="http://www.casicloud.com/cap/40000032013172.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">塑胶模具整套模具全加工</div>
                <div class="right">
                  <div class="date">商议</div>
                  <a class="quote" href="http://www.casicloud.com/cap/40000032013133.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">CNC零件加工</div>
                <div class="right">
                  <div class="date">商议</div>
                  <a class="quote" href="http://www.casicloud.com/cap/40000032013130.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">注塑加工</div>
                <div class="right">
                  <div class="date">商议</div>
                  <a class="quote" href="http://www.casicloud.com/cap/40000032013121.html" target="_blank">立即报价</a>
                </div>
              </div>
              <div class="list-item">
                <div class="left">LIMS系统功能</div>
                <div class="right">
                  <div class="date">100.00元</div>
                  <a class="quote" href="http://www.casicloud.com/cap/40000032013116.html" target="_blank">立即报价</a>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>


      </div>
    </div>
  </div>
  <!-- 数字转型贷 -->
  <div class="digital_loan_section layout_padding">
    <div class="container">
      <!-- <div class="row mb-60">
        <h2 class="wow slideInUp" data-wow-delay=".1s">数字转型贷</h2>
      </div> -->
      <div class="model-title wow slideInUp number-title" data-wow-delay=".1s">
        <div class="img"></div>
      </div>
      <div class="row content">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="item apply">
                <div class="icon">
                  <img src="https://gd-casicloud.com/images/common/multiple.png" alt="">
                </div>
                <div class="title">品种多</div>
                <div class="desc">授信品种多</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="item apply">
                <div class="icon">
                  <img src="https://gd-casicloud.com/images/common/highlimit.png" alt="">
                </div>
                <div class="title">额度高</div>
                <div class="desc">额度最高达1000万</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="item apply">
                <div class="icon">
                  <img src="https://gd-casicloud.com/images/common/LoanCycle.png" alt="">
                </div>
                <div class="title">贷款期限长</div>
                <div class="desc">最高期限30年</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="item apply">
                <div class="icon">
                  <img src="https://gd-casicloud.com/images/common/credit.png" alt="">
                </div>
                <div class="title">授信担保</div>
                <div class="desc">资料齐全...</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="item apply">
                <div class="icon">
                  <img src="https://gd-casicloud.com/images/common/lendingLate.png" alt="">
                </div>
                <div class="title">贷款利率</div>
                <div class="desc">按场景实行差别化风险定价</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="item apply">
                <div class="icon">
                  <img src="https://gd-casicloud.com/images/common/period.png" alt="">
                </div>
                <div class="title">周期灵活</div>
                <div class="desc">还款方式灵活多样</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
  <!-- 直播推荐 -->
  <div class="live-box server_section">
    <div class="container video-live">
      <div class="model-title wow slideInUp live-title" data-wow-delay=".1s">
        <div class="img"></div>
      </div>
      <div class="live-info">
        <div class="info-item">
          <div class="label">
            时间：
          </div>
          <div class="val">
            2023-03-01 ~ 2023-3-12
          </div>
        </div>
        <div class="info-item">
          <div class="label">
            直播间：
          </div>
          <div class="val">
            零食缤纷季
          </div>
        </div>
        <div class="info-item">
          <div class="label">
            推荐商品：
          </div>
          <div class="val">
            白砂糖、菠萝啤、周黑鸭、王老吉...
          </div>
        </div>
        <div class="live-btn">观看直播</div>
        <div class="live-banner"></div>
        <div class="live-code">
          <div class="img"></div>
          <div class="tips">打开微信扫一扫观看直播</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 合作伙伴 -->
  <div class="portfolio bg-primary-light pb-85 section">
    <div class="container">
      <div class="model-title wow slideInUp partner-title">
        <div class="img"></div>
      </div>
      <div class="row">
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card shadow="hover">
              <div class="portfolio-item mb-4 text-center rounded bg-shadow item-common wow fadeInUp">
                <a class="img-box" target="_blank" href="http://www.gdeaac.com/">
                  <img src="@/assets/images/logo1.png" alt="portfolio-image" class="img-fluid">
                </a>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <div class="portfolio-item mb-4 text-center rounded bg-shadow item-common wow fadeInUp"
                data-wow-duration="1500ms" data-wow-delay="300ms">
                <a class="img-box" target="_blank" href="http://www.recon-china.com/">
                  <img src="@/assets/images/logo2.png" alt="portfolio-image" class="img-fluid">
                </a>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <div class="portfolio-item mb-4 text-center rounded bg-shadow item-common wow fadeInUp"
                data-wow-duration="1500ms" data-wow-delay="400ms">
                <a class="img-box" target="_blank" href="http://www.jointt.com/">
                  <img src="@/assets/images/logo3.png" alt="portfolio-image" class="img-fluid">
                </a>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <div class="portfolio-item mb-4 text-center rounded bg-shadow item-common wow fadeInUp"
                data-wow-duration="1500ms" data-wow-delay="500ms">
                <a class="img-box" target="_blank" href="http://www.hmsugar.com/gsjj/">
                  <img src="@/assets/images/logo4.png" alt="portfolio-image" class="img-fluid">
                </a>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="hover">
            <div class="portfolio-item mb-4 text-center rounded bg-shadow item-common wow fadeInUp"
              data-wow-duration="1500ms" data-wow-delay="100ms">
              <a class="img-box" target="_blank" href="http://www.citicbank.com/gz/">
                <img src="@/assets/images/logo7.png" alt="portfolio-image" class="img-fluid">
              </a>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <div class="portfolio-item mb-4 text-center rounded bg-shadow item-common wow fadeInUp"
              data-wow-duration="1500ms" data-wow-delay="300ms">
              <a class="img-box" target="_blank" href="http://zbyweb18.anywellchat.com:8888/anywell_zbyww/">
                <img src="@/assets/images/logo8.png" alt="portfolio-image" class="img-fluid">
              </a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
  <!-- 典型用户 -->
  <div class="portfolio bg-primary-light pb-85 section">
    <div class="container">
      <div class="model-title wow slideInUp customer-title" data-wow-delay=".1s">
        <div class="img"></div>
      </div>
      <div class="row">
        <div class="item-common">
          <el-row :gutter="24">
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/2.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/3.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/4.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/5.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="row">
        <div class="item-common">
          <el-row :gutter="24">
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/6.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/7.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/8.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover"> <a class="img-box" href="#">
                  <img src="@/assets/images/9.png" alt="portfolio-image" class="img-fluid">
                </a>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="footer" spm="index.footer">
      <div class="container" data-animate-options="{'animate':'fadeIn','delay':0}">
        <div class="footer-content row clearfix">
          <div class="col-xs-12 col-sm-3">
            <div class="footer_contact">
              <div>市场商务</div>
              <div>010-88636102</div>
              <i class="market_phone"></i>
            </div>
            <div class="footer_contact">
              <div>客服热线</div>
              <div>020-82000963</div>
              <i class="service_phone"></i>
            </div>
            <div class="footer_contact">
              <div class="footer_contact_address">地址：广东省广州市黄埔区开源大道136号A栋7层</div>
            </div>
            <div class="footer_contact_line"></div>
          </div>
          <div class="footer_content_right">
            <div class="row">
              <el-row :gutter="12">
                <el-col :span="6">
                  <div class="footer-item about-us">
                    <div class="footer-title">
                      <span>全国站点</span>
                    </div>
                    <ul class="footer-link-list">
                      <li>
                        <a target="_blank" href="http://www.casicloud.com" spm="market.footer_casicloud.view">
                          航天云网平台
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="http://www.jxicloud.com/" spm="market.footer_jxcasicloud.view">
                          江西航天云网平台
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="http://www.gz-icloud.com.cn/" spm="market.footer_gzcasicloud.view">
                          贵州航天云网平台
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="http://xiaogan.casicloud.com/" spm="market.footer_xgcasicloud.view">
                          孝感航天云网平台
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="http://ah.casicloud.com" spm="market.footer_awIndustrialcloud.view">
                          安徽工业云
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="http://www.nmggyy.com/" spm="market.footer_nmgIndustrialcloud.view">
                          内蒙古工业云
                        </a>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="footer-item quick-link">
                    <div class="footer-title">
                      <span>快速链接</span>
                    </div>
                    <ul class="footer-link-list">
                      <li>
                        <a target="_blank" href="http://www.yqscpt.com" spm="market.footer_yqscpt.view">
                          央企双创平台
                        </a>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="footer-item service">
                    <div class="footer-title">
                      <span>客户服务中心</span>
                    </div>
                    <ul class="footer-link-list">
                      <li>
                        <a target="_blank" href="http://kf.casicloud.com/question.html" spm="market.footer_problem.view">
                          常见问题
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="/main/docs" spm="market.footer_userhelp.view">
                          用户手册
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="http://kf.casicloud.com/contact.html" spm="market.footer_contract.view">
                          在线咨询
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="http://core.casicloud.com/cloud/tenant/tenantInfo/certification.ht"
                          spm="market.footer_certification.view">
                          企业认证
                        </a>
                      </li>
                      <li>
                        <a target="_blank"
                          href="http://core.casicloud.com/busiSub/incrementService/cloudBusisubResour/business.ht"
                          spm="market.footer_cloudbusisubresour.view">
                          商机订阅
                        </a>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="footer-item">
                    <div class="footer-title">
                      <span>关于我们</span>
                    </div>
                    <ul class="footer-contact-list">
                      <li class="hidden-xs">
                        <a target="_blank" href="/cooperate" spm="market.footer_joinus.view">
                          加入我们
                        </a>
                      </li>
                      <li class="hidden-xs">
                        <a target="_blank" href="/introduction/zhizaoyun" spm="market.platform_introduction">
                          平台介绍
                        </a>
                      </li>
                      <li class="hidden-xs">
                        <a target="_blank" href="/map.html" spm="market.applist.entry_index">
                          网站导航
                        </a>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="footer-item">
                    <div class="footer-title">
                      <span>航天云网APP</span>
                    </div>
                    <div class="footer-qrcode" spm="market.casicloud_app">
                      <img src="https://gd-casicloud.com/images/supplychain/htyw_app.png" alt="航天云网APP" />
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="footer-item">
                    <div class="footer-title">
                      <span>关注航天云网</span>
                    </div>
                    <div class="footer-qrcode" spm="market.attention_casicloud">
                      <img src="https://gd-casicloud.com/images/supplychain/htyw_ewm.png" alt="关注航天云网" />
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="footer-links hidden-xs">
          <div class="az-horizontal-group">
            <div class="mini">
              <span>友情链接</span>
            </div>
            <div class="plus">
              <ul class="az-inline-block-list footer-link-list">
                <li>
                  <a href="http://www.gov.cn" target="_blank" spm="market.footer_shiplinks_gov.view">
                    中国政府网_中央人民政府门户网站
                  </a>
                </li>
                <li>
                  <a href="http://www.ndrc.gov.cn" target="_blank" spm="market.footer_shiplinks_ndrc.view">
                    中华人民共和国国家发展和改革委员会（国家发改委）
                  </a>
                </li>
                <li>
                  <a href="http://www.miit.gov.cn" target="_blank" spm="market.footer_shiplinks_miit.view">
                    中华人民共和国工业和信息化部（工业和信息化部）
                  </a>
                </li>
                <li>
                  <a href="http://www.mofcom.gov.cn" target="_blank" spm="market.footer_shiplinks_mofcom.view">
                    中华人民共和国商务部（商务部）
                  </a>
                </li>
                <li>
                  <a href="http://www.gd.gov.cn" target="_blank" spm="market.footer_shiplinks_gd.view">
                    广东省人民政府门户网站
                  </a>
                </li>
                <li>
                  <a href="http://gdii.gd.gov.cn" target="_blank" spm="market.footer_shiplinks_gdii.view">
                    广东省工业和信息化厅
                  </a>
                </li>
                <li>
                  <a href="http://www.gz.gov.cn" target="_blank" spm="market.footer_shiplinks_gz.view">
                    广州市人民政府门户网站
                  </a>
                </li>
                <li>
                  <a href="http://www.hp.gov.cn" target="_blank" spm="market.footer_shiplinks_hp.view">
                    广州市黄埔区人民政府、广州开发区管委会
                  </a>
                </li>
                <li>
                  <a href="http://gdstc.gd.gov.cn" target="_blank" spm="market.footer_shiplinks_gdstc.view">
                    广东省科学技术厅
                  </a>
                </li>
                <li>
                  <a href="http://www.ca800.com" target="_blank" spm="market.footer_shiplinks_ca800.view">
                    中国自动化网
                  </a>
                </li>
                <li>
                  <a href="http://www.cechina.cn/" target="_blank" spm="market.footer_shiplinks_cechina.view">
                    控制工程网
                  </a>
                </li>
                <li>
                  <a href="http://www.eeworld.com.cn/" target="_blank" spm="market.footer_shiplinks_eeworld.view">
                    电子工程世界
                  </a>
                </li>
                <li>
                  <a href="http://www.gkong.com/" target="_blank" spm="market.footer_shiplinks_gkong.view">
                    中华工控网
                  </a>
                </li>
                <li>
                  <a href="http://www.mechnet.com.cn/" target="_blank" spm="market.footer_shiplinks_.mechnet.view">
                    中国机械专家网
                  </a>
                </li>
                <li>
                  <a href="http://www.chinajungong.com" target="_blank" spm="market.footer_shiplinks_.chinajungong.view">
                    中国军工网
                  </a>
                </li>
                <li>
                  <a href="http://product.11467.com/jixie" target="_blank" spm="market.footer_shiplinks_jixie.view">
                    机械设备
                  </a>
                </li>
                <li>
                  <a href="http://www.cntronics.com/" target="_blank" spm="market.footer_shiplinks_cntronics.view">
                    电子元件技术网
                  </a>
                </li>
                <li>
                  <a href="http://www.fyjs.casic.cn" target="_blank" spm="market.footer_shiplinks_fyjstwo.view">
                    中国航天科工二院
                  </a>
                </li>
                <li>
                  <a href="http://www.fhjs.casic.cn" target="_blank" spm="market.footer_shiplinks_fhjsthree.view">
                    中国航天科工三院
                  </a>
                </li>
                <li>
                  <a href="http://www.aerosun.cn" target="_blank" spm="market.footer_shiplinks_aerosun.view">
                    航天晨光股份公司
                  </a>
                </li>
                <li>
                  <a href="http://www.aisino.com" target="_blank" spm="market.footer_shiplinks_aisino.view">
                    航天信息股份公司
                  </a>
                </li>
                <li>
                  <a href="http://www.cnnsr.com.cn/" target="_blank" spm="market.footer_shiplinks_cnnsr.view">
                    纳税服务网
                  </a>
                </li>
                <li>
                  <a href="http://www.casic.com.cn" target="_blank" spm="market.footer_shiplinks_casic.view">
                    中国航天科工集团
                  </a>
                </li>
                <li>
                  <a href="http://www.gongkong.com/" target="_blank" spm="market.footer_shiplinks_gongkong.view">
                    中国工控网
                  </a>
                </li>
                <li>
                  <a href="/links.html" target="_blank" spm="market.footer_shiplinks_more.view">
                    更多
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright col-xs-12">
          <ul class="az-inline-block-list">
            <li>
              <span>Copyright&copy;2019航天云网,All Rights Reserved</span>
            </li>
            <li>
              <span>京ICP备16012914号-1 京公网安备11010802022625</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TabsPaneContext } from 'element-plus'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const activeName = ref("first")
const activeName1 = ref("1")
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);

}
</script>

<style>
.flex-grow {
  flex-grow: 1;

}

video {
  width: 100%;
  height: auto;
  overflow: hidden;
  /* margin-top: -100px; */
  margin: 0 -100 auto;
}



.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.news-icon {
  width: 30px;
  height: 30px;
  background: url(https://gd-casicloud.com/images/common/newsIcon.png) no-repeat;
  margin-right: 12px;
}

.news-title {
  width: 121px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/news.png) no-repeat;
  position: relative;
  left: 48px;
  top: -27px;
}

.news-box {
  max-height: 550px;
  overflow-y: hidden;
}

.news-box ul li {
  padding: 0 15px;
  transition: ease 0.3s;
  display: flex;
  list-style: none;
  line-height: 50px;
  margin-bottom: 15px;
  background-color: #f4f7ff;
}

ul li img {
  width: 20px;
  height: 20px;
  margin: 0 6px -5px;

}


.common-icon {
  width: 30px;
  height: 30px;
  background: url(https://gd-casicloud.com/images/common/commonServiceIcon.png) no-repeat;
  margin-right: 12px;
}

.common-title {
  width: 121px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/commonService.png) no-repeat;
  position: relative;
  left: 48px;
  top: -27px;
}

.serve-box .top .search-box {
  position: relative;
  display: flex;
  justify-content: center;
  line-height: 50px;
  width: 100%;
  height: 47px;
}


.serve-box .top .search-box input {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 1px solid #dad9d9;
  padding: 0 30px;
  font-size: 22px;
  width: 85%;
}

.serve-box .top .search-box .search-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #0487f9;
  color: #fff;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  cursor: pointer;
  width: 15%;
}

img {
  width: 20px;
  height: 20px;
}

.serve-box .bot {
  margin-top: 30px;
}

.serve-box .bot .b-top {
  display: flex;
}

.serve-box .bot .b-top .node-management {
  background-color: #f0f3fe;
  width: 350px;
  height: 250px;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 17px rgba(0, 0, 0, 0.07);
  position: relative;
}

.serve-box .bot .b-top .node-management .text {
  position: absolute;
  font-size: 27px;
  font-weight: 600;
  z-index: 10;
  background-color: #18dac9;
  color: #fff;
  padding: 5px 15px;
  white-space: nowrap;
  border-radius: 5px;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ease-in-out 0.3s;
}

.serve-box .bot .b-top .node-management img {
  width: 40px;
  height: 100%;
  position: relative;
  top: 9px;
  right: -3px;
}

.serve-box .bot .b-top .node-management .bg {
  height: 60%;
  width: 60%;
}

.serve-box .bot .b-top .b-top-right {
  width: calc(100% - 400px);
  margin-left: 30px;
  display: flex;
  flex-wrap: wrap;
}

.serve-box .bot .b-top .b-top-right .item {
  width: 154px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px 0px;
  margin: 0 15px 15px 0;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: ease-in-out 0.3s;
}

.serve-box .bot .b-top .b-top-right .item .icon img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.bg-1 {
  background: #2bbcf1
}

.bg-2 {
  background: #0ec2bc
}

.bg-3 {
  background: #8282f9
}

.bg-4 {
  background: #ff6c37
}

.bg-5 {
  background: #11bb85
}

.bg-6 {
  background: #11bb85
}

div {
  display: nones;
}

.serve-box .bot .b-bot {
  display: flex;
  margin-top: 30px;
}

.serve-box .bot .b-bot .item {
  flex: 1;
  border-radius: 15px;
  padding: 15px;
  border: 1px solid #f0f3fe;
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.serve-box .bot .b-bot .item .top {
  line-height: 50px;
  display: flex;
}

.serve-box .bot .b-bot .item .top .icon {
  margin-right: 15px;
}

.serve-box .bot .b-bot .item .icon img {
  width: 40px;
  height: 40px;
}

.serve-box .bot .b-bot .item .top .text {
  font-weight: 600;
}

.serve-box .bot {
  margin-top: 29px;
}

.model-title {
  width: 1200px;
  height: 26px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.method-title .img {
  width: 440px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/solution-title.png) no-repeat;
  margin: 0 auto;
}

.section {
  overflow: hidden;
}

.pb-85 {
  padding-bottom: 85px;
}

.pt-100 {
  padding-top: 100px;
}

.solution {
  width: 1200px;
  height: 779px;
  margin: 0 auto;
}

.solution img {

  width: 1200px;
  height: 779px;
}

.case_box {
  padding-top: 40px;
  background: url(https://gd-casicloud.com/images/common/productService.png) no-repeat center top;
  height: 934px;
}

.product-title .img {
  width: 440px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/product-title.png) no-repeat;
  margin: 0 auto;
}

.product-list-box {
  margin: 0 auto;
  width: 1200px;
  display: flex;
}

.product-tabs {
  width: 172px;
}

.tab-item-select {
  background: #fff;
}

.tab-item {
  height: 89px;
  background: #1978ea;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  cursor: pointer;
}

.icon-select .design-icon {
  background: url(https://gd-casicloud.com/images/common/design-select.png);
}

.tab-item-select .product-name {
  color: white;
}

.product-name {
  margin-left: 8px;
}

.product-icon {
  width: 22px;
  height: 22px;
  margin-left: 36px;
}

.product-content {
  /* width: 631px; */
  flex: 1;
  background: #fff;
  padding: 30px 40px;
  position: relative;
}

.useSys {
  width: 100px;
  height: 30px;
  border: 2px solid #0487f9;
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 16px;
  font-weight: 600;
  color: #0487f9;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  margin-top: 40px;
  position: absolute;
  border-radius: 5px;
  top: -10px;
  right: 50px;
}

.product-service-title {
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #0487f9;
  font-size: 20px;
  margin-bottom: 10px;
}

.product-info {
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333333;
  font-size: 14px;
  width: 100%;
  line-height: 35px;
}

.product-function {
  margin-top: 10px;
}

.info-label {
  font-family: PingFangSC-Medium, PingFang SC;
  font-size: 16px;
  color: #333333;
  font-weight: 600;
}

.product-video {
  width: 397px;
  height: 706px;
}

.supply-icon {
  background: url(https://gd-casicloud.com/images/common/supply.png);
}

.product-icon {
  width: 22px;
  height: 22px;
  margin-left: 36px;
}

.sell-icon {
  background: url(https://gd-casicloud.com/images/common/sell.png);
}

.produce-icon {
  background: url(https://gd-casicloud.com/images/common/produce.png);
}

.equ-icon {
  background: url(https://gd-casicloud.com/images/common/equ.png);
}

.quality-icon {
  background: url(https://gd-casicloud.com/images/common/quality.png);
}

.wms-icon {
  background: url(https://gd-casicloud.com/images/common/wms.png);
}

.energy-icon {
  background: url(https://gd-casicloud.com/images/common/energy.png);
}

.container {
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.supply-title .img {
  width: 440px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/supply-title.png) no-repeat;
  margin: 0 auto;
}

.supply .supply-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.supply .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.supply .title .left {
  display: flex;
  align-items: center;
}

.supply .title .left .line {
  width: 5px;
  height: 30px;
  background-color: #3b82f6;
  margin-right: 8px;
}

.supply .title .right {
  color: #3b82f6;
  padding: 5px 15px;
  border-radius: 25px;
  border: 1px solid #3b82f6;
  cursor: pointer;
}

.supply .nav-box {
  display: flex;
  margin: 15px 0 40px;
}

.supply .nav-box .active {
  border-bottom: 3px solid #3b82f6;
  color: #3b82f6;
}

.supply .nav-box .item {
  width: 60px;
  margin-right: 15px;
  text-align: center;
  padding-bottom: 8px;
  cursor: pointer;
}

.title {
  text-align: center;
  color: #333;
  font-size: 20px;
}

.supply .nav-box {
  display: flex;
  margin: 15px 0 40px;
}

.supply .list-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.supply .list-box .list-item {
  flex: 0 1 47%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e3e3;
}

.supply .list-box .list-item .left {
  width: 350px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.supply .list-box .list-item .right {
  display: flex;
}

.layout_padding {
  padding: 90px 0;
}

.digital_loan_section {
  /* padding: 0; */
  /* background-color: #f3f3f5; */
  position: relative;
  overflow: hidden;
  background: url(https://gd-casicloud.com/images/common/productService.png);
}

.digital_loan_section .container {
  position: relative;
  z-index: 99;
}

.number-title .img {
  width: 489px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/number-title.png) no-repeat;
  margin: 0 auto;
}

.digital_loan_section .row {
  display: flex;
  justify-content: center;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}

.digital_loan_section .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  padding: 15px;
  /* background: transparent; */
  background-color: #fff;
  /* box-shadow: 0 5px 20px #999; */
  cursor: pointer;
  transition: ease 0.3s;
}

.digital_loan_section .item .icon {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.digital_loan_section .item img {
  width: 100%;
  height: 100%;
}

img {
  border: none;
}

.digital_loan_section .title {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

.digital_loan_section .item .desc {
  margin: 10px 0;
  font-size: 16px;
  color: #666666;
}

::v-deep el-card_body {
  margin: 15px 0;
  padding: 15px;
}

.server_section {
  padding: 55px 0;
  color: #000;
  background: url(https://gd-casicloud.com/images/common/video-container.png);
}

.live-box {
  position: relative;
}


.video-live {
  padding-top: 60px;
  height: 800px;
}

.live-title .img {
  width: 440px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/live-title.png) no-repeat;
  margin: 0 auto;
}

.live-info {
  margin-top: 20px;
}

.info-item {
  display: flex;
  margin-bottom: 17px;
}

.live-btn {
  width: 132px;
  height: 40px;
  border: 2px solid #0487f9;
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 16px;
  font-weight: 600;
  color: #0487f9;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  margin-top: 40px;
}

.live-banner {
  width: 324px;
  height: 524px;
  background: url(https://gd-casicloud.com/images/common/live-banner.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 200px;
  right: 480px;
}

.live-code {
  width: 286px;
  height: 286px;
  box-shadow: 0px 0px 10px 0px rgba(196, 196, 196, 0.5);
  border-radius: 8px;
  position: absolute;
  top: 347px;
  right: 678px;
  background: #ffffff;
  z-index: 2;
}

.live-code .img {
  width: 207px;
  height: 207px;
  background: url(https://gd-casicloud.com/images/common/live-code.png) no-repeat;
  margin: 0 auto;
  margin-top: 28px;
}

.live-code .tips {
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333333;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
}

.section {
  overflow: hidden;
}

.pb-85 {
  padding-bottom: 85px;
}

.bg-primary-light {
  background: #f4f7ff;
}

.partner-title .img {
  width: 440px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/partner-title.png) no-repeat;
  margin: 0 auto;
}

.item-common .img-box {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
  transition: ease 0.3s;
}

.item-common .img-box img {
  width: 100%;
  height: 100%;
}

.customer-title .img {
  width: 440px;
  height: 26px;
  background: url(https://gd-casicloud.com/images/common/customer-title.png) no-repeat;
  margin: 0 auto;
}

.item-common .img-box img {
  width: 100%;
  height: 100%;
}

.footer {
  padding-bottom: 40px;
  background-color: #303030;
}

.footer div {
  font-size: 12px;
  color: #999;
}

.footer .footer-content {
  padding-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #474747;
}

.clearfix {
  zoom: 1;
}

.footer_contact {
  padding-left: 50px;
  position: relative;
  margin-top: 10px;
}

.footer_contact>div:nth-child(1) {
  font-size: 14px;
  color: #999;
}

.footer_contact>div:nth-child(2) {
  font-size: 18px;
  color: #fff;
  font-weight: 500;
}


.footer_contact>i {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 0;
}

.footer_contact_line {
  position: absolute;
  width: 1px;
  height: 120px;
  top: 10px;
  right: 0;
  background-color: #474747;
}

.footer .footer_content_right {
  padding-left: 60px;
}

.footer-title span {
  color: #ccc;
  font-weight: 700;
}

.footer-contact-list>li>a {
  color: #999;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.footer .footer_content_right>div>div {
  min-height: 180px;
  margin-bottom: 20px;
}

.footer-title span {
  color: #ccc;
  font-weight: 700;
}

.footer-link-list>li>a {
  color: #999;
}

.footer-qrcode img {
  width: 90px;
  height: 90px;

}

.footer-links {
  padding-top: 40px;
  margin-bottom: 20px;
  text-align: left;
}

.footer-links .az-horizontal-group .mini {
  vertical-align: top;
  width: 8%;
}

.footer-links .az-horizontal-group .mini>span {
  color: #ccc;
  font-weight: 500;
}

ul {
  list-style: none;
}

.footer-links .footer-link-list>li {
  width: auto;
  margin-bottom: 20px;
  margin-right: 20px;
}

ul.az-inline-block-list>li {
  display: inline-block;
}
</style>
