function addUnderscores(elem) {
    elem.append('_');
}

function extendDogBody() {
    var bodTop = document.querySelector('.body-top');
    addUnderscores(bodTop);

    var bodBot = document.querySelector('.body-bottom');
    addUnderscores(bodBot);
}

var furthestScrollX = 0;
window.onload = function() {
    for (var i = 0; i < 1000; i++) {
        extendDogBody();
    }

    furthestScrollX = window.scrollX;
};

const scrollDistance = 25;

window.onscroll = function(ev) {
    // only append if we've scrolled a sizable
    // amount to the right
    if (window.scrollX < (furthestScrollX + scrollDistance)) {
        console.log(window.scrollX);
        return;
    }
    furthestScrollX = window.scrollX;

    for (var i = 0; i < scrollDistance; i++) {
        extendDogBody();
    }
}
