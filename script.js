$(function () {
    window.addEventListener("keydown", keydown)
    var command = ['o', 'k', 'Enter']
    var n = 0
    var ifrm;

    function keydown(e) {
        console.log(e.key)
        console.log(n)
        if (e.key == command[n]) {
            n++
        } else {
            n = 0
        }
        if (n >= 3) {
            n = 0
            ifrm = $('div.Cl > iframe')[0].contentWindow.document;
            var callbacks = $.Callbacks()
            callbacks.add(test)
            callbacks.add(enter)
            callbacks.add(clear_div)
            callbacks.fire()
        }
    }

    function test() {
        $('div.editable', ifrm)[0].focus();
        $('div.editable', ifrm)[0].innerHTML = '承知しました。引き続きよろしくお願いいたします。'
    }

    function enter() {
        // 動かない
        var ev = ifrm.createEvent('KeyboardEvent');
        ev.initKeyboardEvent('keydown', true, true, window, false, false, false, false, 13, 0);
        $('div.editable')[0].dispatchEvent(ev);
        $('div.editable', ifrm)[0].dispatchEvent(ev);
    }

    function clear_div() {
        $('div.editable', ifrm)[0].innerHTML = null
    }
})