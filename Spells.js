// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_STR_CASE} from "./Source/Test/Cases/Scientific.js"
import {FLOAT_STR_CASE} from "./Source/Test/Cases/Floating.js"
import {Matchic} from "./Source/Matchic.js"

class Spell{
    constructor(string){
        //you can access the global state at anytime, but it won't be on the stack so that you can
        //use the variables predicitably. You can have local variables in each iterative state
        //that you can reaccess when it is popped off the stack.

        //when you iterate over a string, it is either qualititative or quantititative
        //When you change the quality of the next step, you should be able to get something
        //specific and go back to the previous quality (like a look ahead) step a state variable
        //from the lookahead
        Spell.prototype.nextLine= this.nextLine;
        Spell.prototype.nextParagraph= this.nextParagraph;
        Spell.prototype.nextSentance=this.nextSentance;
        Spell.prototype.nextInteger=this.nextInteger;
        Spell.prototype.nextFloat=this.nextFloat;
        Spell.prototype.nextScientific=this.nextScientific;
        Spell.prototype.nextOctet=this.nextOctet;
        Spell.prototype.nextHex=this.nextHex;
        Spell.prototype.nextCodeBlock=this.nextCodeBlock;
        Spell.prototype.nextFunction=this.nextFunction;
        Spell.prototype.nextHTML = this.nextHTML;
        Spell.prototype.up=this.up;
        Spell.prototype.iter=this.iter;

        this.globalState = {"subStr": string};
        this.buffer=[];
        this.stateStack=[];
        this.ugly_batch=[];
        this.pushPop;
        this.ugly_itr=0;
        this._next(()=>{}, this.globalState);
        this.Matchic = new Matchic();

    }
    _next(cb, currentState){
        this.pushPop={"batch":this.ugly_batch, 'subStr':currentState['subStr']}
        if(this.ugly_itr){
            this.ugly_itr--;
            this.ugly_batch.push(this.pushPop)
            if (!this.ugly_itr){
                this.stateStack.push({"batch":this.ugly_batch, 'subStr':currentState['subStr']})
                this.ugly_itr=0;
                this.ugly_batch=[];
                console.log("STATE STACK====>", this.stateStack)
            }
        }else{
            if(cb){
                cb(currentState['match'], currentState, this.globalState)
            }
            this.stateStack.push(this.pushPop)
        }

    }

    nextLine(cb){
        //separated by one newline
        var match = new Matchic().nextLine(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextParagraph(cb){
        //separated by two newlines
        var match = new Matchic().nextParagraph(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextSentance(cb){
        //separated by a period
        var match = new Matchic().nextSentance(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextInteger(cb){
        var match = new Matchic().nextInteger(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextFloat(cb){
        var match = new Matchic().nextFloat(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextScientific(cb){
        var match = new Matchic().nextScientific(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextOctet(cb){
        var match = new Matchic().nextOctet(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextHex(cb){
        var match = new Matchic().nextHex(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextCodeBlock(cb, type){
        var match = new Matchic().nextCodeBlock(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }
    nextFunction(cb, type){
        var match = new Matchic().nextFunction(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextChar(cb){
        var match = new Matchic().nextChar(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    nextHTML(){
        var match = new Matchic().nextHTML(this.pushPop["subStr"])
        this._next(cb, {"match":match, "subStr": this.pushPop["subStr"].replace(match, "")})
        return this;
    }

    up(cb){
        //this just pops the currentState off of the stack 
        //(it basically erases the previous nextSomething() 
        //but allows you to keep a global variable)
        this.stateStack.pop()
        console.log("STATE STACK====>", this.stateStack)
        return this;
    }

    iter(n, fn, cb){
        //n is number of iterations
        //fn is function name
        //cb is callback to pass to function name
        
        this.ugly_itr=n;
        for(var i = 0; i<n; i++){
            if(fn=='nextLine'){this.nextLine(cb)}
            else if(fn=='nextParagraph'){this.nextParagraph(cb)}
            else if(fn=='nextSentance'){this.nextSentance(cb)}
            else if(fn=='nextInteger'){this.nextInteger(cb)}
            else if(fn=='nextFloat'){this.nextFloat(cb)}
            else if(fn=='nextScientific'){this.nextScientific(cb)}
            else if(fn=='nextOctet'){this.nextOctet(cb)}
            else if(fn=='nextHex'){this.nextHex(cb)}
            else if(fn=='nextCodeBlock'){this.nextCodeBlock(cb)}
            else if(fn=='nextFunction'){this.nextFunction(cb)}
            else if(fn=='nextHTML'){this.nextHTML(cb)}
        }
        return this;
    }


}



var results = new Spell(FLOAT_STR_CASE).iter(2, 'nextFloat')
