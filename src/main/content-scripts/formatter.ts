function updateBackgroundColorAndTextColor( element: HTMLElement ) {

    if( element.style ) {
        element.setAttribute('style', 'background-color: #333 !important; color: #ccc !important;');
    }

    const children = element.childNodes;
    for( const child of children ) {
        updateBackgroundColorAndTextColor( child as HTMLElement );
    }

}

function doFormat() {
    updateBackgroundColorAndTextColor( document.body );
}
