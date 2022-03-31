class Mall {
    constructor(mallName, location, traffic){
        this.mallName = mallName;
        this.location = location;
        this.traffic = traffic;
        this.space = 100;
        this.isOpen = true;
        this.sponsors =[];
        this.stores = {
            macys: 25,
            hotTopic: 10,
            foodCourt: 90,

        };
    }

    inputstore(store){
        const afterInputOfStore = this.space - this.stores[store];
        if (afterInputOfStore < 50) {
            this.space = afterInputOfStore;
            console.log("almost out of space!  ")

        }
        else {
            this.space = afterInputOfStore;
            console.log(`${store} is added to ${this.mallName}. thier is now ${this.space} amount of space left`)
        }
        if (afterInputOfStore <= 10) {
            this.space = afterInputOfStore;
            console.log(`${this.mallName} is under construction! Cannot add any more stores`)
        }
    }



}


class Supermall extends Mall {
    constructor(mallName, location, traffic){
        super(mallName, location, traffic);

        this.space = 250;
        this.stores = {
            macys: 35,
            hotTopic:20,
            foodCourt:50,
            jewelryK: 30,
            champions:25,
        }
    }


}


const ComberlandMall = new Mall ("Comberland Mall", "Marrieta", "Moderate");

// console.log(ComberlandMall)

const linuxMall = new Supermall ("linux Mall", "Atlanta", "suvier");
// console.log(ComberlandMall);
// ComberlandMall.inputstore(["foodCourt"]);

// if (i =this.space, ComberlandMall.space < 5, i++ )

console.log(ComberlandMall);
ComberlandMall.inputstore(["foodCourt"]);
