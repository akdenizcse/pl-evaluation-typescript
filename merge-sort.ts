let mergeSort = (arr: any[]) => {
    let length: number = arr.length;

    if (length < 2) return arr;

    let middle = (length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

let merge = (left: any[], right: any[]) => {
    let result = [];

    while (left.length && right.length) {
        left[0] <= right[0] ?
            result.push(left.shift()) :
            result.push(right.shift());
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
}