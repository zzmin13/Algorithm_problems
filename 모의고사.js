function solution(answers) {
    var answer = [];
    let person1 = [1,2,3,4,5]; //length: 5
    let person2 = [2,1,2,3,2,4,2,5]; //length: 8
    let person3 = [3,3,1,1,2,2,4,4,5,5]; //length: 10

    let person1_point = 0;
    let person2_point = 0;
    let person3_point = 0;

    for(let i = 0; i < answers.length; i++){
        if(answers[i] === person1[i % person1.length]){
            person1_point++;
        }
        if(answers[i] === person2[i % person2.length]){
            person2_point++;
        }
        if(answers[i] === person3[i % person3.length]){
            person3_point++;
        }
    }

    let max = Math.max(person1_point, person2_point, person3_point);
    if(max === person1_point){
        answer.push(1);
    }
    if(max === person2_point){
        answer.push(2);
    }
    if(max === person3_point){
        answer.push(3);
    }

    return answer;
}
