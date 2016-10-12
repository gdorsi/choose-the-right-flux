import hljs from '../lib/highlight';

export default (elements) => {
    let i = 0;

    while (i < elements.length) {
        hljs.highlightBlock(elements[i]);
        i++;
    }
}