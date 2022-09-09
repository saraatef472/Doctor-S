document.getElementById('head').onclick = function() {
    location.href = "sy/sy.html";
}
document.getElementById('neck').onclick = function() {
    location.href = "sy/sy.html";
}
document.getElementById('chest').onclick = function() {
    location.href = "chest/chest.html";

}
document.getElementById('hand').onclick = function() {
    location.href = "arm/aarm.html";
}
document.getElementById('handd').onclick = function() {
    location.href = "arm/aarm.html";
}
document.getElementById('ABDOMEN').onclick = function() {
    location.href = "sto/sto.html";
}
document.getElementById('PELVIS').onclick = function() {
    location.href = "https://www.w3schools.com/tags/tag_link.asp";
}
document.getElementById('LEG1').onclick = function() {
    location.href = "legg/leg.html";
}
document.getElementById('LEG2').onclick = function() {
    location.href = "legg/leg.html";
}
document.getElementById('head2').onclick = function() {
    location.href = "sy/sy.html";
}
document.getElementById('neck2').onclick = function() {
    location.href = "sy/sy.html";
}
document.getElementById('hand3').onclick = function() {
    location.href = "arm/aarm.html";
}
document.getElementById('hand4').onclick = function() {
    location.href = "arm/aarm.html";
}
document.getElementById('back').onclick = function() {
    location.href = "back/back.html";
}
document.getElementById('butt').onclick = function() {
    location.href = "https://www.w3schools.com/tags/tag_link.asp";
}
document.getElementById('leg3').onclick = function() {
    location.href = "legg/leg.html";
}
document.getElementById('leg4').onclick = function() {
    location.href = "legg/leg.html";
}




svg.selectAll('.polygon')
    .data(scaledData)
    .enter()
    .append('svg:path')
    .attr('d', radialLine)
    .attr('stroke', function(d, i) { return colors(i); })
    .attr('stroke-width', '3')
    .attr('fill', 'none')
    .attr('pointer-events', 'visibleStroke')
    .on("mouseover", function(d) {
        d3.select(this).style("fill", d3.select(this).attr('stroke'))
            .attr('fill-opacity', 0.3);
    })
    .on("mouseout", function(d) {
        d3.select(this).style("fill", "none")
            .attr('fill-opacity', 1);
    });





// function RandWeap() {
//     /*Huge function here determining a value and repeating until it
//     is between mindesiredvalue and maxdesiredvalue*/


//     if (document.getElementById("oneee" && "twooo" && "threee").checked == true) {
//         document.getElementById("dwd").innerHTML = "you have ko7a";
//     } else if (document.getElementById("fourrr" && "fiveee").checked == true) {
//         document.getElementById("dwd").innerHTML = "you have mrara";
//     } else if (document.getElementById("oneee" && "fourrr").checked == true) {
//         document.getElementById("dwd").innerHTML = "you have covid";
//     } else {
//         document.getElementById("dwd").innerHTML = "please choose your syn"
//     }

// }