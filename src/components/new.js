
// 전개 연산자 
// 특정객체 또는 배열값을 다른객체,배열로 복제해서 옮길 때 사용 

// 형태 : ...
// setHistory([...history, {squares: newSquares}])

// 1. 배열 조합 가능
// 2. 객체 조합 가능 
// 3. 기존배열 보존 역할 

// 1 배열 조합 가능 
// const arr1 = [ 1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1 , ...arr2];

// console.log(arr3);

// 2. 객체 조합 가능 
// object 조합을 가능하게 객체 자체 X 각각 O 

// 3. 기존배열을 보존할 때 사용가능 
// 전개 연산자 사용 X -> 매쏘드로 기존 배열에 변화 => 원본배열에 변화 반영 
// 전개 연산자 사용 O -> 매쏘드로 기존 배열에 변화 => 원본배열 유지 

// map : 배열 내의 있는 리스트 나열 매쏘드
// - 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아서 
// 새로운 배열을 반환해줌 

// - 형태 : array.map(callbackFunction, [thisArg]);

// - const arr1 = [ 1,2,3];
// const map = arr1.map(x => x * 2);