/*Given 2 strings, your job is to find out if there is a substring that appears in both strings.
You will return true if you find a substring that appears in both strings, or false if you do not. 
We only care about substrings that are longer than one character.
Substrings are case-insensitive, e.g. "aB" and "Ab" should compare equal in this kata. 

Parameters: 2 strings (str1 and str2)
Return: a boolean of true or false
Example: str1 is 'participate' and str2 is 'dedicate'
Psuedo Code:
- Goal:check if there's a common substring longer than one character
- Convert str1 and str2 to lowercase (.toLowerCase())
- Loop through str1  to find substrings (at least 2 characters)
- Check if each substring is in str2 
- Return true, if found 
- Return false, if not found
*/

function substringTest(str1, str2){
    str1 = str1.toLowerCase(); 
    str2 = str2.toLowerCase(); 

    for(let a = 0; a < str1.length - 1; a++) { 

        for (let b = a + 2; b <= str1.length; b++) { 
            let sub = str1.substring(a, b); 
            
            if (str2.includes(sub)) { 
                return true; 
            }
       
        }
    }

    return false; 
}