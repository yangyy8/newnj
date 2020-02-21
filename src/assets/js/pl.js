const menu=[
  {
    mc:"预警研判",
    dm:"1",
    icon:"el-icon-location",
    children:[
      {
        mc:"预警",
        dm:"1-1",
        children:[
          {
            mc:"临住预警",
            dm:"1-1-1",
            children:[
              {
                mc:"临住布控预警",
                dm:"1-1-1-1",
                url:"ZBKYJ"
              },
            ]
          },
          {
            mc:"留学生预警",
            dm:"1-1-2",
            children:[
              {
                mc:"留学生信息管理预警",
                dm:"1-1-2-1",
                url:"LXSXXGLYJ"
              },
              {
                mc:"教育厅招生预警、审核",
                dm:"1-1-2-2",
                url:"JYTZSYJ"
              },
              {
                mc:"留学生录取未报到预警",
                dm:"1-1-2-3",
                url:"LXSWBDYJ"
              },
              {
                mc:"202表突发增量预警",
                dm:"1-1-2-4",
                url:"202TFZLYJ"
              },
              {
                mc:"在校学生突发增量预警",
                dm:"1-1-2-5",
                url:"ZXSTFZLYJ"
              },
            ]
          },
          {
            mc:"案事件预警",
            dm:"1-1-3",
            children:[
              {
                mc:"外国人非法居留visa预警",
                dm:"1-1-3-1",
                url:"WGRFFJLYJ"
              },
              {
                mc:"持短期签证非法就业预警",
                dm:"1-1-3-2",
                url:"DQQZFFJYYJ"
              },
              {
                mc:"违临预判预警",
                dm:"1-1-3-3",
                url:"WLYPYJ"
              },
            ]
          },
        ]
      },
      {
        mc:"研判",
        dm:"1-2",
        children:[
          {
            mc:"临住研判",
            dm:"1-2-1",
            children:[
              {
                mc:"临住信息综合分析",
                dm:"1-2-1-1",
                url:"LZXXZHFX"
              },
            ]
          },
          {
            mc:"常住研判",
            dm:"1-2-2",
            children:[
              {
                mc:"常住境外人员综合分析",
                dm:"1-2-2-1",
                url:"CZJWZHFX"
              },
              {
                mc:"难民和寻求庇护者分析",
                dm:"1-2-2-2",
                url:"NMFX"
              },
            ]
          },
          {
            mc:"留学生研判",
            dm:"1-2-3",
            children:[
              {
                mc:"留学生散居社会面分析",
                dm:"1-2-3-1",
                url:"LXSSJFX"
              },
            ]
          },
        ]
      }
    ]
  },
  {
    mc:"业务操作",
    dm:"2",
    icon:"el-icon-menu",
    children:[
      {
        mc:"临住信息",
        dm:"2-1",
        children:[
          {
            mc:"出入境记录核查",
            dm:"2-1-1",
            url:"CRJJLHC"
          },
        ]
      },
      {
        mc:"数据导入",
        dm:"2-2",
        children:[
          {
            mc:"留学生录入未报到信息导入",
            dm:"2-2-1",
            url:"LXSWBDDR"
          },
          {
            mc:"难民和寻求庇护者数据采集",
            dm:"2-2-2",
            url:"NMSJCJ"
          },
          {
            mc:"临住布控人员导入",
            dm:"2-2-3",
            url:"LZBKRYDR"
          },
        ]
      }
    ]
  },
  {
    mc:"系统管理",
    dm:"3",
    icon:"el-icon-setting",
    children:[
      {
        mc:"用户权限",
        dm:"3-1",
        children:[
          {
            mc:"用户管理",
            dm:"3-1-1",
            url:"YHGL"
          },
          {
              mc:"角色管理",
              dm:"3-2-1",
              url:"JSGL"
          },
          {
              mc:"功能授权",
              dm:"3-2-1",
              url:"GNSQ"
          },
          {
              mc:"用户授权",
              dm:"3-2-1",
              url:"YHSQ"
          },
        ]
      },
      {
        mc:"日志查看",
        dm:"3-2",
        children:[

        ]
      }
    ]
  },
];
const tableData=[{
  date: '2016-05-02',
  name: '王小虎',
  address: 'XXXXX'
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: 'XXXXX'
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: 'XXXXX'
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: 'XXXXX'
}];
const ps=[{
    value: 10,
    label: "10"
  },
  {
    value: 20,
    label: "20"
  },
  {
    value: 30,
    label: "30"
  }
];
const pstt=[{
    value: 10,
    label: "10"
  },
  {
    value: 30,
    label: "30"
  },
  {
    value: 50,
    label: "50"
  },
  {
    value: 100,
    label: "100"
  },
];
export default
{
	menu,tableData,ps
}
