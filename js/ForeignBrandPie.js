am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_kelly);
  // Themes end

  /**
   * Define data for each year
   */
  var chartData = {
    "2018": [
      { "sector": "Foreign Brands", "size": 5672, },
      { "sector": "Domestic Brands", "size": 174328 }],
    "2019": [
      { "sector": "Foreign Brands", "size": 22690 },
      { "sector": "Domestic Brands", "size": 197310 }],
    "2020": [
      { "sector": "Foreign Brands", "size": 31766 },
      { "sector": "Domestic Brands", "size": 218234 }]

  };

  // Create chart instance
  var chart = am4core.create("chartdiv5", am4charts.PieChart);

  var label = chart.chartContainer.createChild(am4core.Label);
  label.text = "(Source: Alibaba)";
  label.align = "center";
  label.isMeasured = false;
  label.x = 505;
  label.y = 280;
 
  // Add data
  chart.data = [
    { "sector": "Foreign Brands", "size": 5672 },
    { "sector": "Domestic Brands", "size": 174328 }
  ];

  // Add label
  chart.innerRadius = 80;
  var label = chart.seriesContainer.createChild(am4core.Label);
  label.text = "2018";
  label.horizontalCenter = "middle";
  label.verticalCenter = "middle";
  label.fontSize = 50;

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "size";
  pieSeries.dataFields.category = "sector";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // Animate chart data
  var currentYear = 2018;
  function getCurrentData() {
    label.text = currentYear;
    var data = chartData[currentYear];
    currentYear++;
    if (currentYear > 2020)
      currentYear = 2018;
    return data;
  }

  var title = chart.titles.create();
  title.text = "Growing Proportion of Foreign Brands (Alibaba)";
  title.fontSize = 20;
  title.marginTop = 20;
  title.marginBottom = 20;

  function loop() {
    //chart.allLabels[0].text = currentYear;
    var data = getCurrentData();
    for (var i = 0; i < data.length; i++) {
      chart.data[i].size = data[i].size;
    }
    chart.invalidateRawData();
    chart.setTimeout(loop, 4000);
  }

  loop();

  

}); // end am4core.ready()