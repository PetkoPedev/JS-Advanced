function solve(area, vol, input) {
    let figures = JSON.parse(input);

    let result = [];

    for (let figure of figures) {
        let objArea = area.call(figure);
        let objVolume = vol.call(figure);
        let output = {
            area: objArea,
            volume: objVolume
        };

        result.push(output);
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
