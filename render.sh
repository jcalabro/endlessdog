#!/usr/bin/env bash

sed 's/ /\&nbsp;/g' dog.txt | perl -pe 's/\n/<br \/>/g' | sed 's/\\/\\\\/g' | sed 's/xxx/<span class="body-top"><\/span>/g' | sed 's/yyy/<span class="body-bottom"><\/span>/g' > output.txt
pbcopy < output.txt
