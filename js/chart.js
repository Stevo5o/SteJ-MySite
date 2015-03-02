// HTML
var width = 400,
        height = 400;
radius = 200,
        colorsHTML = d3.scale.ordinal()
        .range(['#259286','#738A05']);

var piedata = [
   {
      label: "",
      value: 10
   },
   {
      label: "HTML",
      value: 150
   }
];

var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechartHTML' ).append( 'svg' )
        .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colorsHTML(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr("font-size", "30px")
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})

// CSS

     var colorsCSS = d3.scale.ordinal()
        .range(['#259286','#738A05']);
var piedata = [
   {
      label: "",
      value: 10
   },
   {
      label: "CSS",
      value: 150
   }
];


var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechartCSS' ).append( 'svg' )
        .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colorsCSS(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr("font-size", "30px")
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})

// JS

     var colorsCSS = d3.scale.ordinal()
        .range(['#259286','#738A05']);
var piedata = [
   {
      label: "",
      value: 50
   },
   {
      label: "JS",
      value: 110
   }
];


var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechartJS' ).append( 'svg' )
        .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colorsCSS(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr("font-size", "30px")
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})

// jQuery

     var colorsCSS = d3.scale.ordinal()
        .range(['#259286','#738A05']);
var piedata = [
   {
      label: "",
      value: 60
   },
   {
      label: "jQuery",
      value: 90
   }
];


var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechartJQ' ).append( 'svg' )
        .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colorsCSS(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr("font-size", "30px")
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})

// PHP

     var colorsCSS = d3.scale.ordinal()
        .range(['#259286','#738A05']);
var piedata = [
   {
      label: "",
      value: 50
   },
   {
      label: "PHP",
      value: 110
   }
];


var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechartPHP' ).append( 'svg' )
        .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colorsCSS(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr("font-size", "30px")
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})



// SQL

     var colorsCSS = d3.scale.ordinal()
        .range(['#259286','#738A05']);
var piedata = [
   {
      label: "",
      value: 50
   },
   {
      label: "SQL",
      value: 110
   }
];


var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechartSQL' ).append( 'svg' )
        .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colorsCSS(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr("font-size", "30px")
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})



