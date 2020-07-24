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

export const DEFAULT_SHADOW = {
    inset: false,
    offsetX: 0,
    offsetY: 4,
    blurRadius: 10,
    spreadRadius: 4,
    color: "rgba(50,50,50,0.30)",

}