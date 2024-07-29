function solution(str){
    let split = str.split('');
    let rev = split.reverse();
    let join = rev.join('');
    return join;
}