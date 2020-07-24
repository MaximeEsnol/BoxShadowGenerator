export const getBoxShadowFromObject = shadows => {
    let boxShadow = "";

    shadows.forEach( ( shadow, index ) => {
        boxShadow += ( shadow.inset ) ? "inset " : "";
        boxShadow += shadow.offsetX + "px ";
        boxShadow += shadow.offsetY + "px ";
        boxShadow += shadow.blurRadius + "px ";
        boxShadow += shadow.spreadRadius + "px ";
        boxShadow += shadow.color;
        boxShadow += ( index + 1 < shadows.length ) ? "," : ""
    } );

    return boxShadow;
}

export const stringToRgbObject = rgb => {
    let colors = rgb.substring( rgb.indexOf("(") + 1, rgb.length - 1 );
    let color = colors.split(",");

    if ( color.length < 3 ) {
        throw new Error("Invalid RGB string.");
    }

    return {
        r: color[0],
        g: color[1],
        b: color[2],
        a: color[3] ?? 1
    }
}

export const DEFAULT_SHADOW = {
    inset: false,
    offsetX: 0,
    offsetY: 4,
    blurRadius: 10,
    spreadRadius: 4,
    color: "rgba(50,50,50,0.30)",

}