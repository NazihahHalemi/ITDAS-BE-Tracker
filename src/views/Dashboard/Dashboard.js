import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Container from '@material-ui/core/Container';
import {Grid, Paper, Box } from '@material-ui/core';
import 'chartjs-plugin-datalabels';
import { Badge, Button,CardTitle,CardText, Card, CardBody, CardFooter, CardHeader,Progress, Col, Form, FormGroup, Label, Row, Input } from 'reactstrap';

const axios = require('axios');

const Summary = (props) => {
    const [allData, setAllData] = React.useState([]);
    const [cardColor, setCardColor] = React.useState('');
    const [barData, setBarData] = React.useState([]);

    useEffect(() => {
        var accessToken = localStorage.getItem('token');
        axios.get('/api/ITD_DASHBOARD_LOB_STAT_BE',{
            headers: {
              Authorization: 'Bearer ' + accessToken //the token is a variable which holds the token
            }
           })
            .then(function (response) {
                console.log('d',response.data);
            
                // handle success
                if (response.data) {
                    setAllData(response.data);
                    makeBar(response.data);
                };
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[]);


    const makeBar = (data) => {
        //console.log('makeBar',data);
        ///data
          var lobData1 = [],
              lobData2 = [],
              lobData3 = [],
              lobData4 = [],
              lobData5 = [],
              lobData6 = [];
        //label
          var lobLabel1 = [],
              lobLabel2 = [],
              lobLabel3 = [],
              lobLabel4 = [],
              lobLabel5 = [],
              lobLabel6 = [];


        data.map((d) => {
          ///data
            lobData1.push(d.LOB);
            lobData2.push(d.COMPLETED);
            // lobData3.push(d.SPACE_AVAILABLE);
            // lobData4.push(d.SPACE_UTILIZED);
            // lobData5.push(d.SPACE_AVAILABLE);
            // lobData6.push(d.SPACE_UTILIZED);
            //label
            lobLabel1.push(d.TOTAL);
            lobLabel2.push(d.OPEN);
            // lobLabel3.push(d.LOCN_NAME);
            // lobLabel4.push(d.SPACE_CAPACITY);
            // lobLabel5.push(d.LOCN_NAME);
            // lobLabel6.push(d.SPACE_CAPACITY);
        });

        const arbitraryStackKey = "stack"; /**to make stack bar */

        const state = {
            labels: lobLabel1,
            datasets: [
                {
                    stack: arbitraryStackKey,
                    label: lobLabel1,
                    indexLabel: lobLabel2,
                    backgroundColor: 'rgba(0, 20, 187)',
                    data: lobData1
                  },
                  {
                    stack: arbitraryStackKey,
                    label: lobLabel2,
                    backgroundColor: 'rgba(248, 111, 27)',
                    data: lobData2   
                  }
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
               color: 'white',
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
                <h2>SUMMARY OF BE BASED ON STATUS, LOBS AND NUMBERS OF BE</h2>
                <Bar 
                    data={barData} 
                    options={options}
                />
            </Grid>
         </Container>);
}
export default Summary;