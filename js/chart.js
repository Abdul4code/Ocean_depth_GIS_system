function create_bar(){
    var context = $('#mycanvas')[0].getContext('2d')
    var data = {
        labels : [1,2,3,4,5,6,7],
        datasets : [{
            label : "Depth",
            data : [40.56255, 35.614515, 60.771651711, 42.4516515, 25.6515615665, 80.65165165, 50.1615561],
            borderWidth: 1,
            borderColor: 'blue',
            backgroundColor: 'blue',
        }] 
    }

    var chart = new Chart(context, {
        type:'bar',
        data: data,
        option: {
        }
    })
}

function create_scatter(){
    var context = $('#mycanvas')[0].getContext('2d')
    var xyValues = [
        {x:50, y:7},
        {x:60, y:8},
        {x:70, y:8},
        {x:80, y:9},
        {x:90, y:9},
        {x:100, y:9},
        {x:110, y:10},
        {x:120, y:11},
        {x:130, y:14},
        {x:140, y:14},
        {x:150, y:15}
      ];
      
      new Chart(context, {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgba(0,0,255,1)",
            data: xyValues
          }]
        },
      });
}

function create_line(){
    var context = $('#mycanvas')[0].getContext('2d')
    var xValues = [50,60,70,80,90,100,110,120,130,140,150];
    var yValues = [7,8,8,9,9,9,10,11,14,14,15];

    new Chart(context, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.1)",
            data: yValues
            }]
        },
    });
}

$(document).ready(function(){

    $(document).on('click', '.switch-plot', function(){
        $('.switch-plot').removeClass('active-chart')
        $(this).addClass('active-chart')
        id = $(this).attr('id')

        if(id == 'line-plot'){
            create_line()
        }else if(id == 'bar-plot'){
            create_bar()
        }else if(id == 'scatter-plot'){
            create_scatter()
        }
    })
    
})