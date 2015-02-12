#!/bin/bash
# uses hugo to build with base tag
echo hugo -b"http://demo.$1.com/static.$1.com/angularity.github.io/"
hugo -b"http://demo.$1.com/static.$1.com/angularity.github.io/"
