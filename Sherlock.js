import {Finding} from "./Source/Finding.js"
import { MOBY_DICK } from "./Source/Test/Cases/Books/IndividualBooks/MobyDick.js";
import * as assert from "node:assert"

export class Book{
    constructor(string, tools){
        this.string=string;
        this.tools=tools
		this.pages;
		this.book = this.bookify(undefined, string, tools)
    }
    //takes an existing book, or creates a new one
    //takes a string and produces book
    //takes tools object or uses global tools
    bookify(string, book, tools){
		if(!(string&&tools)){
			tools = this.tools
		}
		if(!book){
			book=this.emptyBook();
		}
		
		var page=this.emptyPage();

        if(('lineCount' in tools)&&('delimiter' in tools)){

            var line="";

            for(var i=0; i<string.length; i++){
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for the last push to the queue!
				if(string[i]==tools['delimiter'] && this.lineCount(page)==tools['lineCount']-1){
					line+=string[i];	//adds the delimiter to the string
					this.pushLineToPage(line, page);
					this.pushPageToBook(page, book);
					page=this.emptyPage();
					line="";
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for anything BEFORE THE LAST PUSH TO THE QUEUE!
				}else if(string[i]==tools['delimiter'] && this.lineCount(page)<tools['lineCount']-1){
					line+=string[i];	//adds the delimiter to the string
                    this.pushLineToPage(line, page);
					line="";
				}else{
					line+=string[i];
				}
        	}
			//THIS IS ALWAYS HIDDEN
            this.pushLineToPage(line, page)
			this.pushPageToBook(page, book);
			return book
		}
	}

	printBook(){
		console.log(util.inspect(this.book, {showHidden: true, depth: null, colors: true}))

	}
	pushStringToBook(string, book, tools){
        if(!string && !book){
            throw Error("you need to provide a string and a book");
        }
        if(!tools){
            tools=this.tools
        }
		book=this.bookify(string, book, tools)
        return book
	}

	stringifyBook(book){
        if(!book){

        }
        var string=""
        for (const [pageNumber, page] of Object.entries(book['pages'])) {
            for (const [lineNumber, line] of Object.entries(page['lines'])){
                string+=line
            }
        }    
        return string
    }

	pageCount(){
		return parseInt(this.book['pageCount'])
	}
	lineCount(page){
        return parseInt(page['lineCount']);
    }
	popNPages(n){
		for(var i = 0; i<n; i++){
			this.popPageFromBook()
		}
	}
	
    pushPageToBook(page, book){
        book['pages'][(parseInt(book['pageCount'])+1).toString()]=page
        book['pageCount']=(parseInt(book['pageCount'])+1).toString();
    }
    popPageFromBook(book){
        delete book['pages'][book['pageCount']]; 
        book['pageCount']=(parseInt(book['pageCount'])-1).toString();
    }
	removePagesNtoM(book, n, m){
		assert.equal(m>=n, true);
		console.log("ASSERTION TRUE")
		for (var j = n; j<=m; j++){
			this.removePageN(book, j);
		}
	}

	removePageN(book, n){
		delete book['pages'][n.toString()];
		var tmp = book['pages'][(n+1).toString()];
		delete book['pages'][(n+1).toString()];
		book['pages'][n.toString()]=tmp;
		book['pageCount']=(parseInt(book['pageCount'])-1).toString();
	}

    nextPage(){
		//returns the next page from the begining, class keeps an iterator,
		//but does not remove the page, just gives you the next one
        return 
    }


	matchOnNLines(n){
		//matches on n number of lines from the starting page
	}


    pushLineToPage(line, page){
        page['lines'][(parseInt(page['lineCount'])+1).toString()]=line
        page['lineCount']=(parseInt(page['lineCount'])+1).toString();
    }
    popLineFromPage(page){
        delete page['lines'][page['lineCount']]; 
        page['lineCount']=(parseInt(page['lineCount'])-1).toString();
    }

	nextLine(){

	}

    
	emptyPage(){
		return {'lineCount':'0','lines':{}}
	}
	emptyBook(){
		return {'pageCount':'0','pages':{}}
	}
    
    _pageLookAheadFindandSweep(qindex, page, pindex, regex){
        //this tries to find a match in the page index first,
        //then tries to find a match in the aggregation of the page index
        //and page index +1, etc 

    }

