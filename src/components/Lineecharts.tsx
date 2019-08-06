import React, { useEffect } from 'react';
import echarts from 'echarts'

function LineEcahrts() {
    useEffect(() => {
        let mian : any = document.getElementById('main')
        var myChart = echarts.init(mian);
        myChart.setOption({
            backgroundColor: '#2c343c',
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                show: false
            },
            yAxis: {
                show: false
            },
            series: [{
                name: '销量',
                type: 'pie',
                radius: '40%',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                // 高亮样式。
                emphasis: {
                    itemStyle: {
                        // 高亮时点的颜色。
                        color: 'blue'
                    },
                    label: {
                        show: true,
                        // 高亮时标签的文字。
                        formatter: 'This is a emphasis label.'
                    }
                }  
                // labelLine: {
                //     normal: {
                //         lineStyle: {
                //             color: 'rgba(255, 255, 255, 0.3)'
                //         }
                //     }
                // },
            }]
        });
    })
    return (
        <div id="main" style={{width: '300px', height: '300px'}}></div>
    )
}

export default LineEcahrts;