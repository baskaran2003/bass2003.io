var names=new Array();
names[0]="Bass";
names[1]="Mohan";
names[2]="Yaakav";
names[3]="john";
names[4]="jagdeesh";
names[5]="sofia";
names[6]="rolex";
names[7]="raj";
names[8]="janu";
names[9]="Molu";

for(var i=0;i<names.length;i++)
{
    if(names[i].charAt(0)=='j'||names[i].charAt(0)==='j'){
        console.log("Goodbye  "+names[i]);
    }
    else{
        console.log("Hello  "+names[i]);
    }
}

