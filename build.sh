#!/bin/bash
rm -rf client
git clone https://github.com/leandersteiner/mauw-ss2023
cd mauw-ss2023 || exit
npm i
npm run build
mv dist ../client
cd ..
rm -rf mauw-ss2023

docker build --tag leandersteiner/mauwss2023 .