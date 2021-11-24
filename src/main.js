import {createApp} from 'vue'
import App from './App.vue'
import "./styles/main.css"

console.log('hi!');

/*
document.addEventListener('message', e => {
    // TODO: Put this in the module lifecycle
    console.log('got a message from parent')
    if (e.origin !== 'http://localhost') {
        console.error(`Received a message from an unexpected source: ${e.origin}`);
        return;
    }

    let [event] = e.data;

    console.log(`Received ${e.data} from ${e.origin}`)
    if (event === 'parentReady') {
        const myHeight = document.body.clientHeight,
            parentWindow = window.parent;

        console.log(`im iframe and my height is ${myHeight}`);
        parentWindow.postMessage(['setIframeHeight', myHeight], '*');
    }
})
*/

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        const myHeight = document.getElementsByTagName('html')[0].scrollHeight,
            parentWindow = window.parent;

        console.log(`im iframe and my height is ${myHeight}`);

        console.log(window !== parentWindow);
        // Only post messages if we are embedded somewhere
        if (window !== parentWindow) parentWindow.postMessage(['setIframeHeight', myHeight], 'http://localhost');
    }
}, false)

createApp(App).mount('#app')
