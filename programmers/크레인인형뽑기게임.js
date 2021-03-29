function solution(board, moves) {
    var answer = 0;
    let emptyBin = [];
    let target;
    
    for(let i = 0; i < moves.length; i++){
        for(let j = 0; j < board.length; j++){ // 세로로 반복해야하기 때문에 
            if(board[j][moves[i]-1] !== 0){
                target = board[j][moves[i]-1]; // 1을 빼준 이유는 moves가 1이라는 것은 사실 0열이기 때문(인덱스가 0부터 시작하니까)
                emptyBin.push(target);
                board[j][moves[i]-1] = 0;
                // console.log(`emptyBin : ${emptyBin.toString()}`);
  if(emptyBin.length >=2 && emptyBin[emptyBin.length-1] === emptyBin[emptyBin.length-2]){
                  emptyBin.pop();
                  emptyBin.pop();
                  answer += 2;
                  // console.log(`인형 터짐! 터진인형수: ${answer}개 추가`);
                  // console.log(`현재 emptyBin: ${emptyBin.toString()}`)
                
                  }
              break;
            }
            
        }
        
    }
    return answer;
  }
  console.log(solution([[0,2,0],[1,2,0],[2,2,1]], [1,2,2,2,1,3]));