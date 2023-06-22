#!/bin/bash
cd ..
rm -rf mauw-ss2023
git clone https://github.com/leandersteiner/mauw-ss2023
cd mauw-ss2023 || exit
npm i
npm run build
mv dist ../mauw-ss2023-backend/client
cd ../mauw-ss2023-backend || exit

docker build --tag leandersteiner/mauwss2023 .