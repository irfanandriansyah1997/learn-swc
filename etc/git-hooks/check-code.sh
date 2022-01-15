#!/bin/bash
echo "Checking syntax..."

ROOT_DIR="$(pwd)"
LIST=$(git diff-index --cached --name-only --diff-filter=ACMR HEAD)
ERRORS_BUFFER=""

FILE_PATTERN="\.(js|es6|jsx|tsx|ts|scss|css)$"

ESLINT_CONFIG=$ROOT_DIR/.eslintrc.js
ESLINT_IGNORE_CONFIG=$ROOT_DIR/.eslintignore
ESLINT_BIN=$ROOT_DIR/node_modules/.bin/eslint


TMP_STAGING=".tmp_staging"

# stolen from template file
if git rev-parse --verify HEAD
then
    against=HEAD
else
    # Initial commit: diff against an empty tree object
    against=4b825dc642cb6eb9a060e54bf8d69288fbee4904
fi

# this is the magic:
# retrieve all files in staging area that are added, modified or renamed
# but no deletions etc
FILES=$(git diff-index --name-only --cached --diff-filter=ACMR $against -- )

if [ "$FILES" == "" ]; then
    exit 0
fi

# create temporary copy of staging area
if [ -e $TMP_STAGING ]; then
    rm -rf $TMP_STAGING
fi
mkdir $TMP_STAGING

# match files against whitelist
FILES_TO_CHECK=""
for FILE in $FILES
do
    echo "$FILE" | egrep -q "$FILE_PATTERN"
    RETVAL=$?
    if [ "$RETVAL" -eq "0" ]
    then
        FILES_TO_CHECK="$FILES_TO_CHECK $FILE"
    fi
done

if [ "$FILES_TO_CHECK" == "" ]; then
    exit 0
fi

# Copy contents of staged version of files to temporary staging area
# because we only want the staged version that will be commited and not
# the version in the working directory
JS_STAGED_FILES=""
STYLE_STAGED_FILES=""
for FILE in $FILES_TO_CHECK
do
  ID=$(git diff-index --cached $against $FILE | cut -d " " -f4)

  # create staged version of file in temporary staging area with the same
  # path as the original file so that the phpcs ignore filters can be applied
  mkdir -p "$TMP_STAGING/$(dirname $FILE)"
  git cat-file blob $ID > "$TMP_STAGING/$FILE"

  echo "$FILE" | egrep -q "\.(js|jsx|ts|tsx)$"
  RETVAL=$?
  if [ "$RETVAL" -eq "0" ] && [ "$FILE" != ".eslintrc.js" ]
  then
      echo "$FILE"
      JS_STAGED_FILES="$JS_STAGED_FILES $FILE"
  fi


  echo "$FILE" | egrep -q "\.(scss|css)$"
  RETVAL=$?
  if [ "$RETVAL" -eq "0" ]
  then
      echo "$FILE"
      STYLE_STAGED_FILES="$STYLE_STAGED_FILES $FILE"
  fi

done

rm -r ./tmp
mkdir ./tmp
echo "" > ./tmp/eslint.txt

ESLINT_RETVAL=0
if [ "$JS_STAGED_FILES" != "" ]; then
    # will fix after free sprint
    $ESLINT_BIN -o ./tmp/eslint.txt --no-ignore --no-color --max-warnings 0 --ignore-path $ESLINT_IGNORE_CONFIG -c $ESLINT_CONFIG $JS_STAGED_FILES
    ESLINT_RETVAL=$?
fi

# delete temporary copy of staging area
rm -rf $TMP_STAGING

if [ $ESLINT_RETVAL -ne 0 ]; then
    cat ./tmp/eslint.txt
fi


RETVAL=$(($ESLINT_RETVAL))
rm -rf ./tmp
rm -r $TMP_STAGING
exit $RETVAL