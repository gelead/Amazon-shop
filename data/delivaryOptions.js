
export function getDelivaryOption(delivaryOptionId){
    let delivaryOption;
    delivaryOptions.forEach((option) => {
      if (option.id === delivaryOptionId) {
        delivaryOption = option;
      }
    });
    return delivaryOption || delivaryOptions[0];
}

export const delivaryOptions = [{
    id: '1',
    delivaryDays: '7',
    delivaryPrice: 0
},
{
    id: '2',
    delivaryDays: '3',
    delivaryPrice: 499
},
{
    id: '3',
    delivaryDays: '1',
    delivaryPrice: 999
}]