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