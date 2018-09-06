#!/bin/bash
# 
# Cleans and deploys the project to S3.
#
# Usage:
#   ./deploy.sh <ACCESS_KEY> <SECRET_KEY>
#
# Sources:
# - https://kylewbanks.com/blog/jekyll-blog-on-s3-without-html-extension
# - https://simpleit.rocks/having-pretty-urls-in-a-jekyll-website-hosted-in-amazon-s3/

# Initialize some vars
BUILD_DIR="./_site"
DEPLOY_DIR="deploy"

# Copy the site directory to a temporary location so that modifications we make don't get overwritten by the Jekyll server
# that is potentially running
mkdir -p $DEPLOY_DIR
cp -a $BUILD_DIR/. $DEPLOY_DIR

# Remove the .html extension from all blog posts for sexy URLs
for filename in $DEPLOY_DIR/*.html; do
    if [ $filename != "$DEPLOY_DIR/index.html" ] && [ $filename != "$DEPLOY_DIR/404.html" ] ;
    then
        original="$filename"

        # Get the filename without the path/extension
        filename=$(basename "$filename")
        extension="${filename##*.}"
        filename="${filename%.*}"

        # Move it
        mv $original $DEPLOY_DIR/$filename
    fi
done

# Now upload to s3, deleting any items that no longer exist
aws s3 sync --delete $DEPLOY_DIR s3://$S3_BUCKET_NAME

# Finally, upload the blog directory specifically to force the content-type
aws s3 cp $BUILD_DIR/ s3://$S3_BUCKET_NAME --recursive --content-type "text/html" --exclude "*.*" --acl public-read
aws s3 cp $BUILD_DIR/ s3://$S3_BUCKET_NAME --recursive --exclude "*" --include "*.*" --acl public-read

# Cleanup
rm -r $DEPLOY_DIR
