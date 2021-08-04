let _colors=new WeakMap();

class resistor{

    constructor(){
        _colors.set(this, ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']);
    }

    getColorCode(...values){

        let output="",value0=0,value1=0;

        if (values.length === 0 || (Array.isArray(values[0]) && values[0].length === 0))
            throw new Error("No color code is assgined! ");


        if(values.length === 1 && !Array.isArray(values[0])){

            if( typeof values[0] !== "string" ) throw new Error("Colors should be in a String form! ");

            values[0]=values[0].toLowerCase();

            value0=_colors.get(this).indexOf(values[0]);

            if(value0 < 0) throw new Error("Color code doesn't exist! ");
            output =`${value0}`;
        }


        else if (Array.isArray(values[0]) && values[0].length === 1){
            if( typeof values[0][0] !== "string" ) throw new Error("Colors should be in a String form! ");
            
            values[0][0]=values[0][0].toLowerCase();
            
            value0=_colors.get(this).indexOf(values[0][0]);
            
            if(value0 < 0) throw new Error("Color code doesn't exist! ");
            output =`${value0}`;
        }


        else if(Array.isArray(values[0])) {
            if( (typeof values[0][0] !== "string") || (typeof values[0][1] !== "string")) throw new Error("Colors should be in a String form! ");
            
            values[0][0]=values[0][0].toLowerCase();
            values[0][1]=values[0][1].toLowerCase();

            value0=_colors.get(this).indexOf(values[0][0]);
            value1=_colors.get(this).indexOf(values[0][1]);
            
            if(value0<0 || value1<0) throw new Error("Color code doesn't exist! ");

            output =`${value0} ${value1}`;
        }


        else {
            if( (typeof values[0] !== "string") || (typeof values[1] !== "string")) throw new Error("Colors should be in a string form! ");
            
            values[0]=values[0].toLowerCase();
            values[1]=values[1].toLowerCase();

            value0=_colors.get(this).indexOf(values[0]);
            value1=_colors.get(this).indexOf(values[1]);
            
            if(value0 < 0 || value1 < 0) throw new Error("Color code doesn't exist! ");

            output =`${value0} ${value1}`;
        }


        return output;
    }

    listColorCodes(){
        let output="";
        for (let index in _colors.get(this)){
            output+= ' ' + _colors.get(this)[index] + ':' + index + ',';
        }
        // return `${ _colors.get(this).map(_colors.get(this) => ${ _colors.get(this)[index]}  } `;
        return output;
    }


}