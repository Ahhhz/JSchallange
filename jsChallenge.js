//problem 1
const a = 86;
const b = 2017;

console.log(a+b);

const c = 'cashMeOutside';
const d = 'howBoutDa';
console.log(c + " " + d);

//end problem 1


//problem 2

const genre=['HipHop', 'Rock'];
const artists = ['Wale','Rage Against the Machine'];
const music = [ ['HipHop', 'Rock'],['Wale','Rage Against the Machine'] ];
console.log(music[0] [0]);
console.log(music[1] [0]);


//end problem 2


//problem 3
const num = 101;

if ( num < 100||num===0) {
    alert( num + ' is less than 100');
}
else if(num===100){
    alert( 'Bravo ' + num + ' is the magic number');
}

else {
    alert(num + ' is greater than 100 ');
}

//problem 3 with function
function checkValue(number){

    const input = number;
    const bravo = 'Bravo ' + input + ' is less than 100';
    const noGo = input + ' which is greater than 100';


     if(input < 100||input===0){
      alert (bravo)
  }

    if(input===100){
        alert(input + ' is the Magic number')
    }
    else if(input > 100){
        alert ('You entered ' +  noGo)
    }

    else{
        // alert ('Please input number')
    }


}
checkValue(1000);


//end problem 3


//problem 4
function nameGenerator(name){

     const response=`You have entered ` + name + ` as your name`;

     return response;


}

console.log(nameGenerator('Oz'))

// //end of problem 4



//problem 5

function virtualDoor(random) {
  const choice = random;


  if (choice === 'door number one') {
    alert( 'You\'ve won a cookie');
  } else if (choice === 'door number two') {
    alert('You\'ve won a paid vacation to Camden NJ');
  } else if (choice === 'door number three') {
  alert('You\'ve won the grand prize of a Porche 911!');
  }
  else {
    alert('Try again some other lifetime');
  }
}

virtualDoor('door number one')
virtualDoor('door number two')
virtualDoor('door number three')
