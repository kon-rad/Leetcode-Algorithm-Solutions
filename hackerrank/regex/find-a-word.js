/**
 * 
We define a word as a non-empty maximum sequence of characters that can contain only lowercase letters, uppercase letters, digits and underscores '_' (ASCII value 95). Maximum sequence means that the word has to be immediately preceeded by a character not allowed to occur in a word or by the left boundary of the sentence, and it has to be immediately followed by a character not allowed to occur in a word or by the right boundary of the sentence.

Given  sentences and  words, for each of these words, find the number of its occurences in all the  sentences.

Input Format

In the first line there is a single integer . Each of the next  lines contains a single sentence. After that, in the next line, there is a single integer  denoting the number of words. In the -th of the next  lines, there is a single word denoting the -th word for which, you have to find the number of its occurences in the sentences.

Constraints

 

Output format

For every word, print the number of occurrences of the word in all the N sentences listed.

Sample Input

1
foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.
1
foo
Sample Output

6
Explanation

foo is the first word
(foo) is preceeded by '(' and followed by ')', so it's the second word.
foo-bar is considered as two words and 'foo' is the first of them. It is preceeded by a space and followed by a hyphen '-'
bar-foo also contains foo for the same reason mentioned above
foo_bar is a single single word and hence foo in it is not counted
foo'bar is considered as two words and 'foo' is the first of them. It is preceeded by a space and followed by a apostrophe "'"
foo. as it is preceeded by a space and followed by a dot'.'
 */

function processData(input) {
  input = input.split('\n');
  let n = parseInt(input[0]);
  let sent = input.slice(1, 1+n).join('\n');
  let t = parseInt(input[1+n]);
  let words = input.slice(2+n, 2+n+t);
  let regex;
  
  words.forEach(w => {
      regex = new RegExp('\\b' + w + '\\b', 'gm');
      console.log((sent.match(regex) || []).length);
  });
}