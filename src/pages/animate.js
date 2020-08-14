  const animate = (elem) => {
        elem = document.getElementsByClassName(elem);
        if (elem[0] !== undefined)
            elem = elem[0];
        var offsetTop = elem.offsetTop +2;

        window.scroll({
            top: offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    };

    const getTextWidth = (font,widthParent,text ,padding) => {
        widthParent*= window.innerWidth;
        // re-use canvas object for better performance
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        let fontsize=80;
        for(let i=1;i<250;i++){
            ctx.font = i+"px "+font;
            var metrics = ctx.measureText(text);
            let width = metrics.width;
            if(widthParent>width+padding)
                fontsize =  i;
            else
                break;
        }
        return fontsize;
    };
export {animate,getTextWidth};