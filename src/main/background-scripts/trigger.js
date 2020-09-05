chrome.browserAction.onClicked.addListener( ( ) => {

    chrome.tabs.executeScript( {
        code: 'doFormat()'
    } );

} );
