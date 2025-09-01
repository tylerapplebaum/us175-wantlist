#!/bin/bash

files=$(ls *.jpg)

for file in $files
do
	file_new="${file%.*}.webp"
	cwebp -q 80 $file -o $file_new
done
