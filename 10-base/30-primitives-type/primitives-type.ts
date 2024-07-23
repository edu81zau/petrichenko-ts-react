console.log("null === undefined     :", null === undefined); // false
console.log("null == undefined      :", null == undefined); // true
console.log("null != undefined      :", null != undefined); // false
console.log("null == null           :", null == null);
console.log("null === null          :", null === null);
console.log("true == null           :", true == null);
console.log("false == null          :", false == null);
console.log("true === null          :", true === null); // false
//console.log("true == 1              :", true == 1); // error TS2367: This comparison appears to be unintentional because the types 'boolean' and 'number' have no overlap.
console.log("------------------------");
//console.log("never == null          :", never == null); //error TS2693: 'never' only refers to a type, but is being used as a value here.
//console.log("------------------------");
let str: string = `My`;
let tmpStr: string;
let num: number = 7;
let bolTrue: boolean = true;
let bolFalse: boolean = false;
let myAny: any = "any";
let uDef: undefined;
let tmpBol: boolean;
let tmpNum: number;
let tmpUdef: undefined;
let tmpNull: null;

console.log("str type          :", typeof str);
// console.log("tmpStr type  :", typeof tmpStr); // error TS2454: Variable 'tmpStr' is used before being assigned.
// console.log("tmpStr == tmpStr  :", tmpStr == tmpStr); // error TS2454: Variable 'tmpStr' is used before being assigned.
tmpStr = "";
console.log("tmpStr type        :", typeof tmpStr); // Ok. Above we assegned en empty string.
console.log("tmpStr == tmpStr   :", tmpStr == tmpStr);
console.log("tmpStr == tmpUdef  :", tmpStr == tmpUdef);
console.log("tmpStr !== tmpUdef :", tmpStr !== tmpUdef);
//console.log("tmpBol", tmpBol); // error TS2454: Variable 'tmpBol' is used before being assigned.

//console.log("tmpNum", tmpNum); // error TS2454: Variable 'tmpNum' is used before being assigned.

console.log("tmpUdef type         :", typeof tmpUdef);
console.log("tmpUdef              :", tmpUdef); // Ok
console.log("tmpUdef == undefined :", tmpUdef == undefined);
console.log("tmpUdef == null      :", tmpUdef == null);

//console.log("tmpNull", tmpNull); // error TS2454: Variable 'tmpNull' is used before being assigned.
// console.log("tmpNull type :", typeof tmpNull); // error TS2454: Variable 'tmpNull' is used before being assigned.
