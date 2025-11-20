import './styles.css';
type CellState = "sand"|"empty";

class fallingSandGame{
    private outerdiv = document.getElementById("outerdiv") as HTMLDivElement;
    private readonly columns = 10;
    private readonly rows = 10;
    private statusBoard:CellState[][] = [];
    private elementBoard:HTMLDivElement[][] = []
    constructor(){
        this.createButtons();
        this.createDivs();
    }
    private createButtons(){
        for(let i = 0; i<this.columns;i++){
            // creates and add button to HTML
            const button = document.createElement("div") as HTMLDivElement;
            button.className = "button";
            button.textContent = "⬇";
            this.outerdiv.appendChild(button);
            // adds eventlistener to button
            button.addEventListener("click", ()=>this.click(i));
        }
    }
    //chat gpt function 
    private sleep(time:number){
          return new Promise(resolve => setTimeout(resolve, time));
    }
    private createDivs(){
        for(let r = 0; r<this.rows; r++){
            const elementRow:HTMLDivElement[] = [];
            const statusRow:CellState[] = []
            for(let c = 0; c<this.columns;c++){

                //create and append cell to HTML
                const cell = document.createElement("div") as HTMLDivElement;
                cell.className = "cell empty";
                this.outerdiv.appendChild(cell);
                
                //push elements into elementRow and statusRow
                elementRow.push(cell);
                statusRow.push("empty");
            }
            this.elementBoard.push(elementRow);
            this.statusBoard.push(statusRow);
        }
    }

    async click(column:number){
        if(this.statusBoard[0]![column] === "sand"){
            return;
        }
        for(let row = 0; row<this.rows;row++){
            if(this.statusBoard[row]![column]==="empty"){
                //change the color of the cell in the 2d array
                this.statusBoard[row]![column] = "sand";
                if(row>0){
                    this.statusBoard[row-1]![column]= "empty";
                }
                //remove all previous classes
                this.elementBoard[row]![column]?.classList.remove("empty","sand");
                //manipulate the css class
                this.elementBoard[row]![column]?.classList.add("sand");
                if(row>0){
                    this.elementBoard[row-1]![column]?.classList.add("empty");
                }
                await this.sleep(50);
            }
        }
    }


}
const game = new fallingSandGame();