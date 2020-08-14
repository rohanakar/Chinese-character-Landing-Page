    export const animate = (elem) => {
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

    export const getTextWidth = (font,widthParent,text ,padding,increment=5) => {
        // re-use canvas object for better performance
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        let fontsize=12;
        for(let i=12;i<250;i+=increment){
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
