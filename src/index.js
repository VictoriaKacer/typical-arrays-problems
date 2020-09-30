exports.min = function min(array) {
    if (!array) {
        return 0;
    }
    var num = 0,
        count = 0;
    for (var count = array.length, i = count - 1; i >= 0; i--) {
        num = Math.min.apply(Math, array);
    }
    return count ? num : 0;
}

exports.max = function max(array) {
    if (!array) {
        return 0;
    }
    var num = 0,
        count = 0;
    for (var count = array.length, i = count - 1; i >= 0; i--) {
        num = Math.max.apply(Math, array);
    }
    return count ? num : 0;
}

exports.avg = function avg(array) {
    if (!array) {
        return 0;
    }
    var sum = 0,
        count = 0;
    for (var count = array.length, i = count - 1; i >= 0; i--) {
        sum += array[i];
    }
    return count ? sum / count : 0;
}
