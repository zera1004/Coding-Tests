function solution(arr)
{
    return arr.filter((i,j) => {
        return i !== arr[j-1];
    })
}