    _findandSweep(qindex, page, pindex, regex){

    }

    _sweep(finding, qindex, pindex){
       
    }

    _next(regex){
        //There is another edge case!!!
        //what happens when a match is not found in the page, but extends over 
        //n number of pages? How many pages do we look ahead?
       
	}
}


export class Sherlock{
    constructor(string, tools){
        Sherlock.prototype.nextLine= this.nextLine;
        Sherlock.prototype.nextParagraph= this.nextParagraph;
        Sherlock.prototype.nextSentance=this.nextSentance;
        Sherlock.prototype.nextInteger=this.nextInteger;
        Sherlock.prototype.nextFloat=this.nextFloat;
        Sherlock.prototype.nextScientific=this.nextScientific;
        Sherlock.prototype.nextOctet=this.nextOctet;
        Sherlock.prototype.nextHex=this.nextHex;
        Sherlock.prototype.nextCodeBlock=this.nextCodeBlock;
        Sherlock.prototype.nextFunction=this.nextFunction;
        Sherlock.prototype.nextHTML = this.nextHTML;
        Sherlock.prototype.up=this.up;
        Sherlock.prototype.iter=this.iter;
        Sherlock.prototype.init=this.init;
        Sherlock.prototype.nextFinding=this.nextFinding;
        this.tools=tools;
        this.string=string;
        //pageQueue can be undefined or an actual queue
        this.pageQueue=this.pagination(string, tools);
        //{'op#':0,'finding':undefined, 'op': 'Sherlock', 'tools':tools, 'page':this.pageQueue[0]}
        this.opStack = [];
        this.Finding = new Finding();

    }
    init(string, tools){

        return this;
    }
	nextPage(){
        return this;
	}

    nextLine(cb, tools){
		
    }

    nextParagraph(cb, tools){
     
    }

    nextSentance(cb, tools){
       
    }

    nextInteger(cb, tools){
       
    }

    nextFloat(cb, tools){
        
    }

    nextScientific(cb, tools){
       
    }

    nextOctet(cb, tools){
       
    }

    nextHex(cb, tools){
       
    }

    nextCodeBlock(type, cb, tools){
        
    }

    nextFunction(type, cb, tools){
        
    }

    nextLiteral(cb, tools){
        
    }
    nextChar(cb, tools){
        
    }

    nextWord(cb, tools){
        
    }

    nextHTML(cb, tools){
        
    }

    nextFinding(cb, tools){

    }

    up(cb){

    }

    iter(n, fn, cb, tools){
        //
        if(n=='inf'){
        }else if(Number.isInteger(n)){
        }else{
            throw Error("n must be of type int or string value 'inf'")
        }
        for(var i = 0; i<this.ugly_itr; i++){
            if(fn=='nextLine'){this.nextLine(cb)}
            else if(fn=='nextParagraph'){this.nextParagraph(cb, tools)}
            else if(fn=='nextSentance'){this.nextSentance(cb, tools)}
            else if(fn=='nextChar'){this.nextChar(cb, tools)}
            else if(fn=='nextWord'){this.nextWord(cb, tools)}
            else if(fn=='nextLiteral'){this.nextLiteral(cb, tools)}
            else if(fn=='nextInteger'){this.nextInteger(cb, tools)}
            else if(fn=='nextFloat'){this.nextFloat(cb, tools)}
            else if(fn=='nextScientific'){this.nextScientific(cb, tools)}
            else if(fn=='nextOctet'){this.nextOctet(cb, tools)}
            else if(fn=='nextHex'){this.nextHex(cb, tools)}
            else if(fn=='nextCodeBlock'){this.nextCodeBlock(cb, tools)}
            else if(fn=='nextFunction'){this.nextFunction(cb, tools)}
            else if(fn=='nextHTML'){this.nextHTML(cb, tools)}
            else if(fn=='nextFinding'){this.nextFinding(cb, tools)}
        }
        return this;
    }
}
//page lookAhead means that if there is not a match in the delmited string, it will
//aggregate the next delimited string with the previous and search again. It will do this
//until pageLookAhead is met
// var sherlock = new Sherlock(MOBY_DICK, {'lineCount':3, 'delimiter':"\n", "pageLookAhead":true})

// console.log(sherlock.pageQueue)