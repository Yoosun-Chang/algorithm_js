/*
조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

한글의 자모 24자 중 자음은 총 14개입니다.
이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

‘한글 맞춤법’의 제2장 제4항에서는 한글의 기본 자모 24자 “ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗), ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)”를 제시

나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

<--요구 조건-->
1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
2. 두 번째 입력으로 조합의 수가 주어집니다.
3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.
*/

function combination(chars) {
    let combi = [];

    const f = (prefix, chars) => {
      for (let i=0; i<chars.length; i++) {
        combi.push(prefix + chars[i]);

        f(prefix + chars[i], chars.slice(i + 1));
      }
    }

    f('', chars);

    //조합의 수에 맞는 것만 추출!
    const result = combi.filter(x => x.length === n);
    console.log(result);

    return result.length;
}

const arr = prompt('입력해주세요').split(',');
const n = parseInt(prompt('조합의 수를 입력해주세요'), 10);

console.log(combination(arr));