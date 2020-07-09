#!/bin/bash
# chmod +x prod_build_deploy_pieos_website_s3.sh

BASEDIR=$(dirname "$0")

red=`tput setaf 1`
green=`tput setaf 2`
magenta=`tput setaf 6`
reset=`tput sgr0`

cd "${BASEDIR}/.."

gatsby clean
gatsby build

export AWS_ACCESS_KEY_ID=`cat ${BASEDIR}/PROD_S3_AWS_ACCESS_KEY_ID`
export AWS_SECRET_ACCESS_KEY=`cat ${BASEDIR}/PROD_S3_AWS_SECRET_ACCESS_KEY`
export AWS_DEFAULT_REGION=`cat ${BASEDIR}/PROD_S3_AWS_DEFAULT_REGION`

echo "${red}Do you want to deploy [PIEOSWebSite][Production]?${reset}"
echo "write YES to proceed deploy process"
read USER_CONFIRM_TO_PROCEED
if [ "$USER_CONFIRM_TO_PROCEED" != "YES" ]; then
  exit 1
fi

echo "${red}[PIEOSWebSite]${green}[Production]${reset} starting s3 bucket sync"

aws s3 sync ${BASEDIR}/../public/ s3://pieos.io/ --exclude "documents/*" --delete

echo "${red}[PIEOSWebSite]${green}[Production]${reset} s3 bucket sync finished"

sleep 5
open "https://pieos.io"
