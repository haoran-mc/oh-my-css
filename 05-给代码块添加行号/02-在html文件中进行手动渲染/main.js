// CODELINE
window.onload = () => {
    const src_container = document.getElementsByClassName('org-src-container');
    const src = document.getElementsByClassName('src');

    for (let i=0, len=src.length|0; i<len; i=i+1|0) {
        let lines = src[i].innerHTML.split('\n').length - 1;
        let div = document.createElement('div');
        div.setAttribute('class', 'code-line');
        let ul = document.createElement('ul');
        src_container[i].insertBefore(div, src[i]);
        div.appendChild(ul);

        for (let n = 1; n <= lines; n ++ ) {
            let newLine = document.createElement('li');
            let number = document.createTextNode(n);

            newLine.appendChild(number);
            ul.appendChild(newLine);
        }
    }
}