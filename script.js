$(document).ready(function() {

    // first collapse
    $('#collapseOne').on('show.bs.collapse', function () {
        $('#collapseOneTitle').css('border-bottom', 'none');
        $('#collapseOneTitle').children('p').css('color', '#0d3693');
        $('#collapseOneArrow').css("border-color", "#3c3c3c");
        $('#collapseOneArrow').toggleClass('flip');
    });
    $('#collapseOne').on('hide.bs.collapse', function () {
        $('#collapseOneArrow').css("border-color", "#d3d3d3");
        $('#collapseOneTitle').children('p').css('color', '#000');
        $('#collapseOneArrow').toggleClass('flip');
        $('#collapseOneTitle').css('border-bottom', '1px solid lightgray');
    });

    // second collapse
    $('#collapseTwo').on('show.bs.collapse', function () {
        $('#collapseTwoTitle').css('border-bottom', 'none');
        $('#collapseTwoTitle').children('p').css('color', '#0d3693');
        $('#collapseTwoArrow').css("border-color", "#3c3c3c");
        $('#collapseTwoArrow').toggleClass('flip');
    });
    $('#collapseTwo').on('hide.bs.collapse', function () {
        $('#collapseTwoTitle').css('border-bottom', '1px solid lightgray');
        $('#collapseTwoTitle').children('p').css('color', '#000');
        $('#collapseTwoArrow').css("border-color", "#d3d3d3");
        $('#collapseTwoArrow').toggleClass('flip');
    });

    // third collapse
    $('#collapseThree').on('show.bs.collapse', function () {
        $('#collapseThreeTitle').css('border-bottom', 'none');
        $('#collapseThreeTitle').children('p').css('color', '#0d3693');
        $('#collapseThreeArrow').css("border-color", "#3c3c3c");
        $('#collapseThreeArrow').toggleClass('flip');
    });
    $('#collapseThree').on('hide.bs.collapse', function () {
        $('#collapseThreeTitle').css('border-bottom', '1px solid lightgray');
        $('#collapseThreeTitle').children('p').css('color', '#000');
        $('#collapseThreeArrow').css("border-color", "#d3d3d3");
        $('#collapseThreeArrow').toggleClass('flip');
    });

    // fourth collapse
    $('#collapseFour').on('show.bs.collapse', function () {
        $('#collapseFourTitle').css('border-bottom', 'none');
        $('#collapseFourTitle').children('p').css('color', '#0d3693');
        $('#collapseFourArrow').css("border-color", "#3c3c3c");
        $('#collapseFourArrow').toggleClass('flip');
    });
    $('#collapseFour').on('hide.bs.collapse', function () {
        $('#collapseFourTitle').css('border-bottom', 'none');
        $('#collapseFourTitle').children('p').css('color', '#000');
        $('#collapseFourArrow').css("border-color", "#d3d3d3");
        $('#collapseFourArrow').toggleClass('flip');
    });


});
