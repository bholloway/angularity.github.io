#!/bin/bash
#installation steps to get this blog up and running

go get -v github.com/spf13/hugo 
# make sure that hugo is on your PATH, e.g. in ~/.bashrc :
# export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
# alternative ways: http://gohugo.io/overview/installing/

mkdir themes
git clone https://github.com/spf13/hyde themes/hyde
