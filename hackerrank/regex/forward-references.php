<!-- NOTE - Forward reference is supported by JGsoft, .NET, Java, Perl, PCRE, PHP, Delphi and Ruby regex flavors.

Forward reference creates a back reference to a regex that would appear later. 
Forward references are only useful if they're inside a repeated group. 
Then there may arise a case in which the regex engine evaluates the backreference after the group has been matched already.

ach21.png

Task

You have a test string . 
Your task is to write a regex which will match , with following condition(s):

 consists of tic or tac.
tic should not be immediate neighbour of itself.
The first tic must occur only when tac has appeared at least twice before.
Valid 

tactactic
tactactictactic
Invalid 

tactactictactictictac
tactictac
Note

This is a regex only challenge. You are not required to write any code. 
You only have to fill the regex pattern in the blank (_________). -->


<?php
$Test_String = 'tactactictactic';

$Regex_Pattern = '/^(\2tic(?!tic)|(tac))+$/';

if(preg_match($Regex_Pattern, $Test_String, $output_array)){
    print ("true  \n");
} else {
    print ("false");
}

print implode("|",$output_array);