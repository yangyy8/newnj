const token='';//this.$store.state.token
const userName='';
const hasEnter=false;
const org="";
const xsd=80;
const type=99;

const indexstate=0;
// const aport="http://192.168.1.101:9420";//正式环境
const aport="api-reporter";//大师网关
// const aport="http://192.168.1.105:9420";//大师
const aport1="api-permission";//大师网关
// const aport1="http://192.168.1.105:9435";//大师
const aport2="api-yewu";//左星海网关
// const aport2="http/://192.168.1.101:9420";//左星海
const aport3="api-yewu";//石飞网关
// const aport3="http://10.0.30.35:9440";//石飞
const aport4="api-yujing";//李文龙 预警
// const aport4="http://192.168.1.105:9440";//李文龙
const aport5="api-yanpan";//李文龙研判
// const aport5="http://10.0.30.47:9438";//李文龙

// const aport6="http://10.33.72.217:9447";//孙
const aport6="http://192.168.3.217:9447";
const aport9="http://192.168.3.217:9444";
// const aport6="es-fenxi";
// const aport7="http://10.33.72.218:9436";//游
const aport7="http://192.168.3.217:9436";
// const aport8="http://10.33.72.144:9438";//中管
const aport8="http://192.168.3.217:9438";

const serviceState=1 //代码已统一


const xyaddress="http://10.33.66.183:8081/map/poi";//坐标地址
const dmall="/data_report/selectDmList"; //加载全部代码
const ssdw="/org/getSelfAndChilds";//所属单位
const gjdq="/service/getRedisDataByDm?tablename=DM_GJDQ";//国家地区
const zjzl="/service/getRedisDataByDm?tablename=DM_ZJZL";//证件种类
const qzzl="/service/getRedisDataByDm?tablename=DM_QZZL";//签证种类
const rjkn="/service/getRedisDataByDm?tablename=DM_RJKA"//入境口岸
const rjsy="/service/getRedisDataByDm?tablename=DM_RJSY"//入境事由
const qfjg="/service/getRedisDataByDm?tablename=DM_QFJG"//签发机关
const pcs="/service/getRedisDataByDm?tablename=DM_PCS"//派出所

