/*
P 회사의 회계를 처리하던 은정은 커피를 마시다가 키보드에 커피를 쏟고 말았습니다.
휴지로 닦고 말려보았지만 숫자 3, 4, 6이 도통 눌리지 않습니다.
10분 뒤, 모든 직원들에게 월급을 입금해 주어야 합니다.
여유 키보드는 없으며, 프로그래밍을 매우 잘하고, 모든 작업을 수작업으로 하고 있습니다.

이에 눌리지 않는 키보드를 누르지 않고 월급 입금을 두 번에 나눠주고 싶습니다.

1. 직원은 2000명이며, 3초 이내 수행을 해야합니다.
2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식으로 주어집니다.
3. 출력값의 형식은 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 입니다. 또는 '1,000,000', '2,000,000', 'S은행', '100-0000-0000-000' 도 괜찮습니다.
*/

const 입력값 = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`

let 나눠진입력값 = 입력값.split('\n');
let 숫자값 = [];

for (let i of 나눠진입력값){
  let j = i.split(',');
  let k = j.slice(1, j.length-2);
  숫자값.push(k.join(''))
}

console.log(숫자값);
let 월급하나 = '';
let 월급둘 = '';
let result = [];
for (let 월급 of 숫자값){
  console.log(월급)
  for (let 나뉜월급 of 월급){
    console.log(나뉜월급)
    if (나뉜월급 != '\''){
      if (나뉜월급 == 3){
        월급하나 += '1';
        월급둘+= '2';
      } else if (나뉜월급 == 4){
        월급하나 += '2';
        월급둘+= '2';
      } else if (나뉜월급 == 6){
        월급하나 += '1';
        월급둘+= '5';
      } else {
        월급하나 += 나뉜월급;
        월급둘+= '0';
      }
    }
  }
  console.log(월급하나);
  console.log(월급둘);
  result.push([parseInt(월급하나, 10), parseInt(월급둘, 10)]);
  월급하나 = '';
  월급둘 = '';
}
console.log(result);