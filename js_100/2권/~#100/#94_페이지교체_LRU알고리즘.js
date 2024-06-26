function solution(frame, page){
    let runTime = 0;
    let temp = [];
  
    // frame이 0일때, page의 크기만큼 6을 곱해주고 끝낸다.
    if (frame === 0){
      runTime = page.length * 6;
      return runTime;
    }
  
    for (let i of page){
      if (temp.includes(i)){
        // hit - 해당 페이지를 삭제하고 맨 뒤에 저장
        temp.splice(temp.indexOf(i), 1);
        temp.push(i);
        runTime += 1;
      } else {
        // 배열이 비었으면 무조건 넣어야 하므로 if문을 사용
        if (temp.length < frame){
          temp.push(i);
        } else {
          // 가장 사용되지 않은 첫번째 배열을 제거하고 맨 뒤에 입력값을 저장
          temp.shift(); 
          temp.push(i);
        }
        runTime += 6;
      }
    }
    return runTime;
  }
  
  const f = parseInt(prompt('프레임을 입력해주세요.'), 10);
  const page = prompt('페이지를 입력해주세요.').split('');
  
  console.log(solution(f, page));