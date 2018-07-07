const address = {
    city: "Lyon",
    state: "FR",
    zip: 69001
  };

const sportList = ['Football', 'BasketBall']
const otherSportList = ['Boxe', 'Judo']

function display({city}, {state}, {zip}, sportList=[], ...otherSportList){
    const list = [...sportList, ...otherSportList];
    console.log(`${state}: ${zip} ${city} => ${list}`);
}

display(address, address, address, sportList, otherSportList);