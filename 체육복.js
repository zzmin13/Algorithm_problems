//문제 출처: [프로그래머스] https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    var answer = 0;
    answer = n - lost.length;
    
    for(let l = 0; l<lost.length; l++){    // 도난당한 학생이랑 여유분이 있는 학생이랑 같을 때
        for(let r = 0; r < reserve.length; r++){
            if(lost[l] === reserve[r]){
                answer++;
                lost[l] = -1;   // 아예 비교 못하게 -1 값으로 바꿔버림
                reserve[r] = -1; // 아예 비교 못하게 -1 값으로 바꿔버림
                break;
            }
        }
    }
    
    for(let l = 0; l< lost.length; l++){
        for(let r = 0; r < reserve.length; r++){
            if(lost[l]+1 === reserve[r] 
              || lost[l]-1 === reserve[r])
                {
                    answer++;
                    reserve[r] = -1;
                    break;
                }
        }
           
    }
  return answer; 
  }
  
  console.log(solution(5,[2,4],[1,2,5]));
  