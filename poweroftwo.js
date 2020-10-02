//Objective is to see if a number is a power of two

let num = 8


//O(1) solution that uses bit manipulation

//Check for edge cases (0 and overflow)
if (n == 0 || n == -2147483648) {
    return false
}

//A reminder that -x = ~x + 1
//So for example, if x = 4 (0100)
//Then -4 would be (1011 + 1) or (1100)
//Finally (0100) & (1100) = (0100) -> only 1 & 1 = 1
return (n & (-n)) == n


//O(1) solution that uses bitwise AND

if (n == 0 || n == -2147483648) {
    return false
}

//The idea here is that (n & (n - 1)) turns off the leftmost 1 bit
//If the value is a power of 2, it only has one 1 bit. If we turn it off,
//the value should be zero
return (n & (n - 1)) == 0