const jzlx="/service/getRedisDataByDm?tablename=DM_JZLX"//居住类型
const zsxz="/service/getRedisDataByDm?tablename=DM_ZSXZ"//住所性质,住房类型
const jzzt="/service/getRedisDataByDm?tablename=DM_JZZT"//居住状态
const jzztcz="/service/getRedisDataByDm?tablename=DM_JWRYJZZTLX"//常住综合分析居住状态
const xzqh="/service/getRedisDataByDm?tablename=DM_XZQH"//行政区划
const jtgx="/service/getRedisDataByDm?tablename=DM_JTGX"//家庭关系
const sflx="/service/getRedisDataByDm?tablename=DM_NMSF"//身份类型
const xb="/service/getRedisDataByDm?tablename=DM_XB"//性别
const rjqzzl="/service/getRedisDataByDm?tablename=DM_WGR_QZZL"//入境签证类型
const dwlb="/service/getRedisDataByDm?tablename=JZ_DWLB"//单位类别
const dwxz="/service/getRedisDataByDm?tablename=JZ_DWSX"//单位性质
const zsbg="/service/getRedisDataByDm?tablename=JZ_LGBM"//住宿宾馆
const tlyxq="/service/getRedisDataByDm?tablename=DM_TLYXQ";//停留有效期
const sf="/service/getRedisDataByDm?tablename=DM_JWRYSF";//身份
const clzt="/service/getRedisDataByDm?tablename=DM_CLZT";//处理状态
const clzt1="/service/getRedisDataByDm1?tablename=DM_CLZT&type=1";//处理状态
const shzt="/service/getRedisDataByDm?tablename=DM_SHZT";//审核状态
const sjly="/service/getRedisDataByDm?tablename=DM_SJLY";//数据来源
const tbry="/service/getRedisDataByDm?tablename=dm_tbrylb";//数据来源
const rzfs="/service/getRedisDataByDm?tablename=DM_RZFS";//入住方式(地图用的)
const zflx="/service/getRedisDataByDm?tablename=DM_CZ_ZFXZ";//住房类型（地图用的）
const jzztlx="/service/getRedisDataByDm?tablename=DM_JWRYJZZTLX";//居住状态类型（地图用的）
const xxdm="/service/getRedisDataByDm?tablename=zyxd_xx";//在校学校代码
const erxxdm="/service/getRedisDataByDm?tablename=jyt_xx";//202学校代码
const ymsqzt="/service/getRedisDataByDm?tablename=dm_ymsqzt";//移民申请状态
const ymqzzl="/service/getRedisDataByDm?tablename=dm_ymqzzl";//移民签证种类
const lgyj="/service/getRedisDataByDm?tablename=DM_ZDRY_LGYJ";//重点人员列管依据
const gljb="/service/getRedisDataByDm?tablename=DM_ZDRY_GLJB";//重点人员管理级别
const ymzt="/service/getRedisDataByDm?tablename=DM_YMSQZT"//移民申请状态
const ymzl="/service/getRedisDataByDm?tablename=DM_YMZL"//移民种类
const sldw="/service/getRedisDataByDm?tablename=HX_DWBM"//受理单位
const bzlb="/service/getRedisDataByDm?tablename=HX_BZLB"//办证类别
const sqsy="/service/getRedisDataByDm?tablename=HX_SQSY"//申请事由
const rydylb="/service/getRedisDataByDm?tablename=HX_RYDYLB"//人员地域类别
const sqqzzl="/service/getRedisDataByDm?tablename=HX_SQQZZL"//申请签证种类
const hyzt="/service/getRedisDataByDm?tablename=DM_HYZT"//婚姻状态
const zjxy="/service/getRedisDataByDm?tablename=DM_ZJXY"//宗教信仰
const sqlb="/service/getRedisDataByDm?tablename=HX_SQLB"//申请类别
const swdwclzt="/service/getRedisDataByDm?tablename=DM_CLZT_SWDW"//涉外单位处理状态
const xslb="/service/getRedisDataByDm?tablename=DM_XSLB"//学生类别
const fjclzt="/service/getRedisDataByDm?tablename=dm_clzt_fj"//分局处理状态
const ajlb="/service/getRedisDataByDm?tablename=DM_AJ_AJLBB"//案件类别
const cqlb="/service/getRedisDataByDm?tablename=JZ_AJCQCLCS"//案件处罚结果
const ajxz="/service/getRedisDataByDm?tablename=DM_AJXZ"//案件性质
const sszrq="/service/getRedisDataByDm?tablename=IDF_ORG"//所属责任区
const yjcl1="/service/getRedisDataByDm?tablename=DM_GLYJCLYJ"//留学生市外临住预警、留学生涉恐预警、留学生频繁出入境预警、留学生录取未报到预警，重点国家人员预警，难民和寻求庇护者预警、受理、签发信息核查预警、布控预警使用
const yjcl2="/service/getRedisDataByDm?tablename=DM_AJYJCLYJ"//持短期签证非法就业预警、外国人非法居留预警、公务护照预警
const yjcl3="/service/getRedisDataByDm?tablename=DM_LZHCYJCLYJ"//临住核查类预警使用
const tablists=[];
export default
{
  org,//用户机构代码
  xsd,//相似度
  type,
  indexstate,
  serviceState,
  userName,//用户名
  token,//用户token身份
  hasEnter,//用户登录状态
  aport,//首页
  aport1,//大师
  aport2,//左星海
  aport3,//石飞
  aport4,//李文龙
  aport5,//李文龙
  aport6,
  aport7,aport8,aport9,
  xyaddress,
  gjdq,zjzl,qzzl,rjkn,rjsy,qfjg,pcs,jzlx,zsxz,jzzt,xzqh,jtgx,sflx,xb,rjqzzl,dmall,ssdw,
  dwlb,dwxz,zsbg,tlyxq,sf,tablists,clzt,sjly,rzfs,zflx,jzztlx,xxdm,erxxdm,shzt,tbry,lgyj,gljb,ymzt,ymzl,sldw,ymsqzt,ymqzzl,
  bzlb,sqsy,rydylb,sqqzzl,jzztcz,hyzt,zjxy,sqlb,swdwclzt,xslb,fjclzt,ajlb,cqlb,ajxz,sszrq,yjcl1,yjcl2,yjcl3,clzt1
}
