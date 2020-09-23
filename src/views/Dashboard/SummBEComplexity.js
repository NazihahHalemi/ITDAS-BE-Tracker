import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Container from '@material-ui/core/Container';
import {Grid, Paper, Box } from '@material-ui/core';
import 'chartjs-plugin-datalabels';
import { Badge, Button,CardTitle,CardText,Table, Card, CardBody, CardFooter, CardHeader,Progress, Col, Form, FormGroup, Label, Row, Input } from 'reactstrap';

const axios = require('axios');

const Summary = (props) => {
    const [allData, setAllData] = React.useState([]);
    const [cardColor, setCardColor] = React.useState('');
    const [barData, setBarData] = React.useState([]);

    useEffect(() => {
        var accessToken = localStorage.getItem('token');
        axios.get('/api/ITD_DASHBOARD_LOB_BE_MDY_CAT',{
            headers: {
              Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
            }
           })
            .then(function (response) {
                console.log('d',response.data.data);
            
                // handle success
                if (response.data) {
                    setAllData(response.data.data);
                    makeBar(response.data.data);
                };
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[]);


    const makeBar = (data) => {
        console.log('makeBar',data);
        ///data
          var Data = [],
              Data2 = [],
              Data3 = [],
              Data4 = [],
              Data5 = [],
              Data6 = [];
        //label
          var LabelX = [],
              LabelY =['LOW','MEDIUM','COMPLEX'],
              LabelY1 = [],
              LabelY2 = [],
              LabelY3 = [];


        data.map((d) => {
          console.log('data',d.LOB);
          ///data
            Data.push(d.LOB);
           
            //label
            LabelX.push(d.TOTAL);
            LabelY1.push(d.SIMPLE);
            LabelY2.push(d.MEDIUM);
            LabelY3.push(d.COMPLEX);
           
        });

        const arbitraryStackKey = "stack"; /**to make stack bar */

        const state = {
            labels: LabelY,
            datasets: [
                {
                    stack: arbitraryStackKey,
                    label: Data[0],
                    indexLabel: LabelX,
                    backgroundColor: 'rgba(0, 20, 187)',
                    data: LabelY1,LabelY2,LabelY3
                  },
                  {
                    stack: arbitraryStackKey,
                    label: Data[1],
                    //indexLabel: Data[1],
                    backgroundColor: 'rgba(248, 111, 27)',
                    data: LabelY2
                  },
                  {
                    stack: arbitraryStackKey,
                    label: Data[2],
                    //indexLabel: Data[2],
                    backgroundColor: 'rgba(22, 160, 133)',
                    data: LabelY3
                  },
                  {
                    stack: arbitraryStackKey,
                    label: Data[3],
                    //indexLabel: Data[3],
                    backgroundColor: 'rgba(118, 68, 138)',
                    data: LabelY1
                  },
                  {
                    stack: arbitraryStackKey,
                    label: Data[4],
                    //indexLabel: Data[4],
                    backgroundColor: 'rgba(133, 193, 233)',
                    data: LabelY2
                  },
                  {
                    stack: arbitraryStackKey,
                    label: Data[5],
                    //indexLabel: Data[5],
                    backgroundColor: 'rgba(246, 232, 59 )',
                    data: LabelY3
                  },
                  {
                    stack: arbitraryStackKey,
                    label: Data[6],
                    //indexLabel: Data[6],
                    backgroundColor: 'rgba(252, 146, 209 )',
                    data: LabelY1
                  },
                //   {
                //     stack: arbitraryStackKey,
                //     label: 'RRM',
                //     backgroundColor: 'rgba(248, 111, 27)',
                //     data: LabelY2   
                //   }
                // {
                //     label: 'Available DC Space (sqft)',
                //     backgroundColor: 'rgba(0, 20, 187)',
                //     borderColor: 'rgba(255,99,132,1)',
                //     borderWidth: 1,
                //     //hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                //     //hoverBorderColor: 'rgba(255,99,132,1)',
                //     data: spaceData
                // },
                // {
                //     label: 'Utilize DC Space (sqft)',
                //     backgroundColor: 'rgba(248, 111, 27)',
                //     borderColor: 'rgba(255,99,132,1)',
                //     borderWidth: 1,
                //     //hoverBackgroundColor: 'rgba(182, 248, 115)',
                //     //hoverBorderColor: 'rgba(255,99,132,1)',
                //     data: spaceData2
                // }
            ]
        };
        setBarData(state);

    }

    const options = {
        scales: {
             xAxes: [{
                 stacked: true,
             }],
             yAxes: [{
                 stacked: true,
                 index: true
             }]
         },
         plugins: {/**display label inside bar */
            datalabels: {
               display: true,
               color: 'black',
            }
         },
         animation: {
            duration: 0,
            // onComplete: function () {
            //     var ctx = props.chart.ctx;
            //     ctx.font = props.Chart.helpers.fontString(props.Chart.defaults.global.defaultFontFamily, 'normal', props.Chart.defaults.global.defaultFontFamily);
            //     ctx.fillStyle = "black";
            //     ctx.textAlign = 'center';
            //     ctx.textBaseline = 'bottom';
        
            //     this.data.datasets.forEach(function (dataset)
            //     {
            //         for (var i = 0; i < dataset.data.length; i++) {
            //             for(var key in dataset._meta)
            //             {
            //                 var model = dataset._meta[key].data[i]._model;
            //                 ctx.fillText(dataset.data[i], model.x, model.y - 5);
            //             }
            //         }
            //     });
            // }
          },
     }
    
    return (<Container>
            <Grid container>
                <h2>SUMMARY OF BE BY BE COMPLEXITY</h2>
                <Bar 
                    data={barData} 
                    options={options}
                />
            </Grid>
            <Grid container>
                <div></div>
                <Card>
                    {/* <CardHeader>
                                <i className="fa fa-align-justify"></i>
                                Simple Table
                            </CardHeader> */}
                            <CardBody>
                                <Table  hover bordered striped responsive size="sm">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>LOW</th>
                                            <th>MEDIUM</th>
                                            <th>COMPLEX</th>
                                            <th>TABLE</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                           allData ? allData
                                                .map(
                                                    (data) => 
                                                    <tr>
                                                        <td>
                                                            {data.LOB}

                                                        </td>
                                                        <td>
                                                            {data.SIMPLE}

                                                        </td>
                                                        <td>
                                                            {data.MEDIUM}

                                                        </td>
                                                        <td>

                                                            {data.COMPLEX}

                                                        </td>
                                                        <td>

                                                            {data.TOTAL}

                                                        </td>
                                                    </tr>

                                                ) : ""

                                        }

                                    </tbody>
                 </Table>
                 </CardBody>
                 </Card>
            </Grid>
         </Container>);
}
export default Summary;