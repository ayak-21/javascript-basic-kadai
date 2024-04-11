const today= new Date();

const date = () => {
  console.log(today.getFullYear()+'年');
  console.log((today.getMonth()+1)+'月');
  console.log(today.getDate()+'日');
}
date();