window.onload = () => {
    // 处理所有代码块
    hljs.highlightAll()

    // 获取元素
    const EL_NUMBER_LINE = document.getElementById('number-line')

    // 获取行号
    const LINE = document.getElementById('code').childNodes[0].innerHTML.split('\n').length

    // 添加行号
    for (let n = 1; n <= LINE; n ++ ) {
        let newLine = document.createElement('li')
        let newContent = document.createTextNode(n)

        newLine.appendChild(newContent)
        EL_NUMBER_LINE.appendChild(newLine)
    }
}