function createYearSliderForSearch() {
    noUiSlider.create(slider, {
        start: [1968, curYear],
        step: 1,
        behaviour: 'tap-snap',
        connect: true,
        range: {
            'min': [1968],
            'max': [curYear]
        }
    });
    sliderOnSlide();
    sliderAfterSlide();
    $("#yearIndicator1").show();
}

function sliderOnSlide() {
    slider.noUiSlider.on('update', function (value) {
        let yearFrom = value[0].slice(0, 4);
        let yearTo = value[1].slice(0, 4);
        $("#yearFrom").text(yearFrom + ' – ');
        $("#yearTo").text(yearTo);
    });
}

function sliderAfterSlide() {
    slider.noUiSlider.on('end', function (value) {
        checkSearch();
    });
}

function createYearSliderForTop() {
    noUiSlider.create(slider, {
        start: [1968, curYear],
        step: 1,
        behaviour: 'tap-snap',
        range: {
            'min': [1968],
            'max': [curYear]
        }
    });
    $("#yearIndicator3").show();
}

