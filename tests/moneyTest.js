import {moneyformater} from '../scripts/utils/moneyformat.js';

if(moneyformater(2090) == '20.90'){
    console.log('Passed')
}else{
    console.log('Failed')
}

if(moneyformater(0) == '0.00'){
    console.log('Passed')
}else{
    console.log('Failed')
}

if(moneyformater(2000.8) == '20.01'){
    console.log('Passed')
}else{
    console.log('Failed')